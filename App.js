import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from 'react-navigation';
import DrawerNavigator from './screens/DrawNavigator';
import * as firebase from 'firebase';

export default class App extends React.Component {
  componentWillMount() {

    const firebaseConfig = {
        apiKey: "AIzaSyBiIEGTrsexnlQgA2dqJ9tJeX4q4WtbEXw",
        authDomain: "allcargo-1529324579210.firebaseapp.com",
        databaseURL: "https://allcargo-1529324579210.firebaseio.com",
        projectId: "allcargo-1529324579210",
        storageBucket: "",
        messagingSenderId: "901998467363"
    };

    firebase.initializeApp(firebaseConfig);
    
}
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = new createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  LoginScreen: { screen: LoginScreen },
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null
    }
  }
}, {
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  { headerMode: 'screen' }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
