import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { Login } from './../images';
import auth from '@react-native-firebase/auth';

function LoginScreen() {
  const navigation = useNavigation();
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(
        'kushalshrestha9980@gmail.com',
        'Kushal1@#',
      )
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message));
  };

  async function onGoogleButtonPress() {
    try {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      console.log('test', idToken);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);
      navigation.navigate('PersonalizedQuestionare');
    } catch (e) {
      console.log('er', e);
    }
  }
  const PersonalizedScreeHandler = () => {
    navigation.navigate('PersonalizedQuestionare');
  };
  return (
    <View>
      <Image style={styles.image} source={Login} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.signinText}>Please Sign In To Continue</Text>
      <View style={styles.loginButton}>
        <Button title="Sign In With Google" onPress={onGoogleButtonPress} />
      </View>
      <View style={styles.loginButton}>
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 415,
  },
  welcomeText: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  signinText: {
    fontSize: 20,
    textAlign: 'center',
  },
  loginButton: {
    margin: 40,
  },
});

export default LoginScreen;
