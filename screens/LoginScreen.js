import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Alert,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';
import uuidv1 from 'uuid/v1';
import { StackNavigator } from 'react-navigation'



class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            email: '',
            text: 'Useless Placeholder',
            mobile: '',
            loading: false
        };
    }

  
    login() {
        
        if (this.state.companyName != '' && this.state.email != '') {
            this.setState({loading: true});
            firebase.database().ref('user/'+uuidv1()).set({
                name:this.state.companyName,
                email:this.state.email,
                phone: this.state.mobile
            }).then(() => {
                this.setState({loading: false});
                this.props.navigation.navigate('DrawerNavigator');
            }).catch((error)=> {
                Alert.alert(error);
            });
           
        } else {
            Alert.alert("Please enter company name and email");
        }
    }

    render() {
        return (
           <View style={styles.container}>
           {this.state.loading ? <View style={[styles.container, styles.horizontal]}>
                      <ActivityIndicator size="large" color="red" />
                 </View>: null
            }
                <TextInput
                    style={{ height: 40, width: 170, borderColor: 'black', padding: 10, color: "white", borderWidth: 1, marginBottom: 20 }}
                    onChangeText={(companyName) => this.setState({ companyName })}
                    value={this.state.companyName}
                    placeholder="Enter Company Name"
                />
                <TextInput
                    style={{ height: 40, width: 170, borderColor: 'black', padding: 10, color: "white", borderWidth: 1, marginBottom: 20 }}
                    onChangeText={(email) => this.setState({ email })}
                    keyboardType="email-address"
                    keyboardAppearance="dark"
                    enablesReturnKeyAutomatically={true}
                    value={this.state.email}
                    placeholder="Enter Email Address"
                />
                <TextInput
                    style={{ height: 40, width: 170, borderColor: 'black', padding: 10, color: "white", borderWidth: 1, marginBottom: 20 }}
                    onChangeText={(mobile) => this.setState({ mobile })}
                    keyboardType="phone-pad"
                    enablesReturnKeyAutomatically={true}
                    value={this.state.mobile}
                    placeholder="Enter Mobile No"
                />
                <Button
                    title="Complete Login" onPress={() => this.login()} />
                <Image resizeMode="contain" style={{
                    alignSelf: 'center', width: Dimensions.get('window').width - 100,
                    height: 100, margin:20
                }} source={require('../img/logo.png')} />
            </View> 
   
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
});
