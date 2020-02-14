import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { getNotes } from '../SignUpDataLayer/'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: '',
      columnCount:[],
      pinned:'pinned',
      columnCountAnother:[]
    }
  }

  componentDidMount() {
    getNotes((notes) => {
      this.setState({
        notes: notes
      }, () => {
        
        console.log("inside the [FLATLIST callback] state of a note ----->  :", this.state.notes)
        Object.keys(this.state.notes).map((item) => {
         
          //console.log(arr)

        })
      })
    })
  }

  headerUnpinned = () => {
    return(
    <View >
      <Text >Others</Text>
    </View>);
  }

  render() {
    var pinnedNote = [];
    Object.keys(this.state.notes).map((item) => {
      if(this.state.notes[item].pinStatus==false && this.state.notes[item].archiveStatus==false){
      this.state.notes[item].noteId=item
      pinnedNote.push(this.state.notes[item])
      console.log("pinned notes are ----->",this.state.notes[item].noteId)
      }
    })
    
    var unpinnedNote = [];
    //console.log("inside the render KEYS ---------> ", Object.getOwnPropertyNames(this.state.notes))
    Object.keys(this.state.notes).map((item) => {
      if(this.state.notes[item].pinStatus==false){
      this.state.notes[item].noteId=item
      unpinnedNote.push(this.state.notes[item])
      console.log("the id are ----->",this.state.notes[item].noteId)
      }
    })


  
      {     
      this.props.toggleGridOrList==false
      ?
      this.state.columnCount[0]=2
      : 
      this.state.columnCount[0]=1
      }

      {
        this.props.toggleGridOrList==false?
        this.state.columnCountAnother[0]=2:this.state.columnCountAnother[0]=1
      }

      const Item = ({ List,pinStatus,trashStatus,archiveStatus,noteId, title, textNote }) => {
        return (
          <View style={List==false
                      ?
                      styles.gridItem
                      :
                      styles.listItem
                      }>
            <TouchableOpacity onPress={() => 
              this.props.navigation.navigate('EditNotes',
              {"pin":pinStatus,"trash":trashStatus,
              "archive":archiveStatus,"noteId":noteId,
              "titleOfCurrentNote": title,"note": textNote })}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.title}>{textNote}</Text>
            </TouchableOpacity>
          </View>
        )
      }
     
    return (
      <SafeAreaView style={styles.container}>

        <FlatList
          data={pinnedNote}
          renderItem={({ item }) =>( console.log("Pinned items are ------------->>>>>> :",item)
          ,
          <Item List={this.props.toggleGridOrList}
           title={item.title} textNote={item.textNote} 
           noteId={item.noteId} pinStatus={item.pinStatus} 
           trashStatus={item.trashStatus} archiveStatus={item.archiveStatus}
          /> )
        }
        key={this.state.columnCount[0]}
        numColumns={this.state.columnCount[0]}
        ListHeaderComponent={this.headerUnpinned}
       stickyHeaderIndices={[0]}
        />
      </SafeAreaView>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: Constants.statusBarHeight,
    padding:10,
    //backgroundColor:"pink"
  },
  gridItem: {
    backgroundColor: '#b3d9ff',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 4,
    width: '50%'
  },
  listItem: {
    backgroundColor: '#b3d9ff',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 4,
    width: '100%',
  },
  title: {
    fontSize: 18,
  },
});