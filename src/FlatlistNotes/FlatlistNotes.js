import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { getNotes } from '../SignUpDataLayer/'

const Item = ({ title, textNote }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{textNote}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: ''
    }
  }



  componentDidMount() {
    getNotes((notes) => {
      this.setState({
        notes: notes
      }, () => {
        console.log("inside the [FLATLIST callback] state of a note ----->  :", this.state.notes)
        Object.keys(this.state.notes).map((item) => {

          console.log(this.state.notes[item])

        })
      })
    })
  }




  render() {
    var arr = [];
    console.log("inside the render KEYS ---------> ", Object.getOwnPropertyNames(this.state.notes))
    Object.keys(this.state.notes).map((item) => {
      arr.push(this.state.notes[item])
    })

    console.log("================")
    console.log('I am inside the array =======', arr)
    console.log("================")

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={arr}
          renderItem={({ item }) => <Item title={item.title} textNote={item.textNote} />}
        // keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '80%'
  },
  title: {
    fontSize: 32,
  },
});