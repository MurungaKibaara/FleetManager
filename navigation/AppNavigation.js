import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Reports from '../screens/Reports';
import Expenses from '../screens/Expenses';

const HomeStack = createStackNavigator({
  Home: { screen: Home }
    },
    {
      defaultNavigationOptions: {
        title: false,
        // headerTitle:(
        // <Text>Fleetr</Text>),
          // ( <Image style={{width:300, height: 150, flex: 1}} resizeMode="contain" source={require('../images/main-logo.png')}/> ),
        headerTitleStyle: { flex: 1, textAlign: 'center' },
        headerStyle: { backgroundColor: '#519468' },
        headerTintColor: 'white',
        },
      }
    );

const ExpensesStack = createStackNavigator({
  Expenses: { screen: Expenses }
    },
    {
      defaultNavigationOptions: {
        title: false,
        // headerTitle:(),
        // (<Text>Fleetr</Text>),
        // ( <Image style={{width:300, height: 150, flex: 1}} resizeMode="contain" source={require('../images/main-logo.png')}/> ),
        headerTitleStyle: { flex: 1, textAlign: 'center' },
        headerStyle: { backgroundColor: '#519468' },
        headerTintColor: 'white',
        },
      }
  );

const FleetStack = createStackNavigator({
  Fleet: { screen: Home }
    },
    {
      defaultNavigationOptions: {
        title: false,
        // headerTitle: (
          // <Text>Fleetr</Text>),
          // <Image style={{width:300, height: 150, flex: 1}} resizeMode="contain" source={require('../images/main-logo.png')} />),
        headerTitleStyle: { flex: 1, textAlign: 'center', fontSize:30 },
        headerStyle: { backgroundColor: '#519468' },
        headerTintColor: '#fff',
        },
      }
  );

const ProfileStack = createStackNavigator({
    Profile: { screen: Reports }
      },
      {
        defaultNavigationOptions: {
          title: false,
          // headerTitle: (
          //   <Text>Fleetr</Text>),
            // <Image style={{width:300, height: 150, flex: 1}} resizeMode="contain" source={require('../images/main-logo.png')}/>),
          headerTitleStyle: { flex: 1, textAlign: 'center' },
          headerStyle: { backgroundColor: '#519468' },
          headerTintColor: 'white',
        },
      }
);


const AppNavigator = createMaterialBottomTabNavigator(
  {
      Home: {
        screen: HomeStack,
        navigationOptions: {
         tabBarLabel:"Home",
         tabBarOptions: { activeTintColor:'#519468' },
         tabBarIcon: ({ tintColor }) => (<Icon name="home" size={20} color={ tintColor } />),
         showIcon:true,
       },

      },

      Expenses: {
        screen: ExpensesStack,
        navigationOptions: {
         tabBarLabel:"Expenses",
         tabBarOptions: { activeTintColor:'#519468' },
         tabBarIcon: ({ tintColor }) => ( <Icon name="money" size={20} color= { tintColor } /> ),
         showIcon:true,
       },
     },

      Fleet: {
        screen: FleetStack,
        navigationOptions: {
         tabBarLabel:"Fleet",
          tabBarOptions: { activeTintColor:'#519468' },
         tabBarIcon: ({ tintColor }) => (<Icon name="car" size={20} color= { tintColor } /> ),
         showIcon:true
       },
      },

      Profile: {
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
