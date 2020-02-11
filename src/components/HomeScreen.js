import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Drawer from './Drawer'
import Login from '../components/Login'
import SignUp from '../Signup'
import AddingNote from '../Dashboard/AddingNote'
import EditNotes from '../EditNotes/EditNotes'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login, navigationOptions:{header:null}
  },
  Drawer: {
    screen: Drawer, navigationOptions:{header:null}
  },
  Login: {
    screen: Login, navigationOptions:{header:null}
  },
  SignUp: {
    screen: SignUp, navigationOptions:{header:null}
  },
  AddingNote:{
    screen:AddingNote, navigationOptions:{header:null}
  },
  EditNotes:{
    screen:EditNotes,navigationOptions:{header:null}
  }
},{
    initialRouteName:'Login'
});

export default createAppContainer(AppNavigator);
