import Sidebar from '@src/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import SessionProvider from '@src/components/SessionProvider';
import Login from '@src/components/Login';
import { authOptions } from '@src/utils/authOptions';

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
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='bg-[#202123] max-w-xs h-auto overflow-y-auto md:min-w-[20rem]'>
                <Sidebar />
              </div>
              {/* TODO: React hot-toast-notifications */}
              <div className='bg-[#343541] flex-1'>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
