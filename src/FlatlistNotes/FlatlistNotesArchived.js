import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { getNotes } from '../SignUpDataLayer/'

export default class FlatlistNotesArchived extends React.Component {
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
        
        Object.keys(this.state.notes).map((item) => {
        })
      })
    })
  }

  headerArchive = () => {
    return (
      <View >
        <Text style={{fontSize:30}}>Archive</Text>
      </View>);
  }

  render() {
    var archiveNote = [];
    Object.keys(this.state.notes).map((item) => {
      if (this.state.notes[item].archiveStatus == true
        &&
        this.state.notes[item].pinStatus == false
      ) {
        this.state.notes[item].noteId = item
        archiveNote.push(this.state.notes[item])
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

    const Item = ({ List, pinStatus, trashStatus, archiveStatus, noteId, title, textNote }) => {
      return (
        <View style = { List == false
          ?
          styles.gridItem
          :
          styles.listItem
        }>
          <TouchableOpacity onPress = { () =>
            this.props.navigation.navigate('EditNotesInArchive',
              {
                "pin" : pinStatus, "trash" : trashStatus,
                "archive" : archiveStatus, "noteId" : noteId,
                "titleOfCurrentNote" : title, "note" : textNote
              })}>
            <Text style = { styles.title }>{ title }</Text>
            <Text style = { styles.title }>{ textNote }</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <SafeAreaView style = { styles.container }>

        <FlatList
          data = { archiveNote }
          renderItem = { ({ item }) => (("Pinned items are ------------->>>>>> :", item)
            ,
            <Item List = { this.props.toggleGridOrList }
              title = { item.title } textNote = { item.textNote }
              noteId = { item.noteId } pinStatus = { item.pinStatus }
              trashStatus = { item.trashStatus } archiveStatus = { item.archiveStatus }
            />)
          }
          key = { this.state.columnCount[0] }
          numColumns = { this.state.columnCount[0] }
          ListHeaderComponent = { this.headerArchive }
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