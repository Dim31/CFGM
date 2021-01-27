import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Accueil from "./src/Screens/Accueil";
import Aide from "./src/Screens/Aide";
import Compte from "./src/Screens/Compte";
import Connexion from "./src/Screens/Connexion";
import Panier from "./src/Screens/Panier";
import Produits from "./src/Screens/Produits";
import Recette from "./src/Screens/Recette";



export default function App() {
  return (
      <Accueil/>
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
