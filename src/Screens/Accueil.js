import {FlatList, StyleSheet, Text, TouchableOpacity, View, StatusBar, Icon, Button, Image, ImageBackground, ScrollView} from 'react-native'
import ListeRecettes from "../Components/ListeRecettes";
import React from 'react'
import pattern2_travers from "../image/Patern2_travers2.png";

const DATA = [
    {
        id: 51431543,
        titre: 'Découverte',
        option: 'random'
    },
    {
        id: 5123524,
        titre: 'Recettes Végétariennes',
        option: 'Vegetarian'
    },
    {
        id: 2354326,
        titre: 'Breakfast',
        option: 'Breakfast'
    },
];

export default class Accueil extends React.Component {
  render() {
    return (
      <ImageBackground source={pattern2_travers} style={styles.backgroudImage}>
        <ScrollView style={styles.mainConteneur}>
            <StatusBar
              animated={true}
              backgroundColor="white"
              barStyle='dark-content'
              showHideTransition='fade'
              hidden= {false}
            />
            <Text style={styles.phraseHello}> Au fourneau les enfants !</Text>
            <FlatList
              style={styles.flatListeRecette}
              data={DATA}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <ListeRecettes item={item} navigation={this.props.navigation}/>}
            />
        </ScrollView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    mainConteneur: {
        flexDirection: 'column',
        flex: 1,
    },
    backgroudImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    phraseHello: {
      textAlign: "center",
      fontSize: 15,
      marginTop: 50
    },
    flatListeRecette: {
      paddingTop: 50,
    }
})
