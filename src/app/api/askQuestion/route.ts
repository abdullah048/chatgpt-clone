import { NextApiRequest, NextApiResponse } from 'next';
import query from '../../../../helpers/queryApi';
import { Message } from '../../../../typings';
import admin from 'firebase-admin';
import { adminDB } from '@src/firebaseAdmin';
import { NextResponse } from 'next/server';

type Data = {
  answer?: string;
  error?: {
    status: boolean;
    message: string;
  };
};

export async function POST(req: Request, res: NextResponse<Data>) {
  const { prompt, modal, session, chatId } = await req.json();

  if (!prompt) {
    return NextResponse.json({
      error: {
        status: false,
        message: 'Please provide a prompt!',
      },
    });
  }

  if (!chatId) {
    return NextResponse.json({
      error: {
        status: false,
        message: 'Please provide a valid chatId!',
      },
    });
  }

  //   NOTE: Chatgpt query
  const response = await query(prompt, chatId, modal);

  const message: Message = {
    text: response ?? 'Chatgpt was unable to find an answer for that!',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'CHATGPT',
      name: 'CHATGPT',
      avatar: 'https://links.papareact.com/89k' ?? 'CHATGPT',
    },
  };

  await adminDB
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  return NextResponse.json({
    answer: message.text,
  });
}
