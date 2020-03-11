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

const MyDrawerNavigator = createDrawerNavigator({
    Dashboard : {
        screen : Dashboard,
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
        screen : Archive,
    },
    ReminderPage : {
        screen : ReminderPage,
     },
    TrashNotes : {
        screen : TrashNotes,
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