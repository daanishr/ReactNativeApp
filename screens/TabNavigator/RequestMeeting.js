import React, { Component } from 'react'
import { Text, StyleSheet, View, DatePickerIOS , Platform, Button, Alert} from 'react-native'
// import DatePicker from 'react-native-datepicker'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class RequestMeeting extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          chosenDate: new Date(),
          date:"2016-05-15" 
        };
        this.setDate = this.setDate.bind(this);
        //this.openDatePicker = this.openDatePicker.bind(this);
      }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  dateChosen(){
    console.log(Platform.OS);
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
