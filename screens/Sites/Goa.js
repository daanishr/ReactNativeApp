import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, ScrollView, Dimensions } from 'react-native'

export default class Goa extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30, color: "white" }}> Verna (GOA) SITE
                     </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Summary
                     </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Total Land Area – 5.5 acres
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Type of Usage- Warehousing & Industrial
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Phase 1 Warehouse Area – 5438 sq m.
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Phase 2 Warehouse Area – 4307 sq m
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Area of land – 22418 sq m
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Location – Verna Industrial Estate, Verna, Goa
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Google coordinates - 15.3627195,73.9457063
                   </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Site Location
                    </Text>
                    <Image source={require('../../img/goamap1.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                    
                   />
                    <Image source={require('../../img/goamap2.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                       
                   />
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Pictures of site
                    </Text>
                    <Image source={require('../../img/goa1.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                     
                    />
                    <Image source={require('../../img/goa3.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                     
                    />
                    <Image source={require('../../img/goa2.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                     
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
