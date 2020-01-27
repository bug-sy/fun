import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login'
import Drawer from './Drawer'


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
  Home: {
    screen: Login, navigationOptions:{header:null}
  },
  Drawer: {
    screen: Drawer, navigationOptions:{header:null}
  },
},{
    initialRouteName:'Drawer'
});

export default createAppContainer(AppNavigator);
