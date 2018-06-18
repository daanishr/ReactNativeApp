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
            companyName: '',
            email: '',
            text: 'Useless Placeholder',
            mobile: ''
        };
    }
    login(){
        
    }

    render() {
        return (
            <View style={styles.container}>
                
                <TextInput
                    style={{ height: 40, width: 100, borderColor: 'white', borderWidth: 1 ,marginBottom: 20}}
                    onChangeText={(companyName) => this.setState({ companyName })}
                    value={this.state.companyName}
                    placeholder="Company Name"
                />


                <TextInput
                    style={{ height: 40, width: 100, borderColor: 'white', borderWidth: 1 , marginBottom: 20}}
                    onChangeText={(email) => this.setState({ email })}
                    keyboardType = "email-address"
                    keyboardAppearance = "dark"
                    enablesReturnKeyAutomatically = {true}
                    value={this.state.email}
                    placeholder="Email Address"
                />
       

        <TextInput
    style={{ height: 40, width: 100, borderColor: 'white', borderWidth: 1 , marginBottom: 20}}
    onChangeText={(mobile) => this.setState({ mobile })}
    keyboardType = "phone-pad"
    enablesReturnKeyAutomatically = {true}
    value={this.state.mobile}
    placeholder="Mobile Number"
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
