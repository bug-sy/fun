// import * as React from 'react';
// import { Button } from 'react-native-elements';
// import { TextInput, Paragraph, Headline } from 'react-native-paper';
// import { Text, View, Image, ScrollView } from 'react-native';

// export default class Dashboard extends React.Component{

//     render(){
//         return(
//             <View>
// <Paragraph>I am inside the Home Screen</Paragraph>
//             </View>
//         )
//     }
// }

import { SearchBar } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import React, { Component } from 'react'
import { Text, Image, ScrollView  } from 'react-native';
import {
  StyleSheet,
  TouchableOpacity,
  
  View,
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0,search: '' }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  updateSearch = search => {
    this.setState({ search });
  };

 render() {
    const { firstQuery } = this.state;
    const { search } = this.state;
   return (
       <ScrollView>
       <View style={styles.appbar}>
    <View style={{flexDirection:'row',justifyContent:'center',width:'100%'}}>
        <View>
    <TouchableOpacity  style={{width:'100%',height:'100%',backgroundColor:'lime',justifyContent:'center',flexDirection:'row',fontSize:20}}>
            <Text 
            style={{fontSize:25}}
            >
            Search your Notes
            </Text>
    </TouchableOpacity>
    </View>
    <View style={{}}>
    <TouchableOpacity style={{width:'100%',height:'100%',alignItems:'center',backgroundColor:'red'}}>
      <Image
         style={{ height:30, width: 40 }}
        source={require('/home/admin1/Documents/FundooApp/AwesomeProject/image/grid.png')}
        />
    </TouchableOpacity>
    </View> 
    
    <TouchableOpacity
   
    >
       <Avatar rounded title="MD" />
    </TouchableOpacity>
    
   
    </View>
     
      </View>
      </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    //alignItems: 'center',
    backgroundColor: '#DDDDDD',
    //padding: 10,
   // alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'column',
    width:'5%',
    height:'100%',
    alignItems:'center'
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  appbar: {
      width:'100%',
      justifyContent:"center",
      flex:1,
      backgroundColor:'pink'
  }
})