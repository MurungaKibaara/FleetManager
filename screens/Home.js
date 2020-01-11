import React from 'react'
import { View, Image, ScrollView, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { ListItem, Button, Icon, Tile } from 'react-native-elements'
import Constants from 'expo-constants';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail } from 'native-base';

const capt = "Our fleet management solution allows you to manage your business right from your phone."

const Home = () => {

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
                  title={'Fleetr'}
                  titleStyle={styles.title}
                  caption={capt}
                  captionStyle={styles.caption}
                  containerStyle={styles.container}
                  featured
                />
            </TouchableOpacity>

            <Grid>
              <Col>
                  <TouchableOpacity>
                    <Card>
                      <CardItem style={styles.cardItem}>
                      <Image style={styles.image} source={require('../images/expenses.webp')} />
                        <Body style={styles.cardBody}>
                          <Text style={styles.text}>

                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <CardItem  style={styles.cardItem}>
                      <Image style={styles.image} source={require('../images/fleets.jpeg')} />
                        <Body style={styles.cardBody}>
                          <Text style={styles.text}>
                             Manage Fleet
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
              </Col>

              <Col>
                  <TouchableOpacity>
                    <Card>
                      <CardItem  style={styles.cardItem}>
                      <Image style={styles.image} source={require('../images/income.png')} />
                        <Body style={styles.cardBody}>
                          <Text style={styles.text}>

                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Card>
                        <CardItem style={styles.cardItem} >
                        <Image style={styles.image} source={require('../images/report.jpg')} />
                          <Body style={styles.cardBody}>
                            <Text style={styles.text}>

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

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // '#519468'
  },

  statusBar: {
    backgroundColor: 'green',
  },

  title: {
    color: 'white',
    fontWeight: "900",
    textTransform: 'uppercase',
    fontSize: 60,
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
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    margin: 3,

  },

  cardItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    textTransform: 'uppercase',
  },

  cardBody: {
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 15,
    elevation: (Platform.OS === 'android') ? 50 : 0,
    opacity: 0.8,
  },

  image: {
    backgroundColor: 'white',
    width: 155,
    height: 125,
  },

  text :{
    // textTransform: 'uppercase',
    color: '#519468',
    fontWeight: "900"
  }
});

export default Home;
