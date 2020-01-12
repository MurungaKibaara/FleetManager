import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import Analytics from '../screens/Analytics';

const MainNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      headerMode: 'none'
    },

    Analytics: {screen: Analytics}
  },

  {
    initialRouteName: 'Home',
  }
)

export default MainNavigation;