import * as React from 'react'
import { StyleSheet, View, Image, TextInput, Button, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements';

class InformationsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailInput: this.props.route.params.user.email,
      passwordInput: this.props.route.params.user.password,
      editable: false,
    };
    this.toggleEditable = this.toggleEditable.bind(this)
  }
  toggleEditable() {
    this.setState({
      editable: !this.state.editable
    })
  }

  render() {
    const { route } = this.props
    const { user } = route.params

    return (
      <View style={styles.container}>
        <View style={styles.infoUserGlobal}>
            <Avatar
                rounded
                size= "large"
                source={{
                    uri:
                    user.picture_url,
                }}
            />
            <Text style={styles.title}>{user.name}</Text>
            <View style={styles.itemInput}>
              <Text style={styles.label}>Email: </Text>
              <TextInput
                  style={styles.input} 
                  placeholder="email"
                  value={this.state.emailInput}
                  onChangeText={emailInput =>
                      this.setState({ emailInput })
                  }
                  ref={input => {
                      this.textInput = input;
                  }}
                  returnKeyType="go"
                  editable={this.state.editable}
              />
            </View>
            <View style={styles.itemInput}>
              <Text style={styles.label}>Mot de passe: </Text>
              <TextInput
                  style={styles.input} 
                  placeholder="Mot de passe"
                  secureTextEntry
                  value={this.state.passwordInput}
                  onChangeText={passwordInput =>
                      this.setState({ passwordInput })
                  }
                  ref={input => {
                      this.textInput = input;
                  }}
                  returnKeyType="go"
                  editable={this.state.editable}
              />
            </View> 
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  infoUserGlobal: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    color: "#252639"
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: 'rgba(192,192,192,0.2)',
    marginBottom: 10,
    color: 'grey',
    paddingHorizontal: 10
  },
  label: {
    marginBottom: 10,
  },
  itemInput: {
    marginTop: 20
  }
})



export default InformationsScreen

const user = [
  {
    name: 'Nicolas Test',
    picture_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    email: "nicolas-test@my-digital-school.com",
    password: "passwordNicolas"
  },
]