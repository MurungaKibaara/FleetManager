import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'

const SwitchNavigation = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation
  },
  {
    InitialRouteName: 'Auth'
  }
)
const AppContainer = createAppContainer(SwitchNavigation)

export default AppContainer
