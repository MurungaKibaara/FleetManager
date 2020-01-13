import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Revenue = () => {
  return (
    <View style = {styles.container}>
      <Text> Revenue </Text>
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

export default Revenue;