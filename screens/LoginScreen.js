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
        this.state = { companyName: 'All Cargo' , email: 'vaishnav@allcargo.com' };
    }
    render() {
        return (
            <View style={styles.container}>
              <Image 
                  style={{ width:250, height: 200 }}
              source={require('../img/vision.png')} />
                <Text>Company Name</Text>
                <TextInput
                    style={{ width:150, height: 40, padding: 20, borderColor: 'gray', borderWidth: 0 }}
                    onChangeText={(companyName) => this.setState({ companyName })}
                    value={this.state.companyName}
                />
                <Text  style={{ paddingTop: 30}}>Email</Text>
                <TextInput
                    style={{ width:150, padding: 20,paddingBottom: 30, height: 40, borderColor: 'gray', borderWidth: 0 }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <Button 
                
                title="Complete Login" onPress={() => this.props.navigation.navigate
                    ('DrawerNavigator')} />
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
