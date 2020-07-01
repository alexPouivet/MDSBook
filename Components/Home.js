import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Settings from './Settings'
import BorrowBookMainScreen from './BorrowBookMainScreen'
import BarCodeScannerScreen from './BarCodeScannerScreen'
import ReturnBookMainScreen from './ReturnBookMainScreen'
import AddBookMainScreen from './AddBookMainScreen'

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

// Return Books Screens Stack Navigator
function ReturnBookScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BarCode" component={ReturnBookMainScreen} />
      <Stack.Screen name="BarCodeScanner" component={BarCodeScannerScreen} />
    </Stack.Navigator>
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

// Settings Screens
function SettingsScreen() {
  return (
    <View>
      <Settings/>
    </View>
  );
}