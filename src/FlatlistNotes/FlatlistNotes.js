import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { getNotes } from '../SignUpDataLayer/'
import { Chip } from 'react-native-paper';

export default class FlatListNotesPinned extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes : '',
      columnCount : [],
      pinned : 'pinned',
      columnCountAnother : []
    }
  }

  componentDidMount() {
    getNotes((notes) => {
      this.setState({
        notes : notes
      }, () => {
        console.log("inside the [FLATLIST callback] state of a note ----->  :", this.state.notes)
        Object.keys(this.state.notes).map((item) => {
        })
      })
    })
  }

  header = () => {
    return (
      <View >
        <Text style = {{ fontSize: 30 }}>Pinned</Text>
      </View>);
  }

  render() {
    var moment = require('moment');
    var pinnedNote = [];
    Object.keys(this.state.notes).map((item) => {
      if (this.state.notes[item].pinStatus == true
      ) {
        this.state.notes[item].noteId = item
        pinnedNote.push(this.state.notes[item])
        console.log("pinned notes are ----->", this.state.notes[item].noteId)
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
        <View style = {List == false
          ?
          styles.gridItem
          :
          styles.listItem
        }>
          <TouchableOpacity onPress = { () =>
            this.props.navigation.navigate('VerticalIconOfEdit',
              {
                "pin" : pinStatus, "trash" : trashStatus,
                "archive" : archiveStatus, "noteId" : noteId,
                "titleOfCurrentNote" : title, "note" : textNote
              })}>
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
          data = { pinnedNote }
          renderItem = {({ item }) => (console.log("Pinned items are ------------->>>>>> :", item)
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