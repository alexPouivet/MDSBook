import React from 'react'
import { StyleSheet, View, Image, TextInput, Button, Text, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

class AccountMainScreen extends React.Component {

  render() {
    const { navigation } = this.props;

    
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
        </View>
        <View style={styles.listItem}>
            <ListItem
              title="Informations"
              bottomDivide
              chevron
              button onPress={() => navigation.navigate('Informations', { user: user})}
            />
            <ListItem
              title="Paramètres"
              bottomDivide
              chevron
              button onPress={() => navigation.navigate('Paramètres')}
            />
        </View>
        <LogoutButton/>
      </View>
    )
  }
}

function LogoutButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.button}>
      <Button
        title="Se déconnecter"
        // Erreur lors de la redirection
        /*onPress={() => navigation.navigate("Login")}*/
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
  listItem: {
    height: "48.7%",
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})



export default AccountMainScreen

const user = {
    name: 'John Doe',
    picture_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    email: "john-doe@my-digital-school.com",
    password: "passwordNicolas"
}