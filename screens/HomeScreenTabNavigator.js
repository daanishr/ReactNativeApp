import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';
import ScreenThree from './TabNavigator/ScreenThree';
import Chat from './TabNavigator/Chat';
export default class AppTabNavigator extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-menu" size={24} onPress={() => navigation.openDrawer()} />
                </View>
            )
        }
    }
    render() {
        return (
            <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation }} />
        )
    }
}

const HomeScreenTabNavigator = new createBottomTabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon:() => (
                <Ionicons name="md-home" size={24}/>
            )
        }
    },
    ScreenThree: {
        screen: ScreenThree,
        navigationOptions: {
            tabBarLabel: 'Request a meeting',
            tabBarIcon:() => (
                <Ionicons name="md-calendar" size={24}/>
            )
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarLabel: 'Chat with us',
            tabBarIcon:() => (
                <Ionicons name="md-chatboxes" size={24}/>
            )
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Log Out',
            tabBarIcon:() => (
                <Ionicons name="md-log-out" size={24}/>
            )
        }
    }
   
})

// export default HomeScreenTabNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f55',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
