import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Home = () => {
  return (
    <View style = {styles.container}>
      <Text> Expenses page </Tesx>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: #fff,
    alignItems: center,
    justifyContent: center
  }
})
