import React from 'react'
import { StyleSheet, View, Button, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Home extends React.Component {

    _displayLogin = () => {
      this.props.navigation.navigate("Login")
  }

    _displayBarCodeScanner = () => {
      this.props.navigation.navigate("BarCodeScanner")
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Home</Text>

        <TouchableOpacity onPress={this._displayBarCodeScanner}>
            <Text>Scanner un livre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._displayLogin}>
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  }
})

export default Home