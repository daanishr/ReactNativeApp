import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class JNPT extends Component {
  render() {
    return (
      <View style={styles.container}>
   
        <Text> JNPT site</Text>
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
})
