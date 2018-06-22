import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, ActivityIndicator, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class NCR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: 'white',
                elevation: null
            },
            title: "All Cargo Logistics",
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-menu" size={34} onPress={() => navigation.openDrawer()} />
                </View>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.loading ? <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="red" />
                </View> : null
                }
                <ScrollView>
                    <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30, color: "white" }}>
                        NCR (Farrukhnagar)   Site
               </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15, color: "red" }}>
                        Summary
               </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Total Land Area – 90 (I phase) +95 acres (II phase)
               </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Type of Usage- Warehousing
               </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Total Leasable Area – 2mn sqft
                </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Micro-market – Gurgaon & Delhi
                </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Location – Farrukhnagar
                </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Google coordinates - 28.477232, 76.804699
                </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 15, color: "red" }}>
                        Location Advanatge:
               </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        The park covers an area of 185 acres in total with 40 lac sqft of built-up area. The location of the park is on Gurgaon-Jhajjar Road, 4.4 km from Farrukhnagar and 26 km from Gurgaon and is ideally located for the distribution in the northern region of India. There are a number of large industrial areas in close proximity to the site and enjoys seamless connectivity to the neighboring states of Uttar Pradesh, Himachal-Pradesh, Punjab and Rajasthan.
               </Text>

                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}>
                        Ariel View               </Text>
                    <Image source={require('../../img/ncrariel.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}>
                        Layout               </Text>
                    <Image source={require('../../img/farrlayout2.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}>
                        Technical Advanatge:
               </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	12.00 m eave height with Bare Galvalume standing seam roofing system & 4.00 m wide cantilever canopy on docking side.
               </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	FM II Compliant floor with load bearing capacity of  5-7 tons/sqft.
               </Text>

                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	One Dock for every 12,000 sqft carpet area. Shutter of size 3.00 m*3.50 m.
               </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	Three phase adequate power supply with 100 KVA for each 100,000 sqft.

               </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
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
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
