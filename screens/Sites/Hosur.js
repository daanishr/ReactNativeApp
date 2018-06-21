import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView , Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress';
export default class Hosur extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30 , color:"white"}}> Hosur Site
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color:"red"}}> Summary
        </Text>
        <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>
        • Total Land Area – 11.68 acres
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10, color:"white" }}>
                   • Type of Usage- Warehousing & Industrial
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10, color:"white" }}>
                   • Total Leasable Area – 200,000 sqft approx.
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10 , color:"white"}}>
                   • BTS Area available for lease- 92,173 sqft
                   </Text>
                   <Text style={{ fontSize: 20, padding: 10, color:"white" }}>
                 
• Google coordinates - 12.6809180, 77.9557630
                   </Text>
                   <Image source={require('../../img/hosurbuilding.jpg')} style={{   alignSelf: 'center', height: 250,
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

                   <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 , color:"red"}}> Site Location
        </Text>
        <Image source={require('../../img/hosurmap.jpg')} style={{   alignSelf: 'center', height: 250,
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

        <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 , color:"red"}}> Layout
        </Text>
        <Image source={require('../../img/hosurlayout.jpg')} style={{   alignSelf: 'center', height: 250,
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
