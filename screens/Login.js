import React, { Component } from 'react';
import { AsyncStorage, Text, StyleSheet, View, Button, TextInput, TouchableOpacity, Image } from 'react-native'
import * as SecureStore from 'expo-secure-store'; //Secure than as Async storage, encrypts data
import { logo } from '../images/logo.svg';

class Login extends Component {
  state = {
    email: '',
    password: '',
    auth_token: ''
  }
  handleEmailChange = email => {
    this.setState({ email })
  }
  handlePasswordChange = password => {
    this.setState({ password })
  }

  onLogin = async () => {
    const { email, password } = this.state
    try {
      if (email.length > 0 && password.length > 0) {

        async function requestAuthToken() {

          const url = 'https://facebook.github.io/react-native/movies.json'

          const options = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              // 'Authorization': 'JWT '+<token> // There will be different type of authorization like Bearer, JWT, Basic
            },
            body: JSON.stringify({
              username: this.state.email,
              password: this.state.password
            }),
          }

          try {

            let response = await fetch(url, options);
            let responseJson = await response.json();
            //Consider setToken {Auth_token} via state

            const setToken = async (token) => {
              await SecureStore.setItemAsync('secure_token', token);
              };

              setToken(responseJson.jwt['auth_token']);

            return responseJson.auth_token;

          } catch (error) {
            console.error(error);
          }
        }

        // Add Token authentication here
        const setToken = async (token) => {
          await SecureStore.setItemAsync('secure_token', token);
          };

          const getToken = async () => {
              return await SecureStore.getItemAsync('secure_token');
          };

          setToken('#your_secret_token');  // Value from server response
          getToken().then(token => console.log(token));
          // output '#your_secret_token'

        this.props.navigation.navigate('App')
      }
    } catch (error) {
      alert(error)
    }
  }
  goToSignup = () => this.props.navigation.navigate('Signup')
  render() {
    const { email, password } = this.state
    return (
      <View style={styles.container}>

      <Image source={ logo }/>

        <Text style={styles.logo}>Fleetio</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            name="email"
            value={email}
            placeholderTextColor="#003f5c"
            placeholder="Enter email"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            name="password"
            value={password}
            placeholderTextColor="#003f5c"
            placeholder="Enter password"
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} title="Login" onPress={this.onLogin}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.goToSignup} >
          <Text style={styles.loginText}> Don't have an account yet? Signup</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImage:{
   width:320,
   height:480,
 },

 logo:{
       fontWeight:"bold",
       fontSize:45,
       color:"white",
       marginBottom:40
   },

   inputView:{
       width:"80%",
       backgroundColor:"white",
       borderRadius:25,
       height:50,
       marginBottom:20,
       justifyContent:"center",
       padding:20
   },

     inputText:{
        height:50,
        color:"black"
    },

    forgot:{
      color:"white",
      fontSize:11,
      paddingBottom: 15,
  },
    loginBtn:{
      width:"80%",
      backgroundColor:"#8a0813",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
     color:"white"
 }
})

export default Login
