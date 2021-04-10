import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity , Button, Dimensions} from 'react-native'


class ProduitItem extends React.Component {
  render() {
    const { produit, afficherDetailsProduit } = this.props
    console.log("L id du recette est : "+produit.id);
    console.log("L key du recette est : "+produit.key);
    return (
      <View style = {styles.main_container}>
        <TouchableOpacity

        onPress = {() => afficherDetailsProduit(produit.id)}
        style = {styles.content_container}
        >
          <View style={styles.cadre_container}>
            <View style={styles.alimentTitle_container}>

              <Image
                style={styles.image}
                source={{uri: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c238.png'}}
              />
              <Text ></Text>
              <Text style={styles.title_text}>Produit {produit.id}</Text>
            </View>
            <Text style={styles.description_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const widthAddIcons = 33;
const styles = StyleSheet.create({
  alimentTitle_container: {
    flexDirection: 'row',
    alignItems: 'center'
  },


  main_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    marginBottom: 5
  },
  content_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  cadre_container: {
    //borderWidth: 1,
    padding: 10
  },
  image: {
    width: Dimensions.get('window').width/2 * 0.3 ,
    height: Dimensions.get('window').width/2 * 0.3,
    borderRadius: Dimensions.get('window').width/2 * 0.2/ 2,
  },


  header_container: {
  },
  title_text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },

  description_container: {
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    fontSize: 12,
    textAlign: 'justify',
    marginTop: 2,
  },


  ajouts_container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -10
  },
})

export default ProduitItem
