import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

function ResearchPaperScreen() {
  return <WebView source={{ uri: 'https://reactnative.dev/' }} />;

  // return (
  //   <View>
  //     <Text>helllo this is research paper screen</Text>
  //   </View>
  // );
}

export default ResearchPaperScreen;
