import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import LoginRe from './src/components/Login'
import Login from './src/components/Login'
import SignUp from './src/Signup.js'
import 'react-native-gesture-handler';
import HomeScreen from './src/components/HomeScreen'



export default class PizzaTranslator extends Component {


  render() {
    return (
    
       //<Login/>
     // <SignUp/>
      <HomeScreen/>
    
    );
  }
}