import React from 'react'
import { StyleSheet, View, Image, TextInput, Button, Text, TouchableOpacity } from 'react-native'

class LoginForm extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                placeholder="email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                keyboardType="email-address"
                style={styles.input} 
                />
                <TextInput 
                placeholder="mot de passe"
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry
                style={styles.input} 
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("Home")}>
                    <Text style={styles.buttonText}>SE CONNECTER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 10,
      color: '#fff',
      paddingHorizontal: 10
  },
  buttonContainer: {
      backgroundColor: '#2980b9',
      paddingVertical: 15
  },
  buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
  }
})



export default LoginForm