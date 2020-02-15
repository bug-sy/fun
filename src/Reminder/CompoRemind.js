import * as React from 'react';
import { View, Image,TouchableOpacity} from 'react-native';
import Dialog from "react-native-dialog";
import PickTheDate from "./PickTheDate"
import DatePicker from 'react-native-datepicker'
//import { View, Image,TouchableOpacity} from 'react-native';

export default class DialogTester extends React.Component {
  state = {
    dialogVisible: false,
    date:"2016-05-15"
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
        mode="datetime"
        placeholder="select date"
        format="YYYY-MM-DD h:mm a"
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
      />
      </View>
         
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
         <Dialog.Button label="Delete" onPress={()=>this.props.handleDateTime(this.state.date)} /> 
        </Dialog.Container>
      </View>
    );
  }
}