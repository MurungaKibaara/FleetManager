import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'
import MainNavigation from './MainNavigation'

const SwitchNavigation = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation
  },
  {
    InitialRouteName: 'Auth'
  }
)

const MainNavigator = createStackNavigator(
  {
    Switch: SwitchNavigation,
    Main: MainNavigation,
  },
  {
    InitialRouteName: 'Switch',
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(MainNavigator)

export default AppContainer
