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
                    <Text style={{ fontSize: 50 }}> Bangalore </Text>
                    <Image source={require('../../img/Hyder.jpg')} style={{ width: 200, height: 200 }} />
                    <Text style={{ fontSize: 50 }}>Introduction</Text>
                    <Text style={{ fontSize: 20 }}>
                        INTRODUCTION :
            
            Allcargo Logistics and Industrial Parks is a part of the erstwhile Allcargo, the leader in integrated logistics services. We offer state-of-art warehousing and industrial real estate solution.
            
            With 14 strategically located parks across India already under various stages of development, we aim to take our nationwide warehousing footprint to 15 million sq.ft. by 2020. The purpose is to help clients overcome their warehousing challenges and make the most of our well-planned and easily accessible parks. Our lineage and strengths in asset management and development execution sets us apart. We are well poised to enable our clients minimize their logistics overheads.
                    </Text>
                    <Image source={require('../../img/Hyder.jpg')} style={{ width: 200, height: 200 }} />
                    <Text style={{ fontSize: 90 }}>Master Layout</Text>
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <Text style={{ fontSize: 80 }}>Warehouse View</Text>
                    <Image source={require('../../img/Hyder.jpg')} style={{ width: 200, height: 200 }} />
                    <Text style={{ fontSize: 90 }}>Current work</Text>
                    <Text style={{ fontSize: 80 }}>React Native</Text>
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
