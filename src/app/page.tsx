import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';

// OPEN AI API key => HACK:

export default function Home() {
  // const smBreakpoint = useMediaQuery({
  //   query: '(max-width: 830px)',
  // });
  return (
    <div
      className={`text-white flex flex-col items-center justify-center h-full lg:text-center 
       px-2 overflow-y-auto`}>
      <h1 className={`text-4xl lg:text-5xl mb-5 mt-10 font-bold lg:mb-20 `}>
        ChatGPT
      </h1>
      <div className={`flex flex-col justify-center w-full lg:flex-row gap-3`}>
        <div>
          <div className={`flex flex-col items-center justify-center mb-5`}>
            <SunIcon className='h-8 w-8' />
            <h2>Example</h2>
          </div>
          <div className='space-y-2'>
            <p
              className={` w-full p-4 bg-gray-700/50 rounded-lg cursor-pointer lg:infoText hover:bg-gray-700 transition-all duration-200 ease-out`}>
              "Explain the difference between JS and TS."
            </p>
            <p
              className={`w-full p-4 bg-gray-700/50 rounded-lg cursor-pointer lg:infoText hover:bg-gray-700 transition-all duration-200 ease-out`}>
              "What is the difference between a cat and dog?"
            </p>
            <p
              className={`w-full p-4 bg-gray-700/50 rounded-lg cursor-pointer lg:infoText hover:bg-gray-700 transition-all duration-200 ease-out`}>
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
            <p className={`w-full p-4 bg-gray-700/50 rounded-lg lg:infoText`}>
              "Change the ChatGPT Modal to use"
            </p>
            <p className={`w-full p-4 bg-gray-700/50 rounded-lg lg:infoText`}>
              "Messages are store in Firebase's Firestore"
            </p>
            <p className={`w-full p-4 bg-gray-700/50 rounded-lg lg:infoText`}>
              "Beautiful Notifications"
            </p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className={`w-full p-4 bg-gray-700/50 rounded-lg lg:infoText`}>
              "May occasionally provide wrong information"
            </p>
            <p className={`w-full p-4 bg-gray-700/50 rounded-lg lg:infoText`}>
              "It's AI cannot answer normal human questions"
            </p>
            <p className={`w-full p-4 bg-gray-700/50 rounded-lg lg:infoText`}>
              "No, its not your waifu!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
