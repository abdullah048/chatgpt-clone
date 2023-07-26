'use client';
import React from 'react';
import NewChat from './NewChat';
import { signOut, useSession } from 'next-auth/react';
import Dropdown from './Dropdown';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@src/firebase';
import ChatRow from './ChatRow';
import ContentLoader from 'react-content-loader';
import { toast } from 'react-hot-toast';

type Props = {};

const Sidebar = (props: Props) => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, `users/${session.user?.email!}/chats`),
        orderBy('createdAt', 'asc')
      )
  );

  if (error) {
    toast.error(error.message);
    console.log('error: ', error);
    return;
  }

  return (
    <div className='p-2 flex flex-col h-screen gap-8'>
      <div className='flex-1 overflow-y-auto'>
        <div>
          <NewChat />
          <div>{/* TODO: Modal select */}</div>
          {chats?.docs.map((chat, index) => {
            return (
              <div className='mt-2 w-full' key={chat.id}>
                {loading ? (
                  <ContentLoader
                    className='w-[130px] md:w-full'
                    height={44}
                    speed={1.5}
                    backgroundColor={'#333'}
                    foregroundColor={'#9b9999'}>
                    <rect x='0' y='0' rx='4' ry='4' width='100%' height='44' />
                  </ContentLoader>
                ) : (
                  <ChatRow id={chat.id} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* NOTE: if user authenticated show profile image */}
      {session && (
        <div className='flex justify-center items-center'>
          <Dropdown
            dropdownList={[
              {
                label: 'Logout',
                func: () => signOut(),
              },
            ]}
            anchor='up'
            menu={
              <img
                className='rounded-full w-[50px] h-[50px] cursor-pointer mb-2 hover:opacity-50 transition-opacity duration-200 ease-out'
                src={session.user?.image ?? ''}
                alt='profile-image'
              />
            }
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
