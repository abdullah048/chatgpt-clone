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
          {/* TODO:  Sidebar */}
          {/* TODO: React hot-toast-notifications */}
          <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
