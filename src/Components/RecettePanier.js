import React from 'react'
import {Dimensions, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'

// Icones
import icon_corbeille_orange from '../image/icon_corbeille_orange.png';
import icon_enlever_orange from '../image/icon_ajout_orange.png';
import icon_unchecked_orange from '../image/icon_unchecked_orange.png';
import icon_ajout_orange from '../image/icon_ajout_orange.png';


export default class RecettePanier extends React.Component {
  render() {
    return (
      <View style={styles.main_conatiner}>
        <Image style={styles.imageRecette} source={{uri: this.props.imgurl}}/>
        <View style={styles.detailsRecette_container}>
          <Text style={styles.detailsRecette_titre}>{this.props.titre}</Text>
          <Text style={styles.detailsRecette_prix}>{this.props.prix}€</Text>
        </View>

        <View style={styles.actionRecette_container}>
          <TouchableOpacity>
            <Image style={styles.icon} source={icon_enlever_orange} />
          </TouchableOpacity>
          <Image style={styles.iconCount} source={icon_unchecked_orange} />
          {/*<Text> {this.props.quantite} </Text>*/}
          <TouchableOpacity>
            <Image style={styles.icon} source={icon_ajout_orange} />
          </TouchableOpacity>
          <Text>{this.props.prix}€</Text>
          <TouchableOpacity>
            <Image style={styles.icon} source={icon_corbeille_orange} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const widthAddIcons = 15;
var allWidth = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
  main_conatiner: {
    flexDirection: 'row',
    padding: 15,
  },
  imageRecette: {
    height: allWidth*22/100,
    width: allWidth*22/100,
  },
  
  detailsRecette_container: {
    flex: 1,
    margin: 5,
  },
  detailsRecette_titre: {
    fontSize: 13,
    marginBottom: 5,
  },
  detailsRecette_prix: {
    fontSize: 10,
    fontWeight: 'bold',
  },

  actionRecette_container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',

  },


  icon: {
    height: widthAddIcons,
    width: widthAddIcons
  },
  iconCount: {
    height: widthAddIcons * 200/100,
    width: widthAddIcons * 200/100,
  },
})
