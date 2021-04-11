import React from 'react';
// import { SafeAreaView, StatusBar, View } from 'react-native'
import Navigation from './src/Navigation/Navigation'
// import Connexion from "./src/Screens/Connexion";
// import Compte from "./src/Screens/Compte";
//
// import Login from "./src/Screens/Login";
// import Signup from "./src/Screens/inscription";
// import Recette from "./src/Screens/Recette";

export default function App() {
  return (
      <Navigation/>
      //<Connexion/>
      //<Compte/>
  );
}

/*
import Produit from './src/Screens/Produits'
import Filtres from './src/Components/Filtres' //Filtres
import Compte from './src/Screens/Compte'
import Panier from './src/Screens/Panier'

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
      <Button
        onPress={() => navigation.navigate('Details')}
        title="DetailsScreen"
      />
    </View>
  );
}

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Produit" component={Produit} />
      <MainStack.Screen name="Compte" component={Compte} />
      <MainStack.Screen name="Panier" component={Panier} />
    </MainStack.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Filtres" component={Filtres} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/
