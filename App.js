import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Accueil from "./src/Screens/Accueil";
import Nav from "./src/Navigation/Navigation";
// import Aide from "./src/Screens/Aide";
// import Compte from "./src/Screens/Compte";
// import Connexion from "./src/Screens/Connexion";
// import Panier from "./src/Screens/Panier";
// import Produits from "./src/Screens/Produits";
// import Recette from "./src/Screens/Recette";


export default function App() {
    return (

                <Nav/>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
});
