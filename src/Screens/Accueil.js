import {FlatList, StyleSheet, Text, TouchableOpacity, View, StatusBar, Icon, Button, Image} from 'react-native'
import ListeRecettes from "../Components/ListeRecettes";
import React from 'react'
import EnTete from "../Components/EnTete";
import BarreDeNavigation from "../Components/BarreDeNavigation";


const DATA = [
    {
        id: 51431543,
        categorie: 'Les Promos',
    },
    {
        id: 5123524,
        categorie: 'Recettes de saison',
    },
    {
        id: 2354326,
        categorie: '',
    },
];


import mami from "../../assets/mami2.png"
export default class Accueil extends React.Component {
    render() {

        this.props.navigation.setOptions({
          headerStyle: {
            backgroundColor: '#F1D397'
          },
          headerLeft: () => (
              <View style={styles.container_headerRight}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate("Accueil")}
                >
                  <Image
                    style={styles.mami}
                    source={mami}
                  />
              </TouchableOpacity>
            </View>
              ),
          headerRight: () => (
              <View style={styles.container_headerRight}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate("Compte")}
                >
                  <Image
                    style={styles.image}
                    source={{uri: 'https://image.flaticon.com/icons/png/128/1077/1077063.png'}}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Panier")}
              >
                <Image
                  style={styles.image}
                  source={{uri: 'https://image.flaticon.com/icons/png/512/833/833314.png'}}
                />
            </TouchableOpacity>
            </View>
              ),
        });

        return (
            <View style={styles.mainConteneur}>
                <StatusBar
                  animated={true}
                  backgroundColor="white"
                  barStyle='dark-content'
                  showHideTransition='fade'
                  hidden= {false}
                />
                <EnTete></EnTete>
                <FlatList data={DATA}
                          keyExtractor={(item) => item.id.toString()}
                          renderItem={({item}) => <ListeRecettes categorie={item.categorie}/>}
                />
            </View>
        )
    }
}

const widthAddIcons = 30;
const styles = StyleSheet.create({
  container_headerRight:  {
    flexDirection: 'row',
  },
  image: {
    width: widthAddIcons,
    height: widthAddIcons,
    marginRight: 20,
  },
  mami: {
    width: 40,
    height: 40,
    marginLeft: 20,

  },
    mainConteneur: {
        flexDirection: 'column',
        flex: 1,
    },

    BarreDeNavigation: {
        backgroundColor: '#000000',
    },
})
