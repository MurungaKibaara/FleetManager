import React, { PureComponent  } from 'react'
import { View, StyleSheet, TouchableOpacity,Linking, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Button, Card, Divider } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import moment from 'moment';

const API_KEY = '5492e85c83de4582967dcde0406146c9'

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5492e85c83de4582967dcde0406146c9"

export const getNews = async() => {
  let result = await fetch(url).then(response => response.json());
  // console.log(result)
  return result.articles;
}

class Articles extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
     check : false,
     uri : null
      }
   }

  _onNavigationStateChange = navState => {
    this.setState({uri: url})
  };

 renderWebView(){
   const { title, description, publishedAt, source, urlToImage, url } = this.props.article;
   const { noteStyle, featuredTitleStyle } = styles;

   const time = moment(publishedAt || moment.now()).fromNow();
   const defaultImg =
     'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

   if(this.state.check){
     return(
         <WebView
            source={{uri: url}}
            style={{marginTop: 20}}
            automaticallyAdjustContentInsets={false}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            target="_blank"
            useWebKit={true}
            onNavigationStateChange={this._onNavigationStateChange.bind(this)}
          />
       );
     } else {
        return(

          // <TouchableOpacity onPress={()=>this.setState({check: true})}>
            <TouchableNativeFeedback useForeground onPress={() => Linking.openURL(url)} >
              <>
                <Card featuredTitle={title} featuredTitleStyle = {featuredTitleStyle} image={{ uri: urlToImage || defaultImg }} >
                  <Text style={{ marginBottom: 10 }}> {description || 'Read More..'}</Text>
                  <Divider style={{ backgroundColor: '#dfe6e9' }} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
                    <Text style={noteStyle}>{time}</Text>
                  </View>
                </Card>
              </>
            </TouchableNativeFeedback>
        );
      }
    }

    render() {
       return (
         <View style={{flex:1}}>
          {this.renderWebView()}
         </View>
       );
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

  addExpensesButton:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height:50,
    backgroundColor:'#fff',
    borderRadius:100,

  },

  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },

  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
});

export default Articles;
