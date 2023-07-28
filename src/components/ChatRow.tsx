import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { db } from '@src/firebase';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { toast } from 'react-hot-toast';
import Typist from 'react-typist';

type Props = {
  id: string;
};

const ChatRow = (props: Props) => {
  const { id } = props;
  const [loading, setLoading] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = React.useState<boolean>(false);
  const { data: session } = useSession();
  const [messages] = useCollection(
    collection(db, `users/${session?.user?.email}/chats/${id}/messages`)
  );
  const removeChat = async () => {
    setLoading(true);
    await fetch('/api/deleteChat', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId: id,
        session,
      }),
    })
      .then(async response => {
        if (response.status == 200) {
          await deleteDoc(
            doc(db, `users/${session?.user?.email!}/chats/${id}`)
          );
        }
      })
      .catch(err => {
        toast.error('Error while deleting chat.');
        console.log(err);
      });
    router.replace('/');
  };

  React.useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);

  return (
    <React.Fragment>
      {loading && (
        <div className='absolute inset-0 bg-slate-700/30 flex justify-center items-center h-screen z-10'>
          <Loader2 className='h-8 w-8 animate-spin text-gray-400/50' />
        </div>
      )}
      <Link
        href={`/chat/${id}`}
        className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}>
        <ChatBubbleLeftIcon className='w-4 h-4' />
        <div className='flex-1 hidden md:inline-flex truncate'>
          <Typist cursor={{ show: false }}>
            {messages?.docs[messages?.docs.length - 1]?.data().text ??
              'New Chat'}
          </Typist>
        </div>
        <TrashIcon
          onClick={removeChat}
          className='w-4 h-4 hover:text-red-700'
        />
      </Link>
    </React.Fragment>
  );
};

export default ChatRow;
