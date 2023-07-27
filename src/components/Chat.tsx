import React from 'react';

type Props = {
  chatId: string;
};

const ChatWindow = (props: Props) => {
  const { chatId } = props;
  return <div className='flex-1'>ChatWindow</div>;
};

export default ChatWindow;
