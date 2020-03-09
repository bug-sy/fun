import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { getNotes, countOfNotesTypes } from '../SignUpDataLayer/'
import { Chip } from 'react-native-paper';



export default class ReminderNotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes : '',
      columnCount : [],
      reminder : 'Reminder',
      columnCountAnother : []
    }
  }

  componentDidMount() {
    getNotes((notes) => {
      this.setState({
        notes : notes
      }, () => {
        var reminderCount = 0
        Object.keys(this.state.notes).map((item) => {
          this.state.notes[item].reminderDate !== undefined
          ?
          reminderCount = ++reminderCount
          :
          null
        })
        console.log("=========ReminderCount================")
          console.log("=========================")
          console.log("=========================")
          console.log("=========================")
          console.log(reminderCount)
          countOfNotesTypes(this.state.reminder,{remindCount:reminderCount})
      })
    })
  }

  header = () => {
    return (
      <View >
        <Text style = {{ fontSize: 30 }}>Reminder</Text>
      </View>);
  }

  render() {
    var moment = require('moment');
    var reminderNote = [];
    Object.keys(this.state.notes).map((item) => {
      if (this.state.notes[item].reminderDate != null
      ) {
        this.state.notes[item].noteId = item
        reminderNote.push(this.state.notes[item])
      }
    })

    {
      this.props.toggleGridOrList == false
        ?
        this.state.columnCount[0] = 2
        :
        this.state.columnCount[0] = 1
    }

    {
      this.props.toggleGridOrList == false
        ?
        this.state.columnCountAnother[0] = 2
        :
        this.state.columnCountAnother[0] = 1
    }

    const Item = ({ List, pinStatus, trashStatus, archiveStatus, noteId, title, textNote, reminderDate, reminderTime }) => {
      return (
        <View style = { List == false
          ?
          styles.gridItem
          :
          styles.listItem
        } >
          <TouchableOpacity 
               onPress = 
              { () =>
            this.props.navigation.navigate('BottomBarWithReminder',
              {
                "pin" : pinStatus, "trash" : trashStatus,
                "archive" : archiveStatus, "noteId" : noteId,
                "titleOfCurrentNote" : title, "note" : textNote
              })}
            >
            <Text style = { styles.title }>{ title }</Text>
            <Text style = { styles.title }>{ textNote }</Text>
            {
              reminderDate != undefined
                ?
                <Chip icon = { require('/home/admin1/Documents/FundooApp/AwesomeProject/image/alarm.png') } 
                  style = {{ width : 160 }} onPress = { () => console.log('Pressed') }>
                  { moment(reminderDate).format("MMM Do")},{ reminderTime }
                </Chip>
                :
                null
            }
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <SafeAreaView style = { styles.container }>

        <FlatList
          data = { reminderNote }
          renderItem = {({ item }) => (console.log("Reminder items are ------------->>>>>> :", item)
            ,
            <Item List = { this.props.toggleGridOrList }
              title = { item.title } textNote = { item.textNote }
              noteId = { item.noteId } pinStatus = { item.pinStatus }
              trashStatus = { item.trashStatus } archiveStatus = { item.archiveStatus }
              reminderDate = { item.reminderDate } reminderTime = { item.reminderTime }
            />)
          }
          key = { this.state.columnCount[0] }
          numColumns = { this.state.columnCount[0] }
          ListHeaderComponent = { this.header }
          stickyHeaderIndices = { [0] }
        />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 2,
    marginTop : Constants.statusBarHeight,
    padding : 2,
  },
  gridItem : {
    backgroundColor : 'grey',
    padding : 2,
    marginVertical : 4,
    marginHorizontal : 4,
    width : '48%',
    borderRadius : 6,
    elevation : 4,
    borderWidth : 0.25
  },
  listItem : {
    backgroundColor : 'grey',
    padding : 2,
    marginVertical : 4,
    marginHorizontal : 4,
    width : '95%',
    borderRadius : 6,
    elevation : 4,
    borderWidth : 0.25
  },
  title : {
    fontSize : 18,
  },
});