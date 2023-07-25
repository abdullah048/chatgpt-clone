'use client';
import React from 'react';
import NewChat from './NewChat';
import { signOut, useSession } from 'next-auth/react';
import Dropdown from './Dropdown';

type Props = {};

const Sidebar = (props: Props) => {
  const { data: session } = useSession();
  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1 overflow-y-auto'>
        <div>
          <NewChat />
          <div>{/* TODO: Modal select */}</div>
          {/* TODO:  ChatList  */}
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
