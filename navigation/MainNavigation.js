import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import Analytics from '../screens/Analytics';
import Expenses from '../screens/Expenses';
import Fleet from '../screens/Fleet';
import Revenue from '../screens/Revenue';

const MainNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Revenue: {screen: Revenue},
    Expenses: {screen: Expenses},
    Fleet: {screen: Fleet},
    Analytics: {screen: Analytics}
  },

  // {
  //   initialRouteName: 'Home',
  // }
)

export default MainNavigation;
