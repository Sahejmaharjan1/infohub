import React from 'react';
import { CustomHeader } from '../components/header';
import SubjectList from '../components/SubjectList';

function SubjectListScreen({ route, navigation }) {
  return (
    <>
      <CustomHeader title="Subject" />
      <SubjectList route={route} navigation={navigation} />
    </>
  );
}

export default SubjectListScreen;
