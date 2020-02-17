import * as React from 'react';
import { View, Image,TouchableOpacity} from 'react-native';
import Dialog from "react-native-dialog";
import PickTheDate from "./PickTheDate"
import DatePicker from 'react-native-datepicker'
//import { View, Image,TouchableOpacity} from 'react-native';

export default class DialogTester extends React.Component {
  state = {
    dialogVisible: false,
    date:"2016-05-15",
    time:" "
  };
 
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
 
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
 
  handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: false });
  };
 
  render() {
    
    console.log("what date----->>>>",this.state.date)
    return (
      <View>
        <TouchableOpacity onPress={this.showDialog}>
        <Image
          style={{ height: 30, width: 24 }}
          source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/reminderOutlined.png')}
          />
        </TouchableOpacity>
        <Dialog.Container visible={this.state.dialogVisible}>
        <View>
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
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
      />
      </View>
      <View style={{marginTop:6}}>
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="time"
        placeholder="select date"
        format="h:mm a"
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
        onDateChange={(time) => {this.setState({time: time})}}
      />
      </View>
         
          
         <Dialog.Button label="Save" onPress={()=>{this.props.handleDateTime(this.state.date,this.state.time),this.handleCancel()}} /> 
        </Dialog.Container>
      </View>
    );
  }
}