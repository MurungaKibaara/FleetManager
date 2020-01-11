import React from 'react'
import { View, ScrollView, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import { ListItem, Button, Icon, Tile } from 'react-native-elements'
import Constants from 'expo-constants';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';


const Home = () => {

  return (
    <ScrollView>
        <View style = {styles.container}>

            <View style = {styles.statusBar}>
              <StatusBar translucent backgroundColor={'#fff'}/>
            </View>




            <TouchableOpacity style={styles.item1}>

            <Tile
              // imageSrc={pic}
              imageContainerStyle={styles.imageContainer}
              activeOpacity={0.9}
              title={'Fleetr'}
              titleStyle={styles.title}
              caption={'Manage your Fleet!'}
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
                                 Collections
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
                             Vehicles
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
                               Profile
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
    backgroundColor: 'black'
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
    backgroundColor: 'white',

  },

  cardBody: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'pink'
  },

  imageContainer: {
    backgroundColor: 'gray',
    // position: 'sticky'
    // height: 2000,
  }
});

export default Home;
