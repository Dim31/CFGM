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
      // options={({ navigation, route }) => ({
      //     headerTitle: props => <Text>hello</Text>,
      //   })}
      // options={{
      //   headerLeft: ({ props }) => (
      //     <HeaderBackButton
      //       {...props}
      //       onPress={() => {
      //         // Do something
      //       }}
      //     />
      //   ),
      //   headerRight: () => (
      //     <View style={styles.container_headerRight}>
      //       <TouchableOpacity
      //         //style={styles.button}
      //         onPress={() => {
      //
      //         }}
      //       >
      //         <Image
      //           style={styles.image}
      //           source={{uri: 'https://image.flaticon.com/icons/png/128/1077/1077063.png'}}
      //         />
      //     </TouchableOpacity>
      //     <TouchableOpacity
      //       //style={styles.button}
      //       //onPress={() => navigation.navigate('Compte')}
      //       //onPress={() => navigate('Compte')}
      //       onPress={() => navigation.navigate("Compte")}
      //     >
      //       <Image
      //         style={styles.image}
      //         source={{uri: 'https://image.flaticon.com/icons/png/512/833/833314.png'}}
      //       />
      //   </TouchableOpacity>
      //   </View>
      //     ),
      // }}
      />
      <AccueilStack.Screen name="Compte" component={Compte} />
      <AccueilStack.Screen name="Panier" component={Panier} />
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
// const CompteStack = createStackNavigator();
// function CompteStackScreen() {
//   return (
//     <CompteStack.Navigator>
//       <CompteStack.Screen name="Compte" component={Compte} />
//     </CompteStack.Navigator>
//   );
// }

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
        <Tab.Screen name="Recettes" component={AccueilStackScreen} />
        <Tab.Screen name="Produits" component={AccueilStackScreen} />
        <Tab.Screen name="Recherche" component={RechercheStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
