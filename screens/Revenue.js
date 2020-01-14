import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

// const Revenue = () => {
//   return (
//     <View style = {styles.container}>
//       <Text> Revenue </Text>
//     </View>
//   )
// }
//
// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   statusBar: {
//     backgroundColor: 'green',
//   }
// });
//
// export default Revenue;


export default class Revenue extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <>
      <SearchBar
        style={styles.search}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />

      <Text> Revenue Page </Text>
      </>

        )
      }
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
  },

  search: {
    backgroundColor: 'white',
    color:'black',
  }
    });
