import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function ReturnBookMainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Scanner le livre à retourner"
          onPress={() => navigation.navigate('BarCodeScanner')}
        />
      </View>
    );
  }