import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity , Button, Dimensions} from 'react-native'


class RecetteItem extends React.Component {
  render() {
    const { recette, afficherDetailsRecette } = this.props
    console.log("L id du recette est : "+recette.id);
    console.log("L key du recette est : "+recette.key);
    return (
      <View style = {styles.main_container}>
        <TouchableOpacity

        onPress = {() => afficherDetailsRecette(recette.id)}
        //onPress = {() => afficherDetailsRecette(recette.id)}
        style = {styles.content_container}
        >
          <View style={styles.cadre_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>Gâteau au chocolat fondant rapide {recette.id}</Text>
              <Text style={styles.price_text}>8 €</Text>
            </View>

            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={2}>Ajoutez le mélange chocolat/beurre. Mélangez bien. Beurrez et farinez votre moule puis y versez la pâte à gâteau ...</Text>
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
              style={styles.imageCoeur}
              source={{uri: 'https://img.icons8.com/ios/452/hearts--v1.png'}}
            />
          </TouchableOpacity>
          <Text style={styles.text_text}></Text>
          <TouchableOpacity onPress={()=>this._ajoutRecetteFavoris()}>
            <Image
              style={styles.imagePanier}
              source={{uri: 'https://image.flaticon.com/icons/png/512/126/126510.png'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const widthAddIcons = 33;
const styles = StyleSheet.create({
  main_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginBottom: 40
  },
  content_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  cadre_container: {
    borderWidth: 1,
    paddingBottom: Dimensions.get('window').width/2 * 0.6 *0.7,
    padding: 4
  },
  image: {
    width: Dimensions.get('window').width/2 * 0.6 ,
    height: Dimensions.get('window').width/2 * 0.6,
    borderRadius: Dimensions.get('window').width/2 * 0.6/ 2,
    backgroundColor: 'gray',
    marginTop: -Dimensions.get('window').width/2 * 0.6 *0.7
  },


  header_container: {
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
    textAlign: 'center',
  },


  description_container: {
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 5
  },
  plus_text: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    color: '#083f57',
  },


  ajouts_container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -10
  },
  imagePanier: {
    width: widthAddIcons,
    height: widthAddIcons,

  },
  imageCoeur: {
    width: widthAddIcons,
    height: widthAddIcons,
  },
  text_text: {
    flex: 1
  }
})

export default RecetteItem
