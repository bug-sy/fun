import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import Login from '../components/Login'
import SignUp from '../Signup'


const MyDrawerNavigator = createDrawerNavigator({
    Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUp,
    },
  });
  
  const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp