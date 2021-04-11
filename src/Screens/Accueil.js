import {FlatList, StatusBar, StyleSheet, View} from 'react-native'
import ListeRecettes from "../Components/ListeRecettes";
import React from 'react'

const DATA = [
    {
        id: 51431543,
        titre: 'Découverte',
        option: 'random'
    },
    {
        id: 5123524,
        titre: 'Recettes Végétarienne',
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
            <View style={styles.mainConteneur}>
                <StatusBar
                    animated={true}
                    backgroundColor="white"
                    barStyle='dark-content'
                    // showHideTransition='fade'
                    hidden={false}
                />


                <FlatList data={DATA}
                          keyExtractor={(item) => item.id.toString()}
                          renderItem={({item}) =>
                              <ListeRecettes item={item}/>}
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
