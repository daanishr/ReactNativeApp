import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: 'Name',
            email: 'email@example.com',
            text: 'Useless Placeholder'
        };
    }


    render() {
        return (
            <View style={styles.container}>
                  <Text style={{ fontWeight: "bold",padding: 10 }}>Company Name</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'white', borderWidth: 1 }}
                    onChangeText={(companyName) => this.setState({ companyName })}
                    value={this.state.companyName}
               
                />
                <Text style={{ fontWeight: "bold",padding: 10 }}>Email</Text>

                <TextInput
                    style={{ height: 40, borderColor: 'white', borderWidth: 1 , marginBottom: 20}}
                    onChangeText={(email) => this.setState({ email })}
                    keyboardType = "email-address"
                    keyboardAppearance = "dark"
                    enablesReturnKeyAutomatically = {true}
                    value={this.state.email}
                />
                <Button
                    title="Complete Login" onPress={() => this.props.navigation.navigate
                        ('DrawerNavigator')} />
                <Image
                    style={{ width: 350, height: 200 }}
                    source={require('../img/vision.png')} />
          
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
