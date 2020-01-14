import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Activity from '../screens/Activity';
import Fleet from '../screens/Fleet';

const HomeStack = createStackNavigator({
  Home: {
        screen: Home,
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        },
        screenOptions:{
          headerShown: false
        }
      },
    },

    {
      defaultNavigationOptions: {
        title: false,
        header: false,
        // headerTitle:(
        // <Text>Fleetr</Text>),
          // ( <Image style={{width:300, height: 150, flex: 1}} resizeMode="contain" source={require('../images/main-logo.png')}/> ),
        headerTitleStyle: { flex: 1, textAlign: 'center' },
        headerStyle: false,
        // { backgroundColor: '#519468' },
        headerTintColor: 'white',
        },
      }
    );

const ActivityStack = createStackNavigator({
  Activity: { screen: Activity }
    },
    {
      defaultNavigationOptions: {
        title: false,
        // headerTitle:(),
        // (<Text>Fleetr</Text>),
        // ( <Image style={{width:300, height: 150, flex: 1}} resizeMode="contain" source={require('../images/main-logo.png')}/> ),
        headerTitleStyle: { flex: 1, textAlign: 'center' },
        headerStyle: { backgroundColor: '#8a0813' },
        headerTintColor: 'white',
        },
      }
  );

const FleetStack = createStackNavigator({
  Fleet: { screen: Fleet }
    },
    {
      defaultNavigationOptions: {
        title: false,
        // headerTitle: (
          // <Text>Fleetr</Text>),
          // <Image style={{width:300, height: 150, flex: 1}} resizeMode="contain" source={require('../images/main-logo.png')} />),
        headerTitleStyle: { flex: 1, textAlign: 'center', fontSize:30 },
        headerStyle: { backgroundColor: '#8a0813' },
        headerTintColor: '#fff',
        },
      }
  );

const SettingsStack = createStackNavigator({
    Settings: { screen: Settings }
      },
      {
        defaultNavigationOptions: {
          title: false,
          // headerTitle: (
          //   <Text>Fleetr</Text>),
            // <Image style={{width:300, height: 150, flex: 1}} resizeMode="contain" source={require('../images/main-logo.png')}/>),
          headerTitleStyle: { flex: 1, textAlign: 'center' },
          headerStyle: { backgroundColor: '#8a0813' },
          headerTintColor: 'white',
        },
      }
);


const AppNavigator = createMaterialBottomTabNavigator(
  {
      Home: {
        screen: HomeStack,
        headerMode: 'none',
        navigationOptions: {
         tabBarLabel:"Home",
         headerVisible: false,
         tabBarOptions: { activeTintColor:'#8a0813' },
         tabBarIcon: ({ tintColor }) => (<Icon name="home" size={20} color={ tintColor } active= {tintColor === '#8a0813'}/>),
         showIcon:true,
       },
    },

      Activity: {
        screen: ActivityStack,
        navigationOptions: {
         tabBarLabel:"Activity",
         tabBarOptions: { activeTintColor:'#8a0813' },
         tabBarIcon: ({ tintColor }) => ( <Icon name="rocket" size={20} color= { tintColor } active= {tintColor === '#8a0813'} /> ),
         showIcon:true,
       },
     },

      Fleet: {
        screen: FleetStack,
        navigationOptions: {
         tabBarLabel:"Fleet",
          tabBarOptions: { activeTintColor:'#8a0813' },
         tabBarIcon: ({ tintColor }) => (<Icon name="car" size={20} color= { tintColor } active= {tintColor === '#8a0813'}/> ),
         showIcon:true
       },
      },

      Settings: {
        screen: SettingsStack,
        navigationOptions: {
         tabBarLabel:"Settings",
         tabBarOptions: { activeTintColor:'#8a0813' },
         tabBarIcon: ({ tintColor }) => (<Icon name="cog" size={20} color={tintColor} active= {tintColor === '#8a0813'}/>),
         showIcon:true
       },
     },
    },

    {
      initialRouteName: "Home",
      activeColor: "#8a0813",
      inactiveColor: 'gray',
      shifting:false,
      labeled: true,
      barStyle: {
        backgroundColor: '#fff',
        padding:3,
      },
    },
)



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//
//   imageLogo: {
//     width: 400,
//     height: 300
//   }
// });

export default createAppContainer(AppNavigator);
