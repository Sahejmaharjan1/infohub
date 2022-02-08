import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import MainNavigation from './src/navigation/MainNavigation';

GoogleSignin.configure({
  webClientId:
    '704543482933-5job74b6elkk39l4co3iu26kjsc52k1h.apps.googleusercontent.com',
});

function App() {
  return <MainNavigation />;
}
export default App;
