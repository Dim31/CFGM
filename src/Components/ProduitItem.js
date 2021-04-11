import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';


class ProduitItem extends Component {
  render() {
    const produit = this.props.produit;
    return (
      <View style={styles.conteneur}>
        <View>
          <Text style={styles.titre}>{produit.titre}</Text>
          <Text style={styles.producteur}>{produit.producteur}</Text>
        </View>
        <View style={styles.image_Container}>
          <Image
            source={{uri: produit.image}}
            style={styles.imageProduit}
          />
        </View>
        <View style={styles.icon_Container}>
          <Image
            source={{uri: 'https://image.flaticon.com/icons/png/512/126/126510.png'}}
            style={styles.icon}
          />
          <Image
            source={{uri: 'https://img.icons8.com/ios/452/hearts--v1.png'}}
            style={styles.icon}
          />
        </View>
      </View>
    );
  }
}

var allWidth = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
  conteneur: {
    width: allWidth * 45/100,
    backgroundColor: "#f1d397",
    borderRadius: 25,
    margin: 10,
    padding: 10,
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 0,
    },
    shadowOpacity: 0.130,
    shadowRadius: 5,
    elevation: 9,
  },
  titre: {
    fontSize: 18,
    flexWrap: 'wrap',
    textAlign: "center",
    marginBottom: 2,
  },
  producteur: {
    fontSize: 10,
    flexWrap: 'wrap',
    textAlign: "center",
    marginBottom: 15,
  },
  image_Container:{
    alignItems: 'center',
  },
  imageProduit: {
    width: 95,
    height: 95,
    borderRadius: 100,
    marginBottom: 5,

    //borderWidth: 1
  },
  icon_Container:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  icon:{
    width: 33,
    height: 33,
    margin: 8,
  }
})

export default ProduitItem;
