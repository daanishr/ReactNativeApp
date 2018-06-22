import React, { Component } from 'react'
import { TextInput, Text, StyleSheet, View, DatePickerIOS, TimePickerAndroid, DatePickerAndroid, Platform, Button, Alert } from 'react-native'
import * as firebase from 'firebase';
import uuidv1 from 'uuid/v1';
export default class RequestMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      number: '',
      chosenDate: new Date(),
      date: "2016-05-15",
      selectedHour: '',
      selectedMinute: ''

    };
    this.setDate = this.setDate.bind(this);
    this.openDatePicker = this.openDatePicker.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate })

  }

  dateChosen() {
    console.log(Platform.OS);
  }
  async openDatePicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        const date = new Date(year, month, day);
        Alert.alert("Selected date " + date.toDateString());
        this.setState({ chosenDate: date });
      }

    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }
  async openTimePicker() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        Alert.alert("Selected time " + hour + ":" + minute);
        this.setState({ selectedHour: hour });
        this.setState({ selectedMinute: minute });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }
  confirm() {

    if (this.state.companyName != '' && this.state.email != '') {
      firebase.database().ref('meetings/' + uuidv1()).set({
        email: this.state.email,
        phone: this.state.mobile,
        date: this.state.chosenDate + "",
        hour: this.state.selectedHour + "",
        minute: this.state.selectedMinute + ""
      }).then(() => {
        Alert.alert("Meeting confirmed for " + this.state.chosenDate.toDateString() + " at " + this.state.selectedHour + ":" + this.state.selectedMinute);
      }).catch((error) => {
        Alert.alert(error);
      });
    } else {
      Alert.alert("Please enter Email and phone number");
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={{
            height: 40, width: 170,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15, borderColor: 'white', padding: 10, backgroundColor: 'white', color: "black", borderWidth: 1, marginBottom: 20
          }} onChangeText={(email) => this.setState({ email })}
          keyboardType="email-address"
          keyboardAppearance="dark"
          enablesReturnKeyAutomatically={true}
          value={this.state.email}
          placeholder="Enter Email Address"
        />


        <TextInput
          style={{
            height: 40, width: 170,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15, borderColor: 'white', padding: 10, backgroundColor: 'white', color: "black", borderWidth: 1, marginBottom: 20
          }} onChangeText={(mobile) => this.setState({ mobile })}
          keyboardType="phone-pad"
          enablesReturnKeyAutomatically={true}
          value={this.state.mobile}
          placeholder="Enter Mobile No"
        />
        {/* <Button 
                
                title="Date" onPress={() => this.props.dateChosen()} />
            <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      /> */}
        {Platform.OS === "ios" ? <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        /> :
          <View>
            <Button title="Select Date" onPress={() => this.openDatePicker()}></Button>
            <Text>het</Text>
            <Button title="Select Time" onPress={() => this.openTimePicker()}></Button>
            <Text>het</Text>
          </View>
        }

        <Button
          title="Confirm Meeting" color="red" onPress={() => this.confirm()} />
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
