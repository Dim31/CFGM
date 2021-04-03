import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import Accueil from '../Screens/Accueil'
import Compte from '../Screens/Compte'
import Panier from '../Screens/Panier'
import Recette from '../Screens/Recette'
import Produit from '../Screens/Produits'
import Recherche from '../Screens/Recherche'
import RecetteDetails from '../Screens/RecetteDetails'

import { HeaderBackButton } from '@react-navigation/stack';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, Button, Image} from 'react-native'
import { withNavigation } from 'react-navigation';

// Accueil : Les vues dont on a besoin pour la page (sous menues compris)
const AccueilStack = createStackNavigator();
function AccueilStackScreen() {
 return (
   <AccueilStack.Navigator>
      <AccueilStack.Screen
        name="CFGM"
        component={Accueil}
        options={optionsTopMenu}
      />
      <AccueilStack.Screen name="Compte" component={Compte} />
      <AccueilStack.Screen name="Panier" component={Panier} />
   </AccueilStack.Navigator>
  );
}

// Panier : Les vues dont on a besoin pour la page (sous menues compris)
const ProduitStack = createStackNavigator();
function ProduitStackScreen() {
 return (
   <ProduitStack.Navigator>
      <ProduitStack.Screen
        name="Produit"
        component={Produit}
        options={optionsTopMenu}
      />
      <AccueilStack.Screen name="Compte" component={Compte} />
      <AccueilStack.Screen name="Panier" component={Panier} />
   </ProduitStack.Navigator>
  );
}

// Recettes : Les vues dont on a besoin pour la page (sous menues compris)
const RecetteStack = createStackNavigator();
function RecetteStackScreen() {
  return (
    <RecetteStack.Navigator>
      <RecetteStack.Screen
        name="Recette"
        component={Recette}
        options={optionsTopMenu}
      />
      <AccueilStack.Screen name="Compte" component={Compte} />
      <AccueilStack.Screen name="Panier" component={Panier} />
      <RechercheStack.Screen name="RecetteDetails" component={RecetteDetails}/ >
    </RecetteStack.Navigator>
  );
}

// Recherche : Les vues dont on a besoin pour la page (sous menues compris)
const RechercheStack = createStackNavigator();
function RechercheStackScreen() {
  return (
    <RechercheStack.Navigator>
      <RechercheStack.Screen
        name="Recherche"
        component={Recherche}
        options={optionsTopMenu}
      />
      <AccueilStack.Screen name="Compte" component={Compte} />
      <AccueilStack.Screen name="Panier" component={Panier} />
      <RechercheStack.Screen name="RecetteDetails" component={RecetteDetails}/ >
    </RechercheStack.Navigator>
  );
}


// Bottom Nav
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
           let iconName;
           if (route.name === 'Accueil') {
              iconName = focused
              ? 'home-outline'
              : 'home-outline';
            } else if (route.name === 'Recettes') {
              iconName = focused
              ? 'NaN'
              : 'NaN'; //basket-outline
            } else if (route.name === 'Produits') {
              iconName = focused
              ? 'NaN'
              : 'NaN'; //person-outline
            } else if (route.name === 'Recherche') {
              iconName = focused
              ? 'search-outline'
              : 'search-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#293845',
          },
        }}>
        <Tab.Screen name="Accueil" component={AccueilStackScreen} />
        <Tab.Screen name="Recettes" component={RecetteStackScreen} />
        <Tab.Screen name="Produits" component={ProduitStackScreen} />
        <Tab.Screen name="Recherche" component={RechercheStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Options Top Menu
import mami from "../../assets/mami2.png"
let optionsTopMenu = ({ navigation, route }) => ({
  headerStyle: {
    backgroundColor: '#F1D397'
  },
  headerLeft: () => (
      <View style={styles.container_headerRight}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Accueil")}
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
          onPress={() => navigation.navigate("Compte")}
        >
          <Image
            style={styles.image}
            source={{uri: 'https://image.flaticon.com/icons/png/128/1077/1077063.png'}}
          />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Panier")}
      >
        <Image
          style={styles.image}
          source={{uri: 'https://image.flaticon.com/icons/png/512/833/833314.png'}}
        />
    </TouchableOpacity>
    </View>
      ),
    });

// Styles
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
