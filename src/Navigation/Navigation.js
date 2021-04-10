import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Recette from '../Screens/Recette'
import Accueil from '../Screens/Accueil'
import BarreDeNavigation from '../Components/BarreDeNavigation'

const Stack = createStackNavigator();

export default function Nav() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Accueil" component={Accueil}/>
                <Stack.Screen name="Barre" component={BarreDeNavigation}/>
                <Stack.Screen name="Recette" component={Recette}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
