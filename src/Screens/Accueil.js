
import {ScrollView, StyleSheet, View} from 'react-native'
import ListeRecettes from "../Components/ListeRecettes";
import React from 'react'
import EnTete from "../Components/EnTete";


export default class Accueil extends React.Component {

    render() {

        return (
            <View style={styles.mainConteneur}>

                <EnTete></EnTete>

                <ScrollView style={styles.CategorieDeListe}>
                    <ListeRecettes titre='Mes recettes'/>

                    <ListeRecettes titre='Coups de coeurs'/>

                    <ListeRecettes titre='Nouvelles recettes'/>

                    <ListeRecettes titre='Promotion'/>
                </ScrollView>

                <View style={styles.BarreDeNavigation}/>

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
        height: 80,
        backgroundColor: '#000000',
    },
})


export default class Accueil extends React.Component {


}