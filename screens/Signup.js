import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

class Signup extends Component {
  gotoLogin= () => this.props.navigation.navigate('Login')

  render() {
      return (

        <View style = {styles.container}>

            <Text style={styles.logo}>Sign Up</Text>

            <View style={styles.inputView}>

              <TextInput
                style={styles.inputText}
                name="company"
                // value={email}
                placeholderTextColor="#003f5c"
                placeholder="Company name"
                autoCapitalize="none"
                // onChangeText={this.handleEmailChange}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                name="email"
                // value={email}
                placeholderTextColor="#003f5c"
                placeholder="Enter email"
                autoCapitalize="none"
                // onChangeText={this.handleEmailChange}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                name="password"
                // value={password}
                placeholderTextColor="#003f5c"
                placeholder="Enter password"
                secureTextEntry
                // onChangeText={this.handlePasswordChange}
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
    backgroundColor: '#519468',
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
      backgroundColor:"green",
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#003f5c',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//
//   backgroundImage:{
//    width:320,
//    height:480,
//  },
//
//  logo:{
//        fontWeight:"bold",
//        fontSize:45,
//        color:"#fb5b5a",
//        marginBottom:40
//    },
//
//    inputView:{
//        width:"80%",
//        backgroundColor:"#465881",
//        borderRadius:25,
//        height:50,
//        marginBottom:20,
//        justifyContent:"center",
//        padding:20
//    },
//
//      inputText:{
//         height:50,
//         color:"white"
//     },
//
//     forgot:{
//       color:"white",
//       fontSize:11,
//       paddingBottom: 15,
//   },
//     loginBtn:{
//       width:"80%",
//       backgroundColor:"#fb5b5a",
//       borderRadius:25,
//       height:50,
//       alignItems:"center",
//       justifyContent:"center",
//       marginTop:40,
//       marginBottom:10
//     },
//     loginText:{
//      color:"white"
//  }
// })

export default Signup;
