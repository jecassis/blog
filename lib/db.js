import firebase from 'firebase/app';
import 'firebase/auth';

export default class Firebase {
    constructor() {
        try {
            firebase.initializeApp({
                databaseURL: 'https://blog-views-ff3e5.firebaseio.com',
            });
        } catch (err) {
            // we skip the "already exists" message which is
            // not an actual error when we're hot-reloading
            if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error', err.stack); // eslint-disable-line no-console
            }
        }
    }
}
