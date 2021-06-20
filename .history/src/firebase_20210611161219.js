import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBWEPM345zpZxmhT7svywLuMZpmIyVCpL8',
  authDomain: 'cake-3ad68.firebaseapp.com',
  databaseURL: 'https://cake-3ad68-default-rtdb.firebaseio.com',
  projectId: 'cake-3ad68',
  storageBucket: 'cake-3ad68.appspot.com',
  messagingSenderId: '744059363964',
  appId: '1:744059363964:web:454109a93b2f124d961ff9',
  measurementId: 'G-DRGPWZRH1R',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const timestamp = firebase.

export {db};
