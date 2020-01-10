import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Expenses = () => {
  return (
    <View style = {styles.container}>
      <Text> Expenses page </Text>
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

export default Expenses
