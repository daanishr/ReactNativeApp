import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
      }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../img/allcargo-logo3130-343x220.jpg')} />
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
