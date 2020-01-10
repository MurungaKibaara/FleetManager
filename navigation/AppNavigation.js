import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Reports from '../screens/Home';



const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  },
});

const AnnouncementStack = createStackNavigator({
  Announcement: {
    screen: Reports
  },
});

const FleetStack = createStackNavigator({
  Fleet: {
    screen: Home
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Reports
  },
});


const AppNavigator = createMaterialBottomTabNavigator(
  {

    Home: {
      screen: HomeStack,
      navigationOptions: {
       tabBarLabel:"Home",
       tabBarOptions: { activeTintColor:'#519468' },
       tabBarIcon: ({ tintColor }) => (
         <Icon name="home" size={20} color={ tintColor } />
       ),
       showIcon:true
     },
    },

    Announcement: {
      screen: AnnouncementStack,
      navigationOptions: {
       tabBarLabel:"Expenses",
       tabBarOptions: { activeTintColor:'#519468' },
       tabBarIcon: ({ tintColor }) => (
         <Icon name="money" size={20} color= { tintColor } />
       ),
       showIcon:true
     },
   },


    Material: {
      screen: FleetStack,
      navigationOptions: {
       tabBarLabel:"Fleet",
        tabBarOptions: { activeTintColor:'#519468' },
       tabBarIcon: ({ tintColor }) => (
         <Icon name="car" size={20} color= { tintColor } />
       ),
       showIcon:true
     },
    },

    Contact: {
      screen: ProfileStack,
      navigationOptions: {
       tabBarLabel:"Profile",
       tabBarOptions: { activeTintColor:'#519468' },
       tabBarIcon: ({ tintColor }) => (<Icon name="user" size={20} color={tintColor} active= {tintColor === '#519468'}/>),
       showIcon:true
     },
     },
  },

  {
    initialRouteName: "Home",
    activeColor: "#519468",
    inactiveColor: 'gray',
    shifting:false,
    labeled: true,
    barStyle: {
      backgroundColor: '#fff',
      padding:3,
    },
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// const AppNavigation = createMaterialBottomTabNavigator(
//   {
//       Album: { screen: Home },
//       Library: { screen: Reports },
//       History: { screen: Home },
//       Cart: { screen: Reports },
//     },
//     {
//       initialRouteName: 'Album',
//       activeColor: '#f0edf6',
//       inactiveColor: '#3e2465',
//       barStyle: { backgroundColor: '#694fad' },
//       animationEnabled: false,
//     }
// )
//
// // export default AppNavigation;
// export default createAppContainer(AppNavigation);
