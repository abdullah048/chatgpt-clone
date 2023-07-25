'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { GlobalContext } from '@src/context/global.context';

type Props = {};

const NewChat = (props: Props) => {
  const { state, dispatch } = React.useContext(GlobalContext);
  return (
    <div
      className='border border-gray-700 chatRow'
      onClick={() => dispatch({ type: 'INCREMENT' })}>
      <PlusIcon className='h-4 w-4' />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
