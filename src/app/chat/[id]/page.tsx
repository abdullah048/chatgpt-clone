import ChatWindow from '@src/components/Chat';
import ChatInput from '@src/components/ChatInput';
import React from 'react';

type Props = {
  params: {
    id: string;
    searchParams: {};
  };
};

const Chat = (props: Props) => {
  const {
    params: { id },
  } = props;
  return (
    <div className='flex flex-col h-screen overflow-hidden gap-[10px]'>
      <ChatWindow chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};

export default Chat;
