import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet  } from 'react-native';
import { SearchBar } from 'react-native-elements';

// Import getNews from news.js
import { getNews } from './Articles';
import Article from './Articles';

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true, search: '' };
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

  updateSearch = search => {
    this.setState({ search });
    console.log(this.search)
  };

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

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

      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article = {item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />

      </>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
    color:'black',
  }
});
