import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import Accueil from '../Screens/Accueil'
import Panier from '../Screens/Panier'
import Compte from '../Screens/Compte'
import Recherche from '../Screens/RechercheV2'
import RecetteDetails from '../Screens/RecetteDetails'


// Accueil : Les vues dont on a besoin pour la page (sous menues compris)
const AccueilStack = createStackNavigator();
function AccueilStackScreen() {
 return (
   <AccueilStack.Navigator>
    <AccueilStack.Screen name="Comme faisait Grand-mère" component={Accueil} />
   </AccueilStack.Navigator>
  );
}

// Panier : Les vues dont on a besoin pour la page (sous menues compris)
const PanierStack = createStackNavigator();
function PanierStackScreen() {
 return (
   <PanierStack.Navigator>
      <PanierStack.Screen name="Panier" component={Panier} />
   </PanierStack.Navigator>
  );
}

// Comtpe : Les vues dont on a besoin pour la page (sous menues compris)
const CompteStack = createStackNavigator();
function CompteStackScreen() {
  return (
    <CompteStack.Navigator>
      <CompteStack.Screen name="Compte" component={Compte} />
    </CompteStack.Navigator>
  );
}

// Recherche : Les vues dont on a besoin pour la page (sous menues compris)
const RechercheStack = createStackNavigator();
function RechercheStackScreen() {
  return (
    <RechercheStack.Navigator>
      <RechercheStack.Screen name="Recherche" component={Recherche} />
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
            } else if (route.name === 'Panier') {
              iconName = focused
              ? 'basket-outline'
              : 'basket-outline';
            } else if (route.name === 'Compte') {
              iconName = focused
              ? 'person-outline'
              : 'person-outline';
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
        }}>
        <Tab.Screen name="Accueil" component={AccueilStackScreen} />
        <Tab.Screen name="Panier" component={PanierStackScreen} />
        <Tab.Screen name="Compte" component={CompteStackScreen} />
        <Tab.Screen name="Recherche" component={RechercheStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
