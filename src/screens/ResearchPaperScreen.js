import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { database } from '../../App';
import firebase from '@react-native-firebase/app';
// import { app } from '../firebase/config';

function ResearchPaperScreen({ route, navigation }) {
  const [researchData, setResearchData] = useState(null);
  useEffect(() => {
    firebase
      .app()
      .database(
        'https://finalyearproject-6ce95-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      .ref(`/items/${route.params.subject}/${route.params.name}`)
      .once('value')
      .then(snapshot => {
        // console.log('research data: ', snapshot.val());
        // console.log('research', Object.keys(snapshot.val()));
        // console.log('main', Object.keys(snapshot.val())[0]);
        // console.log(
        //   'naim ',
        //   snapshot.val()[Object.keys(snapshot.val())[0].toString()].url,
        // );
        // setSubjectData(snapshot.val().Object.keys(snapshot.val())[0]);
        setResearchData(
          snapshot.val()[Object.keys(snapshot.val())[0].toString()].url,
        );
      });
  }, []);

  return <>{researchData && <WebView source={{ uri: researchData }} />}</>;

  // return (
  //   <View>
  //     <Text>helllo this is research paper screen</Text>
  //   </View>
  // );
}

export default ResearchPaperScreen;
