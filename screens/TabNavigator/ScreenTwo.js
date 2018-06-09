import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class ScreeTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title= 'Log out' onPress={() => 
           this.props.screenProps.navigation.navigate('WelcomeScreen')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
