import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import SignUp from '../Signup'
import Dashboard from '../Dashboard/Dashboard'
import Archive from '../NavigationPages/ArchivePage'
import ReminderPage from '../NavigationPages/ReminderPage'
import CreateLabel from '../NavigationPages/CreateLabel'
import Piechart from './Piechart.js'
import Drag from './Draggable'
import TrashNotes from '../NavigationPages/Trash'
import { Divider, } from 'react-native-paper';
import SideMenu from './SideMenu';
import React from 'react'

const MyDrawerNavigator = createDrawerNavigator({
    Dashboard : {
        //screen : Dashboard,
       // screen: (props) => <Dashboard  />
        screen: (props) => <Dashboard {...props} propName={'dashboard'} />
    },
    CreateLabel : {
        screen : CreateLabel,

    },
    Drag : {
        screen : Drag,
    },
    SignUp : {
        screen : SignUp,
    },
    Archive : {
       // screen : Archive,
        screen: (props) => <Archive {...props} propName={'achive'} />
    },
    ReminderPage : {
       // screen : ReminderPage,
        screen: (props) => <ReminderPage {...props} propName={'reminderPage'} />
     },
    TrashNotes : {
       // screen : TrashNotes,
        screen: (props) => <TrashNotes {...props} propName={'trashNotes'} />
    },
    Piechart : {
        screen : Piechart,
    },
     
}, {
    initialRouteName : 'Dashboard',
    contentComponent: SideMenu,
    contentOptions: {
      activeTintColor: '#000000',
      activeBackgroundColor: '#e6e6e6',
    }

});

const Drawer = createAppContainer(MyDrawerNavigator);

export default Drawer