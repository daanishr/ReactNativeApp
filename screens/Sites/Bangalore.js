import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Icon } from 'native-base';
import { List, ListItem } from 'react-native-elements';
import MapView from 'react-native-maps';

export default class Bangalore extends Component {
    render() {
        return (
            <View style={styles.container}>

                <ScrollView >
                    <Text style={{ paddingTop: 30, fontSize: 20 }}> Bangalore (Malur-Soukya Road)</Text>
                    <Image source={require('../../img/Hyder.jpg')} style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center', width: 200, height: 200
                    }} />
                    <Text style={{ fontSize: 30 }}>Summary</Text>
                    <Text style={{ fontSize: 20 , padding: 20}}>
                        • Total Land Area – 100 acres

                        • Type of Usage- Industrial & Warehousing

                        • Total Leasable Area – 2.3 mn sqft

                        • Micro-market – Malur

                        • Location – Near Soukya Malur Road
                   </Text>
                   <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <Text style={{ fontSize: 30 ,fontWeight: "bold"}}>Project Master Layout</Text>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Aerial View</Text>
                    <Image source={require('../../img/BangaloreAriel1.png')} style={{ width: 200, height: 200 ,padding:20}} />
                    <Image source={require('../../img/BangaloreAriel2.png')} style={{ width: 200, height: 200,padding:20 }} />
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Warehouse View</Text>
                    <Image source={require('../../img/Hyder.jpg')} style={{ width: 200, height: 200 }} />
                    <Text style={{ fontSize: 30 }}>Current work progress at site</Text>
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
    }
})
