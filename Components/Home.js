import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import BorrowBookMainScreen from './BorrowBookMainScreen'
import ItemBook from './ItemBook'
import ReturnBookMainScreen from './ReturnBookMainScreen'
import AddBookMainScreen from './AddBookMainScreen'
import AccountMainScreen from './AccountMainScreen'
import InformationsScreen from './InformationsScreen'
import ParametersScreen from './ParametersScreen'
import BarCodeScannerScreen from './BarCodeScannerScreen'

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
            else if (route.name === 'Compte') {
              return (
                <Ionicons
                  name='md-person'
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
        <Tab.Screen name="Compte" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Borrow Books Screens Stack Navigator
function BorrowBookScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page emprunter un livre" component={BorrowBookMainScreen} />
      <Stack.Screen name="Emprunter un livre" component={BarCodeScannerScreen} />
      <Stack.Screen name="Détails livre" component={ItemBook} />
    </Stack.Navigator>
  );
}

// Return Books Screens Stack Navigator
function ReturnBookScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page rendre un livre" component={ReturnBookMainScreen} />
      <Stack.Screen name="Retourner un livre" component={BarCodeScannerScreen} />
    </Stack.Navigator>
  );
}

// Add Books Screens Stack Navigator
function AddBookScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page Ajouter un livre" component={AddBookMainScreen} />
      <Stack.Screen name="Ajouter un livre" component={BarCodeScannerScreen} />
    </Stack.Navigator>
  );
}

// Settings Screens
function AccountScreen() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Mon compte" component={AccountMainScreen} />
    <Stack.Screen name="Informations" component={InformationsScreen} />
    <Stack.Screen name="Paramètres" component={ParametersScreen} />
  </Stack.Navigator>
  );
}