import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image} from 'react-native'
import Home from './HomeScreen'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation' 
import HomeScreenTabNavigator from './HomeScreenTabNavigator';
import Bangalore from './Sites/Bangalore';
import Video from './Sites/Video';
import JNPT from './Sites/JNPT';
import Hyderbad from './Sites/Hyderbad';
import Pitamphur from './Sites/Pitamphur';
import Hosur from './Sites/Hosur';
import Farrukhnagar from './Sites/Farrukhnagar';
import {Container, Content, Body, Icon} from 'native-base';

const InnerStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: HomeScreenTabNavigator
    }
})

const AppDrawerNavigator = new createDrawerNavigator({
    Home: { 
        screen: InnerStackNavigator 
    },
    Bangalore: { 
        screen: Bangalore ,
        navigationOptions: {
            header: {
                visible: true
            }
        }
    },
    Hyderbad: { 
        screen: Hyderbad 
    },
    JNPT: {
         screen: JNPT 
        },
    Farrukhnagar: {
         screen: Farrukhnagar 
        },
    Hosur: {
        screen: Hosur
    },
    Pitamphur: {
         screen: Pitamphur 
        },
    Video: {
            screen: Video 
        }

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