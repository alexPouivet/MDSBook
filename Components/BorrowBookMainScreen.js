import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, ScrollView  } from 'react-native';
import { ListItem } from 'react-native-elements'

export default class BorrowBookMainScreen extends React.Component {

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.view}>
        <Text style={styles.title}>Vos livres en cours d'emprunt :</Text>
        <View style={styles.viewItems}>
          <ScrollView style={styles.scrollView}>
            <View>
              {
                list.map((item, i) => (
                  <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: item.picture_url } }}
                    title={item.title}
                    subtitle={
                      <View>
                        <Text>Emprunté le: {item.borrow_date}</Text>
                      </View>
                    }
                    bottomDivide
                    chevron
                    button onPress={() => navigation.navigate('Détails livre', { book: item })}
                  />
                ))
              }
            </View>
          </ScrollView>
        </View>
        <View style={styles.button}>
          <Button
            title="Emprunter un livre"
            onPress={() => navigation.navigate('Emprunter un livre')}
          />
        </View>
      </View>
    );
  }
}

const list = [
  {
    title: 'Livre 1',
    picture_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    borrow_date: '30/06/2020'
  },
  {
    title: 'Livre 2',
    picture_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    borrow_date: '25/05/2020'
  },
  {
    title: 'Livre 3',
    picture_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    borrow_date: '05/06/2020'
  },
  {
    title: 'Livre 4',
    picture_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    borrow_date: '01/07/2020'
  },
]

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    color: "#252639"
  },
  viewItems: {
    height: '75%'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})