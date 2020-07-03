import React, { useState } from 'react'
import { StyleSheet, View, Image, TextInput, Button, Text, TouchableOpacity, Switch } from 'react-native'


function ParametersScreen({ navigation }){

  const [isEnabledNotification, setIsEnabledNotification] = useState(false);
  const [isEnabledCamera, setIsEnabledCamera] = useState(false);
  const toggleSwitchNotification = () => setIsEnabledNotification(previousState => !previousState);
  const toggleSwitchAccessCamera = () => setIsEnabledCamera(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Paramètres de l'application</Text>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.switchButton}>
          <Text style={styles.textSwitch}>Autoriser les notifications push</Text>
          <Switch
            trackColor={{ false: "grey", true: "grey" }}
            thumbColor={isEnabledNotification ? "#3498db" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchNotification}
            value={isEnabledNotification}
          />
        </View>
        <View style={styles.switchButton}>
          <Text style={styles.textSwitch}>Accès à la caméra</Text>
          <Switch
            trackColor={{ false: "grey", true: "grey" }}
            thumbColor={isEnabledCamera ? "#3498db" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchAccessCamera}
            value={isEnabledCamera}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerTitle: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  containerMain: {
    marginTop: 50
  },
  switchButton: {
    flexDirection: "row",
    marginLeft: 50,
    marginBottom: 10,
  },
  textSwitch: {
    width: 250,
    fontSize: 15,
    textAlignVertical: "center"
  }
})



export default ParametersScreen

const user = [
  {
    name: 'Nicolas Test',
    picture_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    email: "nicolas-test@my-digital-school.com",
    password: "passwordNicolas"
  },
]