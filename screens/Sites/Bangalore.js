import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, ScrollView, Button,   ActivityIndicator, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PinchZoomView from 'react-native-pinch-zoom-view';


export default class Bangalore extends Component {

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
            title: "All Cargo Logistics (Bangalore)",
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

                <ScrollView contentContainerStyle={styles.contentContainer} pinchGestureEnabled={true} minimumZoomScale={1} maximumZoomScale={5} >
                    <Text style={{ paddingTop: 30, fontSize: 30, fontWeight: "bold", color: "white" }}> Bangalore (Malur-Soukya Road)</Text>
                    <Text style={{ fontSize: 30, padding: 15, color: "red" }}>Summary</Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Total Land Area – 100 acres
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Type of Usage- Industrial & Warehousing
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Total Leasable Area – 2.3 mn sqft
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Micro-market – Malur
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Location – Near Soukya Malur Road
                   </Text>

                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "red" }}>Aerial View</Text>
                    <PinchZoomView>

                    <Image
                        source={require('../../img/bangaloreariel1.jpg')} style={{
                            alignSelf: 'center', height: 250,
                            width: Dimensions.get('window').width
                        }} resizeMode="contain"
                        defaultSource={require('../../img/Loading.png')}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                   
                    />
                            </PinchZoomView>
                            <PinchZoomView>

                    <Image
                            source={require('../../img/bangaloreariel2.jpg')} style={{
                                alignSelf: 'center', height: 250,
                                width: Dimensions.get('window').width
                            }} resizeMode="contain"
                            onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                        />
               
               </PinchZoomView>

               <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}>
                        Entrance View
                </Text>
                <Image source={require('../../img/BangEntranceView.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={require('../../img/Loading.png')}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}>
                        Location Advantage
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        From our industrial park in Malur, the City of Bangalore is located at 35 kilometres    and  Kempegowda International Airport is at 40 kilometres. With main access of 80 ft wide road, we are situated at close proximity to various industrial clusters of    Bengaluru like Hosakote, Narasapura, Bommanahalli, etc. It takes less than an hour       to reach either destination. Our warehouses are so serene that they not only provide     a locational advantage but also give a good real estate valuation in the coming future.
     
                   </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}>
                        Technical Advantage
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
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Project Master Layout

                    </Text>
                    <PinchZoomView>

                    <Image source={require('../../img/bangLayout.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={require('../../img/Loading.png')}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
        </PinchZoomView>

                    <Text style={{ fontSize: 20, padding: 10, fontWeight: "bold", color: "red" }}>
                    Total Development – 2.3 Million sft. Area – 100 Acres
           
                    </Text>
                    <Text style={{ fontSize: 20, padding: 10, fontWeight: "bold", color: "white" }}>

                        Features of the Park
                    </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Truck Parking
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • STP
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Property Management Office
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Driver Rest Area
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Receiver Sub-station
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Rain water Harvesting
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Roof Designed for Solar panel load
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Driver rest room
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • CCTV Camera monitored
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Ambulance 24*7
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Security room
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Weighing bridge
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Visitor Lounge
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • 100% DG back-up common areas
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        • Proper Signages
                   </Text>

                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "red" }}>Current work progress at site</Text>
                    <Image source={require('../../img/bangalorework1.jpg')} style={{
                        alignSelf: 'center', height: 450,
                        width: Dimensions.get('window').width, padding:10
                    }} resizeMode="contain"
                        defaultSource={require('../../img/Loading.png')}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
                    <Image source={require('../../img/bangalorework2.jpg')} style={{
                        alignSelf: 'center', height: 450,
                        width: Dimensions.get('window').width, padding:10
                    }} resizeMode="contain"
                        defaultSource={require('../../img/Loading.png')}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                     
                    />
                    <Image source={require('../../img/bangalorework3.jpg')} style={{
                        alignSelf: 'center', height: 450,
                        width: Dimensions.get('window').width, padding:10
                    }} resizeMode="contain"
                        defaultSource={require('../../img/Loading.png')}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                 
                    />
                    <Image source={require('../../img/bangalorework4.jpg')} style={{
                        alignSelf: 'center', height: 450,
                        width: Dimensions.get('window').width, padding:10
                    }} resizeMode="contain"
                        defaultSource={require('../../img/Loading.png')}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
                    />
                    <Image source={require('../../img/bangalorework5.jpg')} style={{
                        alignSelf: 'center', height: 450,
                        width: Dimensions.get('window').width, padding: 10
                    }} resizeMode="contain"
                        defaultSource={require('../../img/Loading.png')}
                        onLoadStart={(e) => this.setState({ loading: true })}
                        onLoadEnd={(e) => this.setState({ loading: false })}
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
    },
    contentContainer: {
        padding: 10
    }
})
