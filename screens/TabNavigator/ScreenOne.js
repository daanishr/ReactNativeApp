import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native'


export default class ScreenOne extends Component {

 
  render() {

    return (
      <View style={styles.container}>
        <ScrollView >
          <Image resizeMode="contain" style={{
            alignSelf: 'center', width: Dimensions.get('window').width - 100,
            height: 100, margin: 20
          }} 
          source={require('../../img/Logo.png')}
          defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
          />

          <Image source={require('../../img/warehouseFinal.png')} style={{
            alignSelf: 'center', width: Dimensions.get('window').width,
            height: 200
          }} resizeMode="contain" />

          <Text style={{ fontSize: 20, fontWeight: "bold", color: "red", padding: 10 }}>
            INTRODUCTION :
          </Text>
          <Text style={{ fontSize: 20, color: "white", padding: 10 }}>
            Allcargo Logistics and Industrial Parks is a part of the erstwhile Allcargo, the leader in integrated logistics services. We offer state-of-art warehousing and industrial real estate solution.
            With 14 strategically located parks across India already under various stages of development, we aim to take our nationwide warehousing footprint to 15 million sq.ft. by 2020. The purpose is to help clients overcome their warehousing challenges and make the most of our well-planned and easily accessible parks. Our lineage and strengths in asset management and development execution sets us apart. We are well poised to enable our clients minimize their logistics overheads.
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "red", padding: 10 }}>
            Total Development
          </Text>
          <Text style={{ fontSize: 20, color: "white", padding: 10 }}>
            15 million sqft. in 3-4 years Pan India Level
          </Text>
          <Image source={require('../../img/tableStats.png')} style={{
            alignSelf: 'center', width: Dimensions.get('window').width - 20,
            height: 350, marginBottom: 10
          }} resizeMode="contain" />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "red", padding: 10 }}>
            TECHNICAL SPECIFICATIONS OF THE PARKS
          </Text>
          <Image source={require('../../img/technicalSpecs.png')} style={{
            alignSelf: 'center', width: Dimensions.get('window').width - 20,
            height: 300, marginBottom: 10
          }} resizeMode="contain" />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "red", padding: 10 }}>
            CLOSURES FROM TOP 500
          </Text>
          <Image source={require('../../img/Closure1.png')} style={{
            alignSelf: 'center', width: Dimensions.get('window').width,
            height: 50, marginBottom: 10
          }} resizeMode="stretch" />

          <Image source={require('../../img/Closure2.png')} style={{
            alignSelf: 'center', width: Dimensions.get('window').width,
            height: 50, marginBottom: 10
          }} resizeMode="stretch" />

          <Image source={require('../../img/Closure3.png')} style={{
            alignSelf: 'center', width: Dimensions.get('window').width,
            height: 50, marginBottom: 10
          }} resizeMode="stretch" />

          <Image source={require('../../img/Closure4.png')} style={{
            alignSelf: 'center', width: Dimensions.get('window').width,
            height: 50, marginBottom: 10
          }} resizeMode="stretch" />

          <Image source={require('../../img/Closure5.png')} style={{
            alignSelf: 'center', width: Dimensions.get('window').width,
            height: 50, marginBottom: 10
          }} resizeMode="stretch" />

          <Image source={require('../../img/Closure6.png')} style={{
            alignSelf: 'center', width: Dimensions.get('window').width,
            height: 50, marginBottom: 10
          }} resizeMode="contain" />
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
});
