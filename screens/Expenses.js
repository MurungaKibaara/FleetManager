import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Expenses = () => {
  return (
    <View style = {styles.container}>
      <Text> Expenses </Text>
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

export default Expenses;
