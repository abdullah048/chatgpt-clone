import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

const serviceAccountKey = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
  });
}

const adminDB = admin.firestore();

export { adminDB };
