import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class JNPT extends Component {
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

          <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 30, color: "white" }}> JNPT site</Text>
          <Text style={{ fontSize: 30, padding: 10, color: "red" }}>Summary</Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            • Total Land Area – 23 acres (Approx.)
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            • Type of Usage- Warehousing
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>

            • Total Leasable Area – 532,244 sqft
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            • Area available for lease- 3,43,667 sqft
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            • Micro-market – JNPT
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            • Location – Koproli, JNPT, Mumbai
                   </Text>
          <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
            • Google coordinates - 18.862069, 73.010711
                   </Text>

          <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10, color: "red" }}>
            Ariel View
          </Text>
          <Image source={require('../../img/jnptariel1.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
            onLoadStart={(e) => this.setState({ loading: true })}
            onLoadEnd={(e) => this.setState({ loading: false })}
          />
          <Image source={require('../../img/jnptariel2.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
            onLoadStart={(e) => this.setState({ loading: true })}
            onLoadEnd={(e) => this.setState({ loading: false })}
          />

          <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10, color: "red" }}>
            Site Location
          </Text>
          <Image source={require('../../img/jnptsitelocation.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
            onLoadStart={(e) => this.setState({ loading: true })}
            onLoadEnd={(e) => this.setState({ loading: false })}
          />



          <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10, color: "red" }}>
            Map View
          </Text>
          <Image source={require('../../img/jnptmapview.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
            onLoadStart={(e) => this.setState({ loading: true })}
            onLoadEnd={(e) => this.setState({ loading: false })}
          />
          <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10, color: "red" }}>
            Layout of the land
          </Text>
          <Image source={require('../../img/jnptlayout.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
            onLoadStart={(e) => this.setState({ loading: true })}
            onLoadEnd={(e) => this.setState({ loading: false })}
          />
          

          <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10, color: "red" }}>
            Existing Leased out building:
          </Text>
          <Image source={require('../../img/jnptbuilding1.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
            onLoadStart={(e) => this.setState({ loading: true })}
            onLoadEnd={(e) => this.setState({ loading: false })}
          />
          <Image source={require('../../img/jnptbuilding2.jpg')} style={{
            alignSelf: 'center', height: 250,
            width: Dimensions.get('window').width
          }} resizeMode="contain"
            defaultSource={{ uri: require('../../img/Loading.png'), width: Dimensions.get('window').width, height: 200 }}
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
  }
})
