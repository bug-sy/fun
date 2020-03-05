import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import SignUp from '../Signup'
import Dashboard from '../Dashboard/Dashboard'
import Archive from '../NavigationPages/ArchivePage'
import ReminderPage from '../NavigationPages/ReminderPage'
import CreateLabel from '../NavigationPages/CreateLabel'
import Piechart from './Piechart.js'
// import ReminderPage from '../Reminder/ReminderFiles/ReminderPage';
//import ReminderPage from '/home/admin1/Documents/FundooApp/AwesomeProject/src/Reminder/ReminderFiles/ReminderPage.js'

const MyDrawerNavigator = createDrawerNavigator({
    Dashboard : {
        screen : Dashboard,
    },
    CreateLabel : {
        screen : CreateLabel,
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
    Piechart : {
        screen : Piechart,
    },
     
}, {
    initialRouteName : 'Dashboard',

});

const Drawer = createAppContainer(MyDrawerNavigator);

export default Drawer