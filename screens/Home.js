import React from 'react'
import { View, ScrollView, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { ListItem, Button, Icon, Tile } from 'react-native-elements'
import Constants from 'expo-constants';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

const capt = "Our fleet management solution providing helps your business right from your phone."

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
                        <Body style={styles.cardBody}>
                          <Text>
                             Expenses
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card>
                      <CardItem  style={styles.cardItem}>
                        <Body style={styles.cardBody}>
                          <Text>
                             Reports
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
                        <Body style={styles.cardBody}>
                          <Text>
                             Collections
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Card>
                        <CardItem style={styles.cardItem} >
                          <Body style={styles.cardBody}>
                            <Text>
                               Fleet
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
    backgroundColor: 'black',
    opacity: 0.2,
  },

  cardBody: {
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'pink'
  },

  imageContainer: {
    // backgroundColor: 'black',
    // position: 'sticky'
    // height: 2000,
  },
  title: {
    color: 'white',
    fontWeight: "400",
  },
  caption: {
    color: 'white',
  }
});

export default Home;
