import React, { Component } from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';



class ItemProduit extends Component {

  render() {
      const produit = this.props.produit;
    return (
    <View style={styles.conteneur}>
        <View>
            <Text style={styles.titre}>{produit.titre}</Text>
            <Text>{produit.producteur}</Text>
        </View>
        <View style={styles.imagebox}>
            <Image 
                source={{uri: produit.image}}     
                style={styles.image1} 
            />
        </View>
        <View style={styles.icon}>
            <Image 
                source={{
                    uri: 'https://image.flaticon.com/icons/png/512/126/126510.png'
                  }}   
                style={styles.image2} 
            />
            <Image 
                source={{
                    uri: 'https://img.icons8.com/ios/452/hearts--v1.png'
                  }}   
                style={styles.image2} 
            />
        </View>
    </View>
      
      

    );
  }
}
const styles = StyleSheet.create({
    conteneur: {
        width: 150, 
        borderWidth: 1,
        borderColor: "#20232a",
        padding:14,
        alignItems:'center',
        margin:3,
    },
    titre: {
        fontSize:20,
        flexWrap: 'wrap',
    },
    image1:{
        width: 100, 
        height: 100, 
        borderRadius: 400/ 2,
        borderWidth:1,
        borderColor: "#20232a",
        
    },
    imagebox:{
        alignItems: 'flex-end',
    },
    image2:{
        width: 20, 
        height: 20,
        
    },
    icon:{
        flexDirection: 'row',
        justifyContent:'space-between',
    }
})

export default ItemProduit;