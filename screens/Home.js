import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, FlatList } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import Constants from 'expo-constants';

const Home = () => {

  return (
    <View style = {styles.container}>
        <Text>Home page</Text>
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
});

export default Home;
