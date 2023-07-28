'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import React from 'react';
import { GlobalContext } from '@src/context/global.context';
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@src/firebase';
import { Loader2 } from 'lucide-react';

type Props = {};

const NewChat = (props: Props) => {
  const { data: session } = useSession();
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const { state, dispatch } = React.useContext(GlobalContext);
  const createNewChat = async () => {
    setLoading(true);
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        userId: session?.user && session?.user.email!,
        createdAt: serverTimestamp(),
      }
    );
    setLoading(false);
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div className='border border-gray-700 chatRow' onClick={createNewChat}>
      {loading ? (
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <PlusIcon className='h-4 w-4' />
      )}
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
