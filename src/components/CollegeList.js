import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { CustomButton } from './button';
import firebase from '@react-native-firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const getList = async () => {
    firebase
      .app()
      .database(
        'https://finalyearproject-6ce95-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      .ref('/items')
      .once('value')
      .then(async snapshot => {
        const value = await AsyncStorage.getItem('college');
        if (value !== null) {
          console.log('value', value);
          //filter the college data with respect to async storage college name
          const storedCollege = value.split(',');
          const counts = {};
          storedCollege.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
          });
          console.log(counts);
          // counts= {'DWIT':1,"KEC":2}
          // ['DWIT',"KEC"]
          const testing = Object.keys(snapshot.val()).sort(function (a, b) {
            console.log('testing items', a, b);
            console.log('counts[a]', counts[a], counts[b]);
            return (counts[a] || 0) > (counts[b] || 0);
          });
          console.log('testing', testing);
          setCollegeData(testing.reverse());
          return;
        }
        setCollegeData(Object.keys(snapshot.val()));
      });
  };
  useEffect(() => {
    getList();
  }, []);
  const onCollegeCardHandler = async item => {
    //check if name exists in async storage
    const value = await AsyncStorage.getItem('college');
    if (value !== null) {
      //store the item in async storage
      const newValue = `${value},${item}`;
      await AsyncStorage.setItem('college', newValue);
    } else {
      await AsyncStorage.setItem('college', item);
    }
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
