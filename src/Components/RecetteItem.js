import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity , Button, Dimensions} from 'react-native'

class RecetteItem extends React.Component {
  render() {
    const { recette, afficherDetailRecette } = this.props
    return (
      <View style = {styles.main_container}>
        <TouchableOpacity
        onPress = {() => afficherDetailRecette(recette.id)}
        style = {styles.content_container}
        >
          <View style={styles.cadre_container}>

            <View style={styles.header_container}>
              <Text style={styles.title_text}>Gâteau au chocolat fondant rapide</Text>
              <Text style={styles.price_text}>8 €</Text>
            </View>

            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLine={6}>Ajoutez le mélange chocolat/beurre. Mélangez bien. Beurrez et farinez votre moule puis y versez la pâte à gâteau ...</Text>
              <Text style={styles.plus_text}>En savoir plus</Text>
            </View>
          </View>
          <Image
            style={styles.image}
            source={{uri: 'https://assets.afcdn.com/recipe/20181203/84529_w350h250c1cx1775cy2362.webp'}}
          />

        </TouchableOpacity>

        <View style={styles.ajouts_container}>
          <TouchableOpacity onPress={()=>this._ajoutRecettePanier()}>
            <Image
              style={styles.imagePanier}
              source={{uri: 'https://image.flaticon.com/icons/png/512/126/126510.png'}}
            />
          </TouchableOpacity>
          <Text style={styles.pute_text}></Text>
          <TouchableOpacity onPress={()=>this._ajoutRecetteFavoris()}>
            <Image
              style={styles.imageCoeur}
              source={{uri: 'https://img.icons8.com/ios/452/hearts--v1.png'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginBottom: 40
  },
  cadre_container: {
    borderWidth: 1,
    paddingBottom: Dimensions.get('window').width/2 * 0.6 *0.7,
    padding: 10
  },
  content_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_container: {

  },
  description_container: {

  },
  ajouts_container: {
    flexDirection: 'row',
  },


  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  price_text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#666666',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  plus_text: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    color: '#083f57',

  },
  image: {
    width: Dimensions.get('window').width/2 * 0.6 ,
    height: Dimensions.get('window').width/2 * 0.6,
    borderRadius: Dimensions.get('window').width/2 * 0.6/ 2,
    backgroundColor: 'gray',
    marginTop: -Dimensions.get('window').width/2 * 0.6 *0.7
  },
  imagePanier: {
    width: 33,
    height: 33,
    marginLeft: 0
  },
  imageCoeur: {
    width: 33,
    height: 33,
    marginRight: 0
  },
  pute_text: {
    flex: 1
  }
})

export default RecetteItem
