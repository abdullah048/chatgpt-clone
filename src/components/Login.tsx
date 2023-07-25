'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

type Props = {};

const Login = (props: Props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<string>('red');

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (color === 'red') {
        setColor('yellow');
      } else if (color === 'yellow') {
        setColor('green');
      } else {
        setColor('red');
      }
    }, 1000);
    () => {
      return clearTimeout(timeout);
    };
  }, [color]);

  return (
    <div className='flex flex-col space-y-5 items-center justify-between h-screen bg-[#232337]'>
      <div>
        <img
          className='w-full h-full lg:w-full lg:h-[600px]'
          src='/images/chatgpt-logo.webp'
          alt='chatgpt'
        />
      </div>
      <div className='flex-[0.9] flex items-start'>
        <div
          className='flex space-x-2 items-center bg-gray-600 p-4 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-all duration-200 ease-out'
          onClick={() => {
            setLoading(true);
            signIn('google');
          }}>
          {!loading ? (
            <img
              className='rounded-full w-5 h-5'
              src='/images/google-logo.png'
              alt='google'
            />
          ) : (
            <svg
              className={`w-5 h-5 text-${color}-500 animate-spin transition-colors duration-300 ease-in-out`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'>
              <circle
                className='opacity-25 transition-colors duration-300 ease-in-out'
                cx='12'
                cy='12'
                r='10'
                stroke={color}
                strokeWidth='4'></circle>
              <path
                className='opacity-75 transition-colors duration-300 ease-in-out'
                fill={color}
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
            </svg>
          )}

          <button className='text-white'>Sign In with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
