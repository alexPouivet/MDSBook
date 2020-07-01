import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function AddBookMainScreen({ navigation }) {
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

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.9)',
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 50
    },
})