import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, FlatList, StatusBar } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import Constants from 'expo-constants';

const Home = () => {

  return (
    <View style = {styles.container}>
        <View style = {styles.statusBar}>
          <StatusBar translucent backgroundColor={'#fff'}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: 'green',
  }
});

export default Home;
