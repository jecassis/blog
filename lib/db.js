import * as firebase from 'firebase/app';
import 'firebase/database';
import { DB_URL } from '@/lib/globals';

try {
    firebase.initializeApp({
        apiKey: '',
        authDomain: 'blog-views-ff3e5.firebaseapp.com',
        databaseURL: DB_URL,
    });
} catch (err) {
    // Skip the "already exists" message which is
    // not an actual error when hot-reloading.
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack); // eslint-disable-line no-console
    }
}

firebase.database.enableLogging(true);
const db = firebase.database();

export default db;
