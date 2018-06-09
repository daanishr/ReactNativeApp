import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from 'react-navigation';
import DrawerNavigator from './screens/DrawNavigator';
export default class App extends React.Component {
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
