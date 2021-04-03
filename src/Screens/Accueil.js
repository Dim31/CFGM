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


export default class Accueil extends React.Component {
    render() {
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

const styles = StyleSheet.create({
    mainConteneur: {
        flexDirection: 'column',
        flex: 1,
    },

    BarreDeNavigation: {
        backgroundColor: '#000000',
    },
})
