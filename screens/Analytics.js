import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts'

class Analytics extends Component
{
  constructor (props)
  {
    super(props);
  }

  render ()
  {
    const data   = [29, 30, 70, 50, 34, 98, 51, 35, 53, 24, 50];

    return (
      <View style={styles.container}>
        <BarChart
          style={{ flex: 1 }}
          data={ data }
          contentInset={{ top: 30, bottom: 30 }}
          svg={{ fontSize: 10, fill : 'green'}}
          />

        <XAxis
          style={{ marginHorizontal: -10, marginTop: 15}}
          data={ data }
          formatLabel={ (value, index) => index }
          contentInset={{ left: 25, right: 25 }}
          svg={{ fontSize: 10, fill : 'green'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '60%'
  }
});

export default Analytics;
