import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Analytics from '../screens/Analytics';

const ScreensNavigation = createStackNavigator(
  {
    Home: {screen: Home},
    Analytics: {screen: Analytics}
  },

  {
    InitialRouteName: 'Home',
    // headerMode: 'none'
  }
)

export default ScreensNavigation;
