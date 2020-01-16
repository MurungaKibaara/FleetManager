import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

class Signup extends Component {

  gotoLogin= () => this.props.navigation.navigate('Login')

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleNameChange = email => {
    this.setState({ email })
  }

  handleEmailChange = name => {
    this.setState({ name })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }


  onSignup = async () => {
    const { name, email, password } = this.state
    try {
      if (email.length > 0 && password.length > 0 && name.length > 0) {

        async function signUpNewUser() {

                const url = 'https://facebook.github.io/react-native/movies.json'

                const options = {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      // 'Authorization': 'JWT '+<token> // There will be different type of authorization like Bearer, JWT, Basic
                    },
                    body: JSON.stringify({
                      name: this.state.name,
                      email: this.state.email,
                      password: this.state.password
                    }),
                  }

                try {

                  let response = await fetch(url, options);
                  let responseJson = await response.json();
                  return responseJson.status;

                } catch (error) {
                  console.error(error);
                }
            }
          }
    }

    catch (error) {
      alert(error)
    }
}


  render() {
      return (

        <View style = {styles.container}>

            <Text style={styles.logo}>Sign up</Text>

            <View style={styles.inputView}>

              <TextInput
                style={styles.inputText}
                name="name"
                value={name}
                placeholderTextColor="#003f5c"
                placeholder="Company name"
                autoCapitalize="none"
                onChangeText={this.handleNameChange}
              />
            </View>

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
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={this.gotoLogin} >
              <Text style={styles.loginText}> Already have an account? Login</Text>
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

export default Signup;
