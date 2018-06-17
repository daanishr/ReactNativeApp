import React, { Component } from 'react'
import { Text, StyleSheet, View , Image, ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Pitamphur extends Component {
  render() {
    return (
      <View style={styles.container}>
         <ScrollView>
                <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30 }}>
                    Pitamphur Site
               </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15 }}>
                      Summary
               </Text>
               <Text style={{ fontSize: 20, padding: 10 }}>
               • Total Land Area – 14 acres
               </Text>
               <Text style={{ fontSize: 20, padding: 10 }}>
               • Type of Usage- Warehousing
               </Text>
               <Text style={{ fontSize: 20,  padding: 10 }}>
               • Total Leasable Area – 300,000 sqft
               </Text>
               <Text style={{ fontSize: 20, padding: 10 }}>
               • Micro-market – Pithampur
               </Text>
               <Text style={{ fontSize: 20,  padding: 10 }}>
               • Google coordinates - 22.621660, 75.625908
               </Text>
               <Text style={{ fontSize: 20,  padding: 10 }}>
                • Site address – Plot no 13-B, Sector-3, Kheda Industrial Growth centre, Pithampur, MP.
               </Text>
               <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15 }}>
                        Site Location
               </Text>
               <Image source={require('../../img/PitaMap.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />

               <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15 }}>
                        Photos of Site
               </Text>
               <Image source={require('../../img/PitaPhoto1.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />
               <Image source={require('../../img/PitaPhoto2.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain"/>

            
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
