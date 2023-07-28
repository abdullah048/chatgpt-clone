import { DocumentData } from 'firebase/firestore';
import React from 'react';
import Typist from 'react-typist';

type Props = {
  message: DocumentData;
};

const Message = (props: Props) => {
  const { message } = props;
  const isChatGpt = message?.user?.name === 'CHATGPT';
  return (
    <div className={`py-5 text-white  w-full ${isChatGpt && 'bg-[#434654]'}`}>
      <div className='flex space-x-5 px-10'>
        <img src={message?.user?.avatar} alt='avatar' className='h-8 w-8' />
        {isChatGpt ? (
          <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}>
            {message?.text ?? 'Message'}
          </Typist>
        ) : (
          <p className='pt-1 text-sm'>{message?.text ?? 'Message'}</p>
        )}
      </div>
    </div>
  );
};

export default Message;
