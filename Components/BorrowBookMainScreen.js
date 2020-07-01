import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function BorrowBookMainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Scanner le livre à emprunter"
          onPress={() => navigation.navigate('BarCodeScanner')}
        />
      </View>
    );
  }