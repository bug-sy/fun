import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import Login from '../components/Login'
import SignUp from '../Signup'
import Dashboard from '../Dashboard/Dashboard'


const MyDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: Dashboard,
    },
    SignUp: {
        screen: SignUp,
    },
  },{
    initialRouteName:'Dashboard',
    
},);
  
const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp