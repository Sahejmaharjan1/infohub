// import * as firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
//   authDomain: 'your-auth-domain-b1234.firebaseapp.com',
//   databaseURL: 'https://your-database-name.firebaseio.com',
//   projectId: 'your-project-id-1234',
//   storageBucket: 'your-project-id-1234.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
//   appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// export { firebase };
// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from '@firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCLA4vnLFaVow25ylLUkb57NhmnN6qk1vE",
//   authDomain: "fir-auth-65294.firebaseapp.com",
//   projectId: "fir-auth-65294",
//   storageBucket: "fir-auth-65294.appspot.com",
//   messagingSenderId: "105428798939",
//   appId: "1:105428798939:web:49a9375f32ea94d4dfebfe"
// };
const firebaseConfig = {
  apiKey: 'AIzaSyDGJw0BBQLFbQxafpa3bwXdK1s_tiVdB_I',
  authDomain: 'finalyearproject-6ce95.firebaseapp.com',
  databaseURL:
    'https://finalyearproject-6ce95-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'finalyearproject-6ce95',
  storageBucket: 'finalyearproject-6ce95.appspot.com',
  messagingSenderId: '704543482933',
  appId: '1:704543482933:web:0020b716eed6188ac87d7c',
  measurementId: 'G-S5LPEJX5M2',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { app, auth, firebaseConfig };
