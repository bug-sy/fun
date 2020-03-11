
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
//import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import { Divider, } from 'react-native-paper';
import { getProfilePic } from '../SignUpDataLayer'

class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      toggleGridOrList : false ,
      avatarSource : '',
      profilePic : ''
    }
  }


  componentDidMount() {
    getProfilePic((profilePic) => {
      this.setState({
        profilePic : profilePic
      }, () => {
      console.log("*******************************")
   console.log("*******************************")
   console.log("*******************************")
   console.log(this.state.profilePic)
      })
    })
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
         
            <View style={styles.navSectionStyle}>
            <Avatar rounded 
                    title = "MD"  
                    onPress = { () => this.handleImage() } 
                    source = {
                      this.state.profilePic
                          }
                    size = "xlarge"
                    overlayContainerStyle = {{ backgroundColor: 'blue', marginLeft : 40, width :200}}
            />
            <Text style={[styles.navItemStyle,{ marginTop : 10}]} onPress={this.navigateToScreen('Dashboard')}>
            Dashboard
              </Text>
            
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('CreateLabel')}>
              CreateLabel
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ReminderPage')}>
              ReminderPage  
              </Text>
            
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Piechart')}>
              Piechart 
              </Text>
             
            </View>
          </View>
          <View>
          <Divider/>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Archive')}>
              Archive
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('TrashNotes')}>
              TrashNotes
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Fundoo App</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
      },
      navItemStyle: {
        padding: 10,
        fontSize : 20

      },
      navSectionStyle: {
        //backgroundColor: 'lightgrey'
        marginBottom : 70
      },
      sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      footerContainer: {
        padding: 20,
       // backgroundColor: 'lightgrey'
      }
  });

export default SideMenu;