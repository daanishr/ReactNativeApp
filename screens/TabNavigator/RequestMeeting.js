import React, { Component } from 'react'
import { Text, StyleSheet, View, DatePickerIOS , Button, Alert} from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class RequestMeeting extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
        //this.openDatePicker = this.openDatePicker.bind(this);
      }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }
  // openDatePicker(){
  //   try {
  //       // const {action, year, month, day} = await DatePickerAndroid.open({
  //       //   // Use `new Date()` for current date.
  //       //   // May 25 2020. Month 0 is January.
  //       //   date: new Date(2020, 4, 25)
  //       // });
  //       // if (action !== DatePickerAndroid.dismissedAction) {
  //       //   // Selected year, month (0-11), day
  //       // }
  //       console.log('date pick');
  //     } catch ({code, message}) {
  //       console.warn('Cannot open date picker', message);
  //     }
  // }
  render() {
    return (
      <View style={styles.container}>
   
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
