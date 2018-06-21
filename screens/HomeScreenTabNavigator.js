import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';
import RequestMeeting from './TabNavigator/RequestMeeting';
import Chat from './TabNavigator/Chat';
export default class AppTabNavigator extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: 'white', 
                elevation: null
            },
            title: "All Cargo Logistics",
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-menu" size={34} onPress={() => navigation.openDrawer()} />
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
                <Ionicons name="md-home" size={32}/>
            )
        }
    },
    RequestMeeting: {
        screen: RequestMeeting,
        navigationOptions: {
            tabBarLabel: 'Request a meeting',
            tabBarIcon:() => (
                <Ionicons name="md-calendar" size={32}/>
            )
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Log Out',
            tabBarIcon:() => (
                <Ionicons name="md-log-out" size={32}/>
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
