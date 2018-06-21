import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress';
export default class Hyderbad extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView >

                    <Text style={{ fontSize: 30, fontWeight: "bold", paddingTop: 30, color: "white" }}>
                        Hyderbad
          </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}>
                        INTRODUCTION :
          </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        Our Industrial Park in Hyderabad is spread over 30 acres with 7 lac sq ft of built up area. It offers you the advantage of connectivity, giving you easy access to not only the surrounding industrial hubs, but also to the major cities, transport routes and any other important facilities like bank and hospitals. With easy access and direct access to Gachibowli and Rajiv Gandhi International Airport we are uniquely poised to maximize the locational advantage.

          </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}>Summary</Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	Total Land Area – 30 acres

          </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	Type of Usage- Industrial & Warehousing
          </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	Total Leasable Area – 7,00,000 sqft
          </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	Location – Patancheru-Shankarapalli Road
          </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	Micro-market –  Near Patancheru
          </Text>
                    <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
                        •	Google coordinates – 17.465260, 78.221217
          </Text>
                    <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10, color: "red" }}>
                        Ariel View
          </Text>
                    <Image source={require('../../img/hyderariel1.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "red" }}>Current work progress at site</Text>
                    <Image source={require('../../img/hyderariel2.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/hyder.jpg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={require('../../img/Loading.png')}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                     <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}>Technical Advantage</Text>
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
                    <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10, color: "red" }}>
                        Layout
          </Text>
                    <Image source={require('../../img/HydLayout.png')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                   

                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "red" }}>Current work progress at site</Text>
                    <Image source={require('../../img/file1.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file2.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file3.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file4.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file5.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file6.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file7.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file8.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file9.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file10.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file11.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file12.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file13.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />
                    <Image source={require('../../img/file14.jpeg')} style={{
                        alignSelf: 'center', height: 250,
                        width: Dimensions.get('window').width
                    }} resizeMode="contain"
                        defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
                        indicator={Progress.Pie}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                    />


                </ScrollView >


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
