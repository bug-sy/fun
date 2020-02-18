import React, { Component } from 'react';
import 'react-native-gesture-handler';
import HomeScreen from './src/components/HomeScreen';
import CompoRemind from './src/Reminder/CompoRemind'
import { Provider } from 'react-native-paper';
import PickTheDate from './src/Reminder/PickTheDate';
import Selection from './src/PopOverOptions/SelectionPopOver'
import VerticalIcon from './src/VerticalIconAddingNotes/VertialIcon'


export default class FundooApp extends Component {
  render() {
    return (    
    
     <HomeScreen/> 
      //<Flatlist/
      //<TodoList/>
     // <Selection/>
 //<CompoRemind/>
 //<VerticalIcon/>
 

      
     
   
    );
  }
}