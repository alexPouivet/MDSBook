import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native';
import { Avatar } from 'react-native-elements';
import { BaseRouter } from '@react-navigation/native';

export default class ItemBook extends React.Component {
    
    render() {
        const { navigation, route } = this.props;
        const { book } = route.params;
        
        return (
            <View style={styles.view}>
                <View style={styles.infoItemGlobal}>
                    <Avatar
                        rounded
                        size= "xlarge"
                        source={{
                            uri:
                            book.picture_url,
                        }}
                    />
                    <Text style={styles.title}>{book.title}</Text>
                    <Text style={styles.borrow}>Emprunté le: {book.borrow_date}</Text>
                </View>
                <View style={styles.button}>
                    <Button
                        title="Rendre le livre"
                        onPress={() => navigation.navigate('Rendre',{screen: 'Retourner un livre'})}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: { 
        flex: 1,
        backgroundColor: "#ffffff"
    },
    infoItemGlobal: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        color: "#252639"
    },
    borrow: {
        marginTop: 10,
        color: "#CACACA",
    },
    button: {
        bottom: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
  