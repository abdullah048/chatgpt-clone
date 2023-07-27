'use client';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { Message } from '../../typings';
import { db } from '@src/firebase';

type Props = {
  chatId: string;
};

const ChatInput = (props: Props) => {
  const { chatId } = props;
  const [promptText, setPromptText] = React.useState<string>('');
  const { data: session } = useSession();

  //   TODO: useSWR to get different modals

  const modal = 'text-davinci-003';

  const processPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!promptText) return;
    const trimmedText = promptText.trim();
    const message: Message = {
      text: trimmedText,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email ?? 'test',
        name: session?.user?.name ?? 'test',
        avatar:
          session?.user?.image ??
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    setPromptText('');

    await addDoc(
      collection(db, `users/${session?.user?.email!}/chats/${chatId}/messages`),
      message
    );

    const notification = toast.loading('Fetching response...');

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: trimmedText,
        chatId,
        modal,
        session,
      }),
    })
      .then(response => {
        console.log('response', response);
        toast.success('Successful', {
          id: notification,
        });
      })
      .catch(err => {
        toast.error('Error while fetching.');
        console.log(err);
      });
  };

  return (
    <div className='bg-gray-700 text-gray-400 rounded-lg text-sm mx-2 mb-2'>
      <form className='p-3 space-x-5 flex' onSubmit={processPrompt}>
        <input
          disabled={!session}
          className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:opacity-40'
          type='text'
          placeholder='Enter your prompt here...'
          value={promptText}
          onChange={(e: { target: HTMLInputElement }) =>
            setPromptText(e.target.value)
          }
        />
        <button
          type='submit'
          disabled={!promptText || !session}
          className='bg-[#11a37f] disabled:bg-transparent transition-all duration-300 ease-in-out cursor-pointer disabled:cursor-not-allowed p-2 rounded'>
          <PaperAirplaneIcon
            className={`h-4 w-4 text-white ${!promptText && 'opacity-40'}`}
          />
        </button>
      </form>
      <div>{/* TODO: mobile view for modal select... */}</div>
    </div>
  );
};

export default ChatInput;
