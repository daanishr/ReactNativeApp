import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Icon } from 'native-base';
import { List, ListItem } from 'react-native-elements';
import MapView from 'react-native-maps';

export default class Bangalore extends Component {
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
            <View style={styles.container}>

                <ScrollView contentContainerStyle={styles.contentContainer} pinchGestureEnabled={true} >
                    <Text style={{ paddingTop: 30, fontSize: 30, fontWeight:"bold" }}> Bangalore (Malur-Soukya Road)</Text>
                 
                    <Text style={{ fontSize: 30 ,  padding: 15}}>Summary</Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Total Land Area – 100 acres
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Type of Usage- Industrial & Warehousing
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Total Leasable Area – 2.3 mn sqft
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Micro-market – Malur
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                        • Location – Near Soukya Malur Road
                   </Text>
                   <Text style={{ fontSize: 20, fontWeight:"bold", padding: 10 }}>
                         Location Advantage 
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   From our industrial park in Malur, the City of Bangalore is located at 35 kilometres    and  Kempegowda International Airport is at 40 kilometres. With main access of 80 ft wide road, we are situated at close proximity to various industrial clusters of    Bengaluru like Hosakote, Narasapura, Bommanahalli, etc. It takes less than an hour       to reach either destination. Our warehouses are so serene that they not only provide     a locational advantage but also give a good real estate valuation in the coming future. 

                   </Text>
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                     <Text style={{ fontSize: 20, fontWeight:"bold", padding: 10 }}>
                     TECHNICAL ADVANTAGE :

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
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Project Master Layout
                 
                    </Text>
                    <Image source={require('../../img/LayoutBang.png')} style={{ width: 250, height: 200, padding: 20 }} />

                    <Text style={{ fontSize: 20, padding:10}}>Project Master Layout
                    Total Development – 2.3 Million sft. Area – 100 Acres
                        FEATURES OF THE PARK
                    </Text>
                    <Text style={{ fontSize: 20, padding: 10 }}>
                    • Truck Parking
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • STP
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Property Management Office
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Driver Rest Area
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Receiver Sub-station
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Rain water Harvesting
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Roof Designed for Solar panel load
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Driver rest room
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • CCTV Camera monitored
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Ambulance 24*7
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Security room
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Weighing bridge
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Visitor Lounge
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • 100% DG back-up common areas
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 }}>
                   • Proper Signages
                   </Text>

                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Aerial View</Text>
                    <Image source={require('../../img/BangaloreAriel1.png')} style={{ width: 200, height: 200, padding: 20 }} />
                    <Image source={require('../../img/BangaloreAriel2.png')} style={{ width: 200, height: 200, padding: 20 }} />
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Warehouse View</Text>
                    <Image source={require('../../img/Hyder.jpg')} style={{ width: 200, height: 200 }} />
                    <Text style={{ fontSize: 30, fontWeight: "bold"  }}>Current work progress at site</Text>
                    <Image source={require('../../img/BangaloreWork1.png')} style={{ width: 200, height: 200 }} />
                    <Image source={require('../../img/BangaloreWork2.png')} style={{ width: 200, height: 200 }} />
                    <Image source={require('../../img/BangaloreWork3.png')} style={{ width: 200, height: 200 }} />
                    <Image source={require('../../img/BangaloreWork4.png')} style={{ width: 200, height: 200 }} />
                    <Image source={require('../../img/BangaloreWork5.png')} style={{ width: 200, height: 200 }} />
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
    },
    contentContainer: {
        padding: 10
      }
})
