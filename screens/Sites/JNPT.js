import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView , Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress';
export default class JNPT extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
   
        <Text style={{ fontSize: 40 , fontWeight: "bold", paddingTop: 30 , color:"white"}}> JNPT site</Text>
        <Text style={{ fontSize: 30 ,padding: 10 , color:"red"}}>Summary</Text>
                    <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>
                    • Total Land Area – 23 acres (Approx.)




• Google coordinates - 18.862069, 73.010711
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>
                    • Type of Usage- Warehousing
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>

• Total Leasable Area – 532,244 sqft
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>
                    • Area available for lease- 3,43,667 sqft
                   </Text>
                    <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>
                    • Micro-market – JNPT
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>
                   • Location – Koproli, JNPT, Mumbai
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10, color:"white" }}>
                   • Google coordinates - 18.862069, 73.010711
                   </Text>
                   <Text style={{ fontSize: 30, fontWeight:"bold", padding: 10 , color:"red"}}>
             Map View
          </Text>
                   <Image source={require('../../img/jnptmapview.jpg')} style={{   alignSelf: 'center', height: 250,
    width: Dimensions.get('window').width}}   resizeMode="contain" 
    defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
    indicator={Progress.Pie}
    indicatorProps={{
      size: 80,
      borderWidth: 0,
      color: 'rgba(150, 150, 150, 1)',
      unfilledColor: 'rgba(200, 200, 200, 0.2)'
    }}
    />
                   <Text style={{ fontSize: 30, fontWeight:"bold", padding: 10, color:"red" }}>
              Layout of the land
          </Text>
          <Image source={require('../../img/jnptlayout.jpg')} style={{   alignSelf: 'center', height: 250,
    width: Dimensions.get('window').width}}   resizeMode="contain" 
    defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
    indicator={Progress.Pie}
    indicatorProps={{
      size: 80,
      borderWidth: 0,
      color: 'rgba(150, 150, 150, 1)',
      unfilledColor: 'rgba(200, 200, 200, 0.2)'
    }}
    />
    <Text style={{ fontSize: 30, fontWeight:"bold", padding: 10, color:"red" }}>
              Ariel View
          </Text>
          <Image source={require('../../img/jnptariel1.jpg')} style={{   alignSelf: 'center', height: 250,
    width: Dimensions.get('window').width}}   resizeMode="contain" 
    defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
    indicator={Progress.Pie}
    indicatorProps={{
      size: 80,
      borderWidth: 0,
      color: 'rgba(150, 150, 150, 1)',
      unfilledColor: 'rgba(200, 200, 200, 0.2)'
    }}
    />
          <Image source={require('../../img/jnptariel2.jpg')} style={{   alignSelf: 'center', height: 250,
    width: Dimensions.get('window').width}}   resizeMode="contain" 
    defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
    indicator={Progress.Pie}
    indicatorProps={{
      size: 80,
      borderWidth: 0,
      color: 'rgba(150, 150, 150, 1)',
      unfilledColor: 'rgba(200, 200, 200, 0.2)'
    }}
    />

          <Text style={{ fontSize: 30, fontWeight:"bold", padding: 10 , color:"red"}}>
             Existing Leased out building:
          </Text>
          <Image source={require('../../img/jnptbuilding1.jpg')} style={{   alignSelf: 'center', height: 250,
    width: Dimensions.get('window').width}}   resizeMode="contain" 
    defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
    indicator={Progress.Pie}
    indicatorProps={{
      size: 80,
      borderWidth: 0,
      color: 'rgba(150, 150, 150, 1)',
      unfilledColor: 'rgba(200, 200, 200, 0.2)'
    }}
   />
          <Image source={require('../../img/jnptbuilding2.jpg')} style={{   alignSelf: 'center', height: 250,
    width: Dimensions.get('window').width}}   resizeMode="contain"
    defaultSource={{uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200}}
    indicator={Progress.Pie}
    indicatorProps={{
      size: 80,
      borderWidth: 0,
      color: 'rgba(150, 150, 150, 1)',
      unfilledColor: 'rgba(200, 200, 200, 0.2)'
    }}
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
