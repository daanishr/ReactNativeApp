import React, { Component } from 'react'
import { Text, StyleSheet, View, Image , ScrollView} from 'react-native'
export default class Hyderbad extends Component {
  render() {
    return (
      <View style={styles.container}>
       <ScrollView >

   <Text style={{ fontSize: 30, fontWeight:"bold", paddingTop: 30 }}>
            Hyderbad
          </Text>
   <Text style={{ fontSize: 20, fontWeight:"bold", padding: 10 }}>
            INTRODUCTION :
          </Text>
         <Text style={{ fontSize: 20, padding: 10 }}>
         Allcargo Logistics and Industrial Parks is a part of the erstwhile Allcargo, the leader in integrated logistics services. We offer state-of-art warehousing and industrial real estate solution. 

         With 14 strategically located parks across India already under various stages of development, we aim to take our nationwide warehousing footprint to 15 million sq.ft. by 2020. The purpose is to help clients overcome their warehousing challenges and make the most of our well-planned and easily accessible parks. Our lineage and strengths in asset management and development execution sets us apart. We are well poised to enable our clients minimize their logistics overheads.  

          </Text>
          <Text style={{ fontSize: 20, padding: 10 }}>
          Our Industrial Park in Hyderabad is spread over 30 acres with 7 lac sq ft of built up area. It offers you the advantage of connectivity, giving you easy access to not only the surrounding industrial hubs, but also to the major cities, transport routes and any other important facilities like bank and hospitals. With easy access and direct access to Gachibowli and Rajiv Gandhi International Airport we are uniquely poised to maximize the locational advantage.

          </Text>
          <Text style={{ fontSize: 50, padding: 10 }}>Map</Text>
          <Text style={{ fontSize: 20,fontWeight:"bold", padding: 10 }}>Technical Advantage</Text>
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
          <Text style={{ fontSize: 30, fontWeight:"bold", padding: 10 }}>
              Layout
          </Text>
          <Image source={require('../../img/HydLayout.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />
          <Text style={{ fontSize: 30, fontWeight: "bold"  }}>Current work progress at site</Text>
          <Image source={require('../../img/HyderWork1.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />
             <Image source={require('../../img/HyderWork2.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain"/>
                    <Image source={require('../../img/HyderWork3.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain" />
                    <Image source={require('../../img/HyderWork4.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain"/>
                    <Image source={require('../../img/HyderWork5.png')} style={{   alignSelf: 'center', height: 250,
    width: 300,}}   resizeMode="contain"/>
                        
         
          </ScrollView >


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
