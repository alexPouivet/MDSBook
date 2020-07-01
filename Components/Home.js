import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Settings from './Settings'
import { BarCodeScanner } from 'expo-barcode-scanner';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab Navigator Menu
export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Emprunter') {
              return (
                <Ionicons
                  name='ios-book'
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Rendre') {
              return (
                <Ionicons
                  name='ios-return-left'
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Ajouter') {
              return (
                <Ionicons
                  name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Paramètres') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3498db',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Emprunter" component={BorrowBookScreen} />
        <Tab.Screen name="Rendre" component={ReturnBookScreen} />
        <Tab.Screen name="Ajouter" component={AddBookScreen} />
        <Tab.Screen name="Paramètres" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Borrow Books Screens Stack Navigator
function BorrowBookScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BarCode" component={BorrowBookMainScreen} />
      <Stack.Screen name="BarCodeScanner" component={BarCodeScannerScreen} />
    </Stack.Navigator>
  );
}

function BorrowBookMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Scanner le livre à emprunter"
        onPress={() => navigation.navigate('BarCodeScanner')}
      />
    </View>
  );
}

// Return Books Screens Stack Navigator
function ReturnBookScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BarCode" component={ReturnBookMainScreen} />
      <Stack.Screen name="BarCodeScanner" component={BarCodeScannerScreen} />
    </Stack.Navigator>
  );
}

function ReturnBookMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Scanner le livre à retourner"
        onPress={() => navigation.navigate('BarCodeScanner')}
      />
    </View>
  );
}

// Add Books Screens Stack Navigator
function AddBookScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BarCode" component={AddBookMainScreen} />
      <Stack.Screen name="BarCodeScanner" component={BarCodeScannerScreen} />
    </Stack.Navigator>
  );
}

function AddBookMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Nom du livre à ajouter"
        style={styles.input} 
        />
      <Button
        title="Scanner le livre à retourner"
        onPress={() => navigation.navigate('BarCodeScanner')}
      />
    </View>
  );
}

// Settings Screens
function SettingsScreen() {
  return (
    <View>
      <Settings/>
    </View>
  );
}

// BarCodeScanner Screen function
function BarCodeScannerScreen () {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Type de code barre: ${type}, numéro de code barre: ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Demande d'accès à la caméra</Text>;
  }
  if (hasPermission === false) {
    return <Text>La demande à été rejetée</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Scanner à nouveau'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.9)',
      marginBottom: 10,
      color: '#fff',
      paddingHorizontal: 50
  },
})