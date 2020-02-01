import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import LoginRe from './src/components/Login'
import Login from './src/components/Login'
import SignUp from './src/Signup.js'
import 'react-native-gesture-handler';
import HomeScreen from './src/components/HomeScreen'
import Myapp from './'
import Dashboard from './src/Dashboard/Dashboard'
import AddingNote from './src/Dashboard/AddingNote'
//import Flatlist from './src/Flatlist/Flatlist'
import TodoList from './TodoList/TodoList'


export default class FundooApp extends Component {
  render() {
    return (    
    
     //<HomeScreen/> 
      //<Flatlist/>
      <TodoList/>
    
    );
  }
}