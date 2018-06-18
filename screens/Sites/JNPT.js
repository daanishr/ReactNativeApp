import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class JNPT extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
   
        <Text style={{ fontSize: 40 , fontWeight: "bold", paddingTop: 30}}> JNPT site</Text>
        <Text style={{ fontSize: 30 ,padding: 10}}>Summary</Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                    • Total Land Area – 23 acres (Approx.)




• Google coordinates - 18.862069, 73.010711
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                    • Type of Usage- Warehousing
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>

• Total Leasable Area – 532,244 sqft
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                    • Area available for lease- 3,43,667 sqft
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                    • Micro-market – JNPT
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Location – Koproli, JNPT, Mumbai
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Google coordinates - 18.862069, 73.010711
                   </Text>
                   <Text style={{ fontSize: 30, fontWeight:"bold", padding: 10 }}>
             Map View
          </Text>
                   <Image source={require('../../img/JNPTMapView.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />
                   <Text style={{ fontSize: 30, fontWeight:"bold", padding: 10 }}>
              Layout of the land
          </Text>
          <Image source={require('../../img/JNPTLayout.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />
    <Text style={{ fontSize: 30, fontWeight:"bold", padding: 10 }}>
              Ariel View
          </Text>
          <Image source={require('../../img/JNPTAriel1.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />
          <Image source={require('../../img/JNPTAriel2.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />

          <Text style={{ fontSize: 30, fontWeight:"bold", padding: 10 }}>
             Existing Leased out building:
          </Text>
          <Image source={require('../../img/JNPTBuilding1.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />
          <Image source={require('../../img/JNPTBuilding2.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />

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
