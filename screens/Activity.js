import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';

// Import getNews from news.js
import { getNews } from './Articles';
import Article from './Articles';

export default class Activity extends Component {
  constructor(props) {
    super(props);
      this.state = {
        articles: [],
        refreshing: true,
        search: '',
        isLoading: true,
        arrayholder:[]
      };

      this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  updateSearch() {
    this.setState({ search });
    console.log(search)
  };

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.articles.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search:text,
    });
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
  );
}

ListViewItemSeparator = () => {
  //Item sparator view
  return (
    <View
      style={{
        height: 0.3,
        width: '90%',
        backgroundColor: '#080808',
      }}
    />
  );
}

render() {
  if (this.state.isLoading) {
    //Loading View while data is loading
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ActivityIndicator />
      </View>
    );
  }

    // const { search } = this.state;

    return (
      <>

        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
        />

        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => <Article article = {item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
          enableEmptySections={true}
        />

      </>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
    marginTop: Platform.OS == 'ios'? 30 : 0
  },
  textStyle: {
    padding: 10,
  },
});
