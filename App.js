import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Connexion from "./src/Screens/Connexion";
import Aide from "./src/Screens/Aide";
import Compte from "./src/Screens/Compte";

import Recette from './src/Screens/Recette'
import RecetteItem from './src/Components/RecetteItem'

export default function App() {
  return (
<<<<<<< HEAD
    /*<View style={styles.container}>
      <Text>Comme Faisait Grand-Mère !</Text>
      <StatusBar style="auto" />
    </View>*/
      //<Connexion/>
      <Aide/>
      //<Compte/>
=======
    <Recette/>
>>>>>>> origin/valentin
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
