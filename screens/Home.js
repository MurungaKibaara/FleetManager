import React, { Component } from 'react'
import { View, Image, ScrollView, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { ListItem, Button, Icon, Tile } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail } from 'native-base';

const capt = "Our fleet management solution allows you to manage your business right from your phone."

class Home extends Component {

  goToAnalytics = () => this.props.navigation.navigate('Analytics')
  goToRevenue = () => this.props.navigation.navigate('Revenue')
  goToFleet = () => this.props.navigation.navigate('Fleet')
  goToExpenses = () => this.props.navigation.navigate('Expenses')

  render() {

    return (
        <ScrollView>
            <View style = {styles.container}>

                <View style = {styles.statusBar}>
                  <StatusBar translucent backgroundColor={'#fff'}/>
                </View>

                <TouchableOpacity style={styles.item1}>
                    <Tile
                      imageSrc={require('../images/Banner.png')}
                      imageContainerStyle={styles.imageContainer}
                      activeOpacity={0.9}
                      title={'fleetio.'}
                      titleStyle={styles.title}
                      caption={capt}
                      captionStyle={styles.caption}
                      containerStyle={styles.container}
                      featured
                    />
                </TouchableOpacity>

                <Grid>
                  <Col>
                      <TouchableOpacity onPress={this.goToExpenses}>
                        <Card>
                          <CardItem style={styles.cardItem}>

                          <Icon
                              raised
                              name='money'
                              type='font-awesome'
                              color='black'
                              onPress={() => console.log('hello')}
                          />

                            <Body style={styles.cardBody}>
                              <Text style={styles.text}>
                                  Expenses
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={this.goToFleet}>
                        <Card>
                          <CardItem  style={styles.cardItem}>

                            <Icon
                                raised
                                name='truck'
                                type='font-awesome'
                                color='black'
                                onPress={() => console.log('hello')}
                            />

                            <Body style={styles.cardBody}>
                              <Text style={styles.text}>
                                Fleet

                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>
                  </Col>

                  <Col>
                      <TouchableOpacity onPress={this.goToRevenue}>
                        <Card>
                          <CardItem  style={styles.cardItem}>

                            <Icon
                                raised
                                name='bank'
                                type='font-awesome'
                                color='black'
                                onPress={() => console.log('hello')}
                            />

                            <Body style={styles.cardBody}>
                              <Text style={styles.text}>
                                Revenue

                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.goToAnalytics}>
                          <Card>
                            <CardItem style={styles.cardItem} >

                            <Icon
                                raised
                                name='chart-areaspline'
                                type='material-community'
                                color='black'
                            />

                              <Body style={styles.cardBody}>
                                <Text style={styles.text}>
                                  Analytics

                                </Text>
                              </Body>
                            </CardItem>
                          </Card>
                        </TouchableOpacity>
                  </Col>
              </Grid>

            </View>
        </ScrollView>
      )
  }
}

// <Image style={styles.image} source={require('../images/fleet-image.jpg')} />

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusBar: {
    backgroundColor: 'green',
  },

  title: {
    color: 'white',
    fontWeight: "bold",
    textTransform: 'uppercase',
    paddingTop: 80,
    fontFamily: "Iowan Old Style",
  },

  caption: {
    color: 'white',
    textTransform: 'uppercase',
  },

  item :{
    flex: 0.25,
    height: 150,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 0,
    padding:10,
    backgroundColor: 'gray',
  },

  item1 :{
    flex: 1,
    height: 200,
    width: "100%",
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    margin: 4,
    // opacity: 0.3

  },

  cardItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    textTransform: 'uppercase',
    height: 145,
  },

  cardBody: {
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 15,
    elevation: (Platform.OS === 'android') ? 50 : 0,
  },

  image: {
    backgroundColor: 'white',
    width: 155,
    height: 125,
    opacity: 0.9
  },

  text :{
    paddingTop: 100,
    color: 'black',
    // '#519468',
    fontWeight: "900"
  }
});

export default Home;
