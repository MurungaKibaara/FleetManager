import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import Constants from 'expo-constants';
import { Card } from 'nachos-ui'


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const Home = () => {
  return (
    <View style = {styles.container}>

      <Card
          footerContent='The avocado is a tree that is native to Mexico'
          image='https://upx.cz/BsN'
          // style={cardStyle}
        />

      <Card
        footerContent='Agaves are a type of succulent plant from Mexico'
        image='https://upx.cz/BsD'
        // style={cardStyle}
      />

      <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />

    </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
    item: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
})

export default Home;
