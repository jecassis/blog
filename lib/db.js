import * as firebase from 'firebase/app';
import 'firebase/database';

try {
    firebase.initializeApp({
        databaseURL: 'https://blog-views-ff3e5.firebaseio.com',
    });
} catch (err) {
    // Skip the "already exists" message which is
    // not an actual error when hot-reloading.
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack); // eslint-disable-line no-console
    }
}

const db = firebase.database();
export default db;
