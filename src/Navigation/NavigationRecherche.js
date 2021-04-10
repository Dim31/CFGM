//NavigationRecherche.js

import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator, Dimensions, Picker} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Recette from '../Screens/Recette'
import Produit from '../Screens/Produits'


const Stack = createStackNavigator();


function RecetteScreen(props) {
  return (
    <Recette navigation={props.navigation} /> // props.navigation pour naviger depuis le navigator parent
  );
}

function ProduitScreen() {
  return (
    <Produit/>
  );
}


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
                      style: { backgroundColor: '#d4ccc0' },
                      indicatorStyle: { backgroundColor: '#817975'},
    }}>
      <Tab.Screen name="Recette" component={RecetteScreen} />
      <Tab.Screen name="Produit" component={ProduitScreen} />
    </Tab.Navigator>

  );
}
