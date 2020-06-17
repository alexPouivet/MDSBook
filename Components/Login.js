import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity } from 'react-native'

class Login extends React.Component {

    constructor(props){
        super(props)
    }

        _displayHome = () => {
          this.props.navigation.navigate("Home")
    }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput placeholder = "Email" autoCompleteType = "email"></TextInput>
        <TextInput placeholder = "Mot de passe" secureTextEntry = {true}></TextInput>
        <View style={styles.button_container}>
            <TouchableOpacity onPress={this._displayHome}>
                <Text>Se connecter</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  button_container: {

  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Login