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
      };

      this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false, isLoading:false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
  );
}

updateSearch = search => {
    this.setState({ search });
  };

search = text => {
  console.log(text);
};

clear = () => {
  this.search.clear();
};



SearchFilterFunction(text) {
  //passing the inserted text in textinput

  const newData = this.state.articles.filter(function(item) {
    //applying filter for the inserted text in search bar
    const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });

  this.setState({
    search:text,
    articles: newData,
  });
}


ListViewItemSeparator = () => {
  //Item sparator view
  return (
    <View style={{ height: 0.3, width: '90%', backgroundColor: '#080808',}} />
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

  return (
    <React.Fragment>
      <SearchBar
        round
        searchIcon={{ size: 20 }}
        onChangeText={ text => this.SearchFilterFunction(text) }
        onClear={text => this.SearchFilterFunction('')}
        placeholder="Type Here..."
        value={this.state.search}
      />

      <FlatList
        data={this.state.articles}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        renderItem = {({ item }) => <Article article = {item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />

    </React.Fragment>
    )
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
