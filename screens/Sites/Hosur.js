import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Hosur extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30 }}> Hosur Site
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}> Summary
        </Text>
        <Text style={{ fontSize: 20, padding: 10 }}>
        • Total Land Area – 11.68 acres
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Type of Usage- Warehousing & Industrial
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Total Leasable Area – 200,000 sqft approx.
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • BTS Area available for lease- 92,173 sqft
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                 
• Google coordinates - 12.6809180, 77.9557630
                   </Text>
                   <Image source={require('../../img/HosurBuilding.png')} style={{ width: 200, height: 200 }} />

                   <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}> Site Location
        </Text>
        <Image source={require('../../img/HosurMap.png')} style={{ width: 200, height: 200 }} />

        <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}> Layout
        </Text>
        <Image source={require('../../img/HosurLayout.png')} style={{ width: 200, height: 200 }} />

        </ScrollView>
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
