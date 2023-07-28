'use client';

import { db } from '@src/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';
import { useRouter } from 'next/navigation';

type Props = {
  chatId: string;
};

const ChatWindow = (props: Props) => {
  const { chatId } = props;
  const { data: session } = useSession();
  const router = useRouter();
  const [messages, loading, error] = useCollection(
    session &&
      query(
        collection(db, `users/${session.user?.email}/chats/${chatId}/messages`),
        orderBy('createdAt', 'asc')
      )
  );

  // if (!messages?.docs.length) {
  //   router.replace('/');
  // }

  return (
    <div className='flex-1 flex flex-col items-start overflow-y-auto'>
      {messages?.docs.map(message => {
        return <Message key={message.id} message={message.data()} />;
      })}
    </div>
  );
};

export default ChatWindow;
