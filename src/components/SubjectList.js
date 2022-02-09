// import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { CustomButton } from './button';
import firebase from '@react-native-firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [SubjectData, setSubjectData] = useState([]);

  const getList = async () => {
    firebase
      .app()
      .database(
        'https://finalyearproject-6ce95-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      .ref(`/items/${route.params.name}`)
      .once('value')
      .then(async snapshot => {
        // console.log('User data: ', snapshot.val());
        // console.log('bolec', Object.keys(snapshot.val())[0]);
        // setSubjectData(Object.keys(snapshot.val()));
        const value = await AsyncStorage.getItem(`subject${route.params.name}`);
        if (value !== null) {
          console.log('value', value);
          //filter the college data with respect to async storage college name
          const storedCollege = value.split(',');
          const counts = {};
          storedCollege.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
          });
          // counts= {'DWIT':1,"KEC":2}
          // ['DWIT',"KEC"]
          const testing = Object.keys(snapshot.val()).sort(function (a, b) {
            console.log('testing items', a, b);
            console.log('counts[a]', counts[a], counts[b]);
            return (counts[a] || 0) > (counts[b] || 0);
          });
          console.log('testing', testing);
          setSubjectData(testing.reverse());
          return;
        }
        setSubjectData(Object.keys(snapshot.val()));
      });
  };
  useEffect(() => {
    getList();
  }, []);
  // const navigation = useNavigation();
  const SubjectCardHandler = async item => {
    const value = await AsyncStorage.getItem(`subject${route.params.name}`);
    if (value !== null) {
      //store the item in async storage
      const newValue = `${value},${item}`;
      await AsyncStorage.setItem(`subject${route.params.name}`, newValue);
    } else {
      await AsyncStorage.setItem(`subject${route.params.name}`, item);
    }
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
