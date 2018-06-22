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
import Goa from './Sites/Goa';
import NCR from './Sites/Farrukhnagar';

const InnerStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: HomeScreenTabNavigator
    }
})

const BangaloreStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: Bangalore
    }
})
const HyderbadStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: Hyderbad
    }
})
const JNPTStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: JNPT
    }
})
const FarrukhnagarStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: NCR
    }
})
const HosurStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: Hosur
    }
})

const GoaStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: Goa
    }
})
const PitamphurStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: Pitamphur
    }
})
const AppDrawerNavigator = new createDrawerNavigator({
    Home: { 
        screen: InnerStackNavigator 
    },
    Bangalore: { 
        screen: BangaloreStackNavigator ,
        navigationOptions: {
            header: {
                visible: true
            }
        }
    },
    Hyderbad: { 
        screen: HyderbadStackNavigator
    },
    JNPT: {
         screen: JNPTStackNavigator 
        },
    NCR: {
         screen: FarrukhnagarStackNavigator 
        },
    Hosur: {
        screen: HosurStackNavigator
    },
    Goa: {
        screen: GoaStackNavigator
    },
    Pitamphur: {
         screen: PitamphurStackNavigator 
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