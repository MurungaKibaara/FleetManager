import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { BarChart, PieChart, XAxis } from 'react-native-svg-charts'
import { Col, Row, Grid } from "react-native-easy-grid";

class Analytics extends Component
{
  constructor (props)
  {
    super(props);
  }

  render ()
  {
    const data  = [29, 30, 70, 50, 34, 98, 51, 35, 53, 24, 50];

    const data2 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data2
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
      }))


    return (
      <ScrollView>
            <View style={styles.container}>

              <Text style={styles.text}>Daily Revenue</Text>
              <BarChart
                  style={{ flex: 1 }}
                  data={ data }
                  contentInset={{ top: 10, bottom: 10 }}
                  svg={{ fontSize: 10, fill : 'green'}}
                />

                <XAxis
                    style={{ marginHorizontal: -10, marginTop: 15}}
                    data={ data }
                    formatLabel={ (value, index) => index }
                    contentInset={{ left: 25, right: 25 }}
                    svg={{ fontSize: 10, fill : 'green'}}
                  />

                <Grid>
                    <Col>
                    <Text style={styles.text} > Expenses Analysis </Text>
                      <PieChart
                        style={ { height: 200, paddingTop:30 }}
                        data={ pieData }
                      />
                    </Col>
                </Grid>

            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 600,
  },
  text: {
    paddingTop: 20,
    color: 'black',
    alignSelf: 'center',
    paddingBottom: 10,
  }
});

export default Analytics;
