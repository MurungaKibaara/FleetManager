import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';

const AppNavigation = createStackNavigator(
  {
    Home: {screen: Home}
  },

  {
    InitialRouteName: 'Home'
  }
)

export default AppNavigation;
