import React, { Component } from 'react'
import { Text, View ,StyleSheet,
} from 'react-native'

import HomeScreen from './HomeScreen'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation' 
import HomeScreenTabNavigator from './HomeScreenTabNavigator';



const InnerStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: HomeScreenTabNavigator
    }
})

const AppDrawerNavigator = new createDrawerNavigator({
    HomeScreen: { screen: InnerStackNavigator }
})

export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});