import admin from 'firebase-admin';
import { adminDB } from '@src/firebaseAdmin';
import { NextResponse } from 'next/server';

type Data = {
  success: boolean;
  error?: string;
};

export async function DELETE(req: Request, res: NextResponse<Data>) {
  const { session, chatId } = await req.json();

  if (!session) {
    return NextResponse.json({
      error: {
        status: false,
        error: 'Not authorized!',
      },
    });
  }

  let messagesRef = adminDB
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages');
  let allMessages = await messagesRef
    .get()
    .then(snapshot => {
      snapshot.forEach(doc =>
        adminDB
          .collection('users')
          .doc(session?.user?.email)
          .collection('chats')
          .doc(chatId)
          .collection('messages')
          .doc(doc.id)
          .delete()
      );
      return NextResponse.json({
        success: true,
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
      return NextResponse.json({
        success: false,
        error: `Error while deleting docs : ${err}`,
      });
    });

  return NextResponse.json({
    success: true,
  });
}
