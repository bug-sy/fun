import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import Login from '../components/Login'
import SignUp from '../Signup'
import Dashboard from '../Dashboard/Dashboard'
import Archive from '../NavigationPages/ArchivePage'

const MyDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: Dashboard,
    },
    SignUp: {
        screen: SignUp,
    },
    Archive: {
        screen: Archive,
    },
}, {
    initialRouteName: 'Dashboard',

});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp