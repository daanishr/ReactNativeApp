import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default class Farrukhnagar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30 }}>
                        Farrukhnagar Site
               </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15 }}>
                        Summary
               </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Total Land Area – 90 (I phase) +95 acres (II phase)
               </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Type of Usage- Warehousing
               </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Total Leasable Area – 2mn sqft
                </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Micro-market – Gurgaon & Delhi
                </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Location – Farrukhnagar
                </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Google coordinates - 28.477232, 76.804699
                </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15 }}>
                        Location Advanatge:
               </Text>

                    <Text style={{ fontSize: 20, padding: 10 }}>
                        The park covers an area of 185 acres in total with 40 lac sqft of built-up area. The location of the park is on Gurgaon-Jhajjar Road, 4.4 km from Farrukhnagar and 26 km from Gurgaon and is ideally located for the distribution in the northern region of India. There are a number of large industrial areas in close proximity to the site and enjoys seamless connectivity to the neighboring states of Uttar Pradesh, Himachal-Pradesh, Punjab and Rajasthan.
 
               </Text>
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
                        Layout               </Text>
                    <Image source={require('../../img/FarrLayout2.png')} style={{ width: 200, height: 200, padding: 20 }} />

                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
                        Technical Advanatge:
               </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        •	12.00 m eave height with Bare Galvalume standing seam roofing system & 4.00 m wide cantilever canopy on docking side.
               </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        •	FM II Compliant floor with load bearing capacity of  5-7 tons/sqft.
               </Text>

                    <Text style={{ fontSize: 20, padding: 10 }}>
                        •	One Dock for every 12,000 sqft carpet area. Shutter of size 3.00 m*3.50 m.
               </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        •	Three phase adequate power supply with 100 KVA for each 100,000 sqft.
         
               </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        •	Fire hydrants, hose reels and system as per NBC norms. Sprinkler system provision as per customers requirement
         
               </Text>


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
