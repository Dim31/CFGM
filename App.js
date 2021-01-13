import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View} from 'react-native';
import Produits from './src/Screens/Produits';

export default function App() {
  return (
      <View style={styles.container}>
        <Produits></Produits>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
