import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Dimensions
} from 'react-native';

class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
      }

    render() {
        return (
            <View style={styles.container}>
                <Image resizeMode="contain" style={{   alignSelf: 'center',width: Dimensions.get('window').width-100,
height: 100}}   source={require('../img/logo.png')} />
  <Image resizeMode="contain" style={{   alignSelf: 'center',width: Dimensions.get('window').width-100,
height: 100, paddingBottom:50}}   source={require('../img/Logo2.png')} />
                <Button title="Log in" onPress={() => this.props.navigation.navigate
                    ('LoginScreen')} />
            </View>
        );
    }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151313',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
