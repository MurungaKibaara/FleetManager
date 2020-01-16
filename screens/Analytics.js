import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { BarChart, PieChart, XAxis, LineChart, YAxis } from 'react-native-svg-charts'
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
    const contentInset = { top: 20, bottom: 20 }

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

                <Text style={styles.text} > Growth Analysis </Text>
                <View style={ { height: 200, flexDirection: 'row' } }>

                    <YAxis
                     data={data}
                     contentInset={ contentInset }
                     svg={{
                       fill: 'grey',
                       fontSize: 10,
                     }}
                     formatLabel={ value => `${value}ºC` }
                    />

                    <LineChart
                      style={ { flex: 1, marginLeft: 16 } }
                      data={data}
                      svg={{ stroke: 'rgb(134, 65, 244)' }}
                      contentInset={ contentInset }
                    >
                      <Grid/>
                    </LineChart>
                </View>

                  <Grid>
                      <Col>
                        <Text style={styles.text} > Expenses Analysis </Text>
                      </Col>
                  </Grid>
            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 800,
  },
  text: {
    paddingTop: 20,
    color: 'black',
    alignSelf: 'center',
    paddingBottom: 10,
  }
});

export default Analytics;
