import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Reports = () => {
  return (
    <View style = {styles.container}>
      <Text> Reports page </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Reports;
