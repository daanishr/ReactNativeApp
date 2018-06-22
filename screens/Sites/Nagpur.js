import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, ActivityIndicator, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PinchZoomView from 'react-native-pinch-zoom-view';

export default class Nagpur extends Component {

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
      title: "All Cargo Logistics (Nagpur)",
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
        <ScrollView pinchGestureEnabled={true} minimumZoomScale={1} maximumZoomScale={5} >
          <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30, color: "white" }}> Nagpur Site
        </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Summary
        </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
      
          •  Total Land Area – 60 acres
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            • Type of Usage- Warehousing & Industrial
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            • Total Leasable Area – 2.6mn sqft.
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            • Micro-market –  Near Butibori Industrial area
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>

            • Location – opposite to Borkhedi Railway Station
                   </Text>
        
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Site Location
        </Text>
        <PinchZoomView>

          <Image source={require('../../img/nagpurMap.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
            onLoadStart={(e) => this.setState({ loading: true })}
            onLoadEnd={(e) => this.setState({ loading: false })}
          />
          </PinchZoomView>

          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Clients
        </Text>
        <PinchZoomView>

          <Image source={require('../../img/clientsNagpur.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
            onLoadStart={(e) => this.setState({ loading: true })}
            onLoadEnd={(e) => this.setState({ loading: false })}
          />
        </PinchZoomView>

             <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10, color: "red" }}> Layout
        </Text>
        <PinchZoomView>

          <Image source={require('../../img/LayoutNagpur.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
            onLoadStart={(e) => this.setState({ loading: true })}
            onLoadEnd={(e) => this.setState({ loading: false })}
          />
        </PinchZoomView>

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
