// import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { CustomButton } from './button';
import firebase from '@react-native-firebase/app';

// const SubjectData = [
//   {
//     name: 'Artifical Intelligence',
//     id: 1,
//   },
//   {
//     name: 'Computer Networking',
//     id: 2,
//   },
//   {
//     name: 'Cyber Security',
//     id: 3,
//   },
//   {
//     name: 'Cryptography',
//     id: 4,
//   },
//   {
//     name: 'Data Science and Data Analysis',
//     id: 5,
//   },
//   {
//     name: 'Web Development',
//     id: 6,
//   },
// ];

function SubjectList({ route, navigation }) {
  console.log('props', route, navigation);

  const [SubjectData, setSubjectData] = useState([]);

  useEffect(() => {
    firebase
      .app()
      .database(
        'https://finalyearproject-6ce95-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      .ref(`/items/${route.params.name}`)
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        console.log('bolec', Object.keys(snapshot.val())[0]);
        setSubjectData(Object.keys(snapshot.val()));
      });
  }, []);
  // const navigation = useNavigation();
  const SubjectCardHandler = item => {
    console.log('pressed', item);
    navigation.navigate('ResearchPaper', {
      subject: route.params.name,
      name: item,
    });
  };
  return (
    <ScrollView>
      {SubjectData.map((item, index) => (
        <CustomButton
          onPress={() => SubjectCardHandler(item)}
          key={index}
          title={item}
        />
      ))}
    </ScrollView>
  );
}

export default SubjectList;
