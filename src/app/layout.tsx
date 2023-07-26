import Login from '@src/components/Login';
import SessionProvider from '@src/components/SessionProvider';
import Sidebar from '@src/components/Sidebar';
import { GlobalContextProvider } from '@src/context/global.context';
import { authOptions } from '@src/utils/authOptions';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chatgpt',
  description: 'Chatgpt messenger',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GlobalContextProvider>
          <Toaster />
          <SessionProvider session={session}>
            {!session ? (
              <Login />
            ) : (
              <div className='flex overflow-hidden w-full h-full'>
                <div className='bg-[#202123] max-w-xs md:min-w-[20rem] h-screen'>
                  <Sidebar />
                </div>
                {/* TODO: React hot-toast-notifications */}
                <div className='bg-[#343541] flex-1 overscroll-none overflow-y-auto h-screen'>
                  {children}
                </div>
              </div>
            )}
          </SessionProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
