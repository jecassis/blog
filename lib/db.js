import admin from 'firebase-admin';
import { join } from 'path';

const cert = join(__dirname, '../service-account.json');

try {
    admin.initializeApp({
        credential: admin.credential.cert(cert),
        databaseURL: 'https://blog-views-ff3e5.firebaseio.com',
    });
} catch (err) {
    // Skip the "already exists" message which is
    // not an actual error when hot-reloading.
    if (!/already exists/.test(err.message) && process.env.NODE_ENV !== 'production') {
        console.error('Firebase initialization error', err.stack); // eslint-disable-line no-console
    }
}

const db = admin.database();
export default db;
