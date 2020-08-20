import admin from 'firebase-admin';
import { join } from 'path';

const cert = join(process.cwd(), 'service-account.json');
let db;

try {
    admin.initializeApp({
        credential: admin.credential.cert(cert),
        databaseURL: 'https://blog-views-ff3e5.firebaseio.com',
    });

    db = admin.database();
} catch (err) {
    // Skip the "already exists" message which is
    // not an actual error when hot-reloading.
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack); // eslint-disable-line no-console
    }
}

export default db;
