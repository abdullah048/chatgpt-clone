import Sidebar from '@src/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chatgpt',
  description: 'Chatgpt messenger',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex'>
          <div className='bg-[#202123] max-w-xs h-auto overflow-y-auto md:min-w-[20rem]'>
            <Sidebar />
          </div>
          {/* TODO: React hot-toast-notifications */}
          <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
