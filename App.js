import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import MainNavigation from './src/navigation/MainNavigation';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

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

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig).functions('asia-southeast1');
}
export { firebase, database };
GoogleSignin.configure({
  webClientId:
    '704543482933-5job74b6elkk39l4co3iu26kjsc52k1h.apps.googleusercontent.com',
});
// GoogleSignin.configure({ webClientId: 'client_id of services' });

function App() {
  return <MainNavigation />;
}
export default App;
