import React from 'react'
import { StyleSheet, View, Image, TextInput, Button, Text, TouchableOpacity } from 'react-native'
import LoginForm from './LoginForm'

/*
function Login({ navigation }){
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../images/logo.png')}
        />
        <Text style={styles.title}>MDSBook, made in React Native</Text>
      </View>
      <View style={styles.formContainer}>
        <LoginForm navigation={navigation}/>
      </View>
    </View>
  )
}
*/

class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../images/logo.png')}
          />
          <Text style={styles.title}>MDSBook, made in React Native</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigation={this.props.navigation}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#fff',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
})



export default Login