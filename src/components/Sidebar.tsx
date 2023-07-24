import React from 'react';
import NewChat from './NewChat';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        <div>
          <NewChat />
          <div>{/* TODO: Modal select */}</div>
          {/* TODO:  ChatList  */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
