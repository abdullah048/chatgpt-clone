'use client';
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';

// OPENAI API key => HACK:

export default function Home() {
  const smBreakpoint = useMediaQuery({
    query: '(max-width: 650px)',
  });
  return (
    <div
      className={`text-white flex flex-col items-center justify-center  ${
        smBreakpoint ? 'h-full' : 'h-screen text-center'
      } px-2 overflow-y-auto`}>
      <h1
        className={`text-5xl font-bold ${
          smBreakpoint ? 'mb-5 mt-10 text-4xl' : 'mb-20'
        }`}>
        ChatGPT
      </h1>
      <div
        className={`flex ${smBreakpoint ? 'flex-col w-full' : 'flex'} gap-3`}>
        <div>
          <div className={`flex flex-col items-center justify-center mb-5`}>
            <SunIcon className='h-8 w-8' />
            <h2>Example</h2>
          </div>
          <div className='space-y-2'>
            <p
              className={` ${
                smBreakpoint
                  ? 'w-full p-4 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700'
                  : 'infoText cursor-pointer hover:bg-gray-700'
              }`}>
              "Explain Something to me."
            </p>
            <p
              className={` ${
                smBreakpoint
                  ? 'w-full p-4 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700'
                  : 'infoText cursor-pointer hover:bg-gray-700'
              }`}>
              "What is the difference between a cat and dog?"
            </p>
            <p
              className={` ${
                smBreakpoint
                  ? 'w-full p-4 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700'
                  : 'infoText cursor-pointer hover:bg-gray-700'
              }`}>
              "What is the color of the sun?"
            </p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8' />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p
              className={` ${
                smBreakpoint
                  ? 'w-full p-4 bg-gray-700/50 rounded-lg'
                  : 'infoText'
              }`}>
              "Change the ChatGPT Modal to use"
            </p>
            <p
              className={` ${
                smBreakpoint
                  ? 'w-full p-4 bg-gray-700/50 rounded-lg'
                  : 'infoText'
              }`}>
              "Messages are store in Firebase's Firestore"
            </p>
            <p
              className={` ${
                smBreakpoint
                  ? 'w-full p-4 bg-gray-700/50 rounded-lg'
                  : 'infoText'
              }`}>
              "Hot Toast Notifications when modal is thinking"
            </p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p
              className={` ${
                smBreakpoint
                  ? 'w-full p-4 bg-gray-700/50 rounded-lg'
                  : 'infoText'
              }`}>
              "May occasionally provide wrong information"
            </p>
            <p
              className={` ${
                smBreakpoint
                  ? 'w-full p-4 bg-gray-700/50 rounded-lg'
                  : 'infoText'
              }`}>
              "It's AI cannot answer normal human questions"
            </p>
            <p
              className={` ${
                smBreakpoint
                  ? 'w-full p-4 bg-gray-700/50 rounded-lg'
                  : 'infoText'
              }`}>
              "No, its not your waifu!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
