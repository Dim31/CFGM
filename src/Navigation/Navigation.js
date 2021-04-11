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
import Filtres from '../Components/Filtres' //Filtres

import { HeaderBackButton } from '@react-navigation/stack';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, Button, Image, ImageBackground, StatusBar} from 'react-native'
import { withNavigation } from 'react-navigation';

import backgroundImage from '../image/Patern2_travers2.png';
import icon_accueil from '../image/icon_accueil.png';
import icon_toc from '../image/icon_toc.png';
import icon_carotte from '../image/icon_carotte.png';
import icon_rechercher from '../image/icon_rechercher.png';
import icon_profil from '../image/icon_profil.png';
import icon_panier from '../image/icon_panier.png';

import icon_accueil_white from '../image/icon_accueil_white.png';
import icon_toc_white from '../image/icon_toc_white.png';
import icon_carotte_white from '../image/icon_carotte_white.png';
import icon_rechercher_white from '../image/icon_rechercher_white.png';

// Pour utiliser mode:modal que sur filtres on créer un main nav
  // Produit :
const ProduitMainStack = createStackNavigator();
function ProduitMainStackScreen() {
  return (
    <ProduitMainStack.Navigator>
      <ProduitMainStack.Screen name="Produit" component={Produit} options={optionsTopMenuMain} />
      <ProduitMainStack.Screen name="Compte" component={Compte} options={optionsTopMenuSub} />
      <ProduitMainStack.Screen name="Panier" component={Panier} options={optionsTopMenuSub} />
    </ProduitMainStack.Navigator>
  );
}

  // Recette :
const RecetteMainStack = createStackNavigator();
function RecetteMainStackScreen() {
  return (
    <RecetteMainStack.Navigator>
      <RecetteMainStack.Screen name="Recette" component={Recette} options={optionsTopMenuMain} />
      <RecetteMainStack.Screen name="Compte" component={Compte} options={optionsTopMenuSub} />
      <RecetteMainStack.Screen name="Panier" component={Panier} options={optionsTopMenuSub} />
      <RecetteStack.Screen name="RecetteDetails" component={RecetteDetails} options={optionsTopMenuSub} />
    </RecetteMainStack.Navigator>
  );
}


// Les vues dont on a besoin pour la page (sous menues compris)
  // Accueil :
const AccueilStack = createStackNavigator();
function AccueilStackScreen() {
  return (
      <AccueilStack.Navigator>
      {/*screenOptions={{ cardStyle: { backgroundColor: 'transparent' }, }}*/}
        <AccueilStack.Screen name="CFGM" component={Accueil} options={optionsTopMenuMain} />
        <AccueilStack.Screen name="Compte" component={Compte} options={optionsTopMenuSub}/>
        <AccueilStack.Screen name="Panier" component={Panier} options={optionsTopMenuSub} />
        <AccueilStack.Screen name="RecetteDetails" component={RecetteDetails} options={optionsTopMenuSub}/ >
      </AccueilStack.Navigator>
  );
}

  // Produit :
const ProduitStack = createStackNavigator();
function ProduitStackScreen() {
  return (
    <ProduitStack.Navigator mode="modal" >
      <ProduitStack.Screen name="Produits" component={ProduitMainStackScreen} options={{headerShown: false}} />
      <ProduitStack.Screen name="Filtres" component={Filtres} options={optionsTopMenuSub} />
    </ProduitStack.Navigator>
  );
}

  // Recettes :
const RecetteStack = createStackNavigator();
function RecetteStackScreen() {
  return (
    <RecetteStack.Navigator mode="modal">
      <RecetteStack.Screen name="Recettes" component={RecetteMainStackScreen} options={{headerShown: false}} />
      <RecetteStack.Screen name="Filtres" component={Filtres} options={optionsTopMenuSub} />
    </RecetteStack.Navigator>
  );
}

  // Recherche :
const RechercheStack = createStackNavigator();
function RechercheStackScreen() {
  return (
      <RechercheStack.Navigator>
        <RechercheStack.Screen name="Recherche" component={Recherche} options={optionsTopMenuMain} />
        <RechercheStack.Screen name="Compte" component={Compte} options={optionsTopMenuSub} />
        <RechercheStack.Screen name="Panier" component={Panier} options={optionsTopMenuSub} />
        <RechercheStack.Screen name="RecetteDetails" component={RecetteDetails} options={optionsTopMenuSub} />
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
              ? icon_accueil_white
              : icon_accueil
            } else if (route.name === 'Recettes') {
              iconName = focused
              ? icon_toc_white
              : icon_toc //basket-outline
            } else if (route.name === 'Produits') {
              iconName = focused
              ? icon_carotte_white
              : icon_carotte //person-outline
            } else if (route.name === 'Recherche') {
              iconName = focused
              ? icon_rechercher_white
              : icon_rechercher
            }
            return <Image style={{ width: size, height: size }} source={iconName} />
            //<Ionicons name={iconName} size={size} color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
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
let optionsTopMenuMain = ({ navigation, route }) => ({
  cardStyle: {
    //backgroundColor: "blue",
  },
  headerStyle: {
    backgroundColor: '#F1D397',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 8,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5,
    elevation: 14,
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
            source={icon_profil}
          />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Panier")}
      >
        <Image
          style={styles.image}
          source={icon_panier}
        />
    </TouchableOpacity>
    </View>
  ),
});

let optionsTopMenuSub = ({ navigation, route }) => ({
  cardStyle: {
    //backgroundColor: "blue",
  },
  headerStyle: {
    backgroundColor: '#F1D397',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 8,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5,
    elevation: 14,
  },
});


let optionsTopMenuHidden = ({ navigation, route }) => ({
  headerShown: false,
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
  backgroudImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
})
