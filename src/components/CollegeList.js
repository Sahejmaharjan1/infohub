import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { CustomButton } from './button';
import firebase from '@react-native-firebase/app';

// const CollegeData = [
//   {
//     name: 'Amrit Science Campus',
//     id: 1,
//   },
//   {
//     name: 'Deerwalk Institute of Technology',
//     id: 2,
//   },
//   {
//     name: 'Kathmandu Bernhardt College',
//     id: 3,
//   },
//   {
//     name: 'Prime College',
//     id: 4,
//   },
//   {
//     name: 'Patan Multiple Campus',
//     id: 5,
//   },
// ];

function CollegeList() {
  const [CollegeData, setCollegeData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    firebase
      .app()
      .database(
        'https://finalyearproject-6ce95-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      .ref('/items')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        console.log('bolec', Object.keys(snapshot.val()));
        setCollegeData(Object.keys(snapshot.val()));
      });
  }, []);
  const onCollegeCardHandler = item => {
    console.log('pressed', item.name);
    navigation.navigate('SubjectList', { name: item });
  };
  return (
    <ScrollView>
      {CollegeData.map((item, index) => (
        <CustomButton
          onPress={() => onCollegeCardHandler(item)}
          key={index}
          title={item}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default CollegeList;
