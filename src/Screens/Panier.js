import {Dimensions, FlatList, StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import RecettePanier from "../Components/RecettePanier";
import Dash from "react-native-dash";
import backgroundImage from "../image/Patern2_travers2.png";

const DATA = [
    {
        id: 181808,
        imgurl: 'https://assets.afcdn.com/recipe/20190704/94666_w1024h768c1cx2689cy1920.jpg',
        titre: 'Salade verte',
        prix: '19.53',
        quantite: '1'
    },
    {
        id: 176986,
        imgurl: 'https://www.healthymood.fr/wp-content/uploads/Burger-de-boeuf-et-guacamole.jpg',
        titre: 'Le Burger',
        prix: '74.23',
        quantite: '3'
    },
    {
        id: 1995346,
        imgurl: 'https://www.hervecuisine.com/wp-content/uploads/2020/06/recette-tarte-cerise-1024x683.jpg.webp',
        titre: "LCherry pie",
        prix: '43.94',
        quantite: '2'
    },
    {
        id: 1995344,
        imgurl: 'https://static.750g.com/images/1200-630/037619521fe2943b55319e7339f4d8b3/salade-de-fruits.jpg',
        titre: "Salade de fruits",
        prix: '12.2',
        quantite: '2'
    },
    {
        id: 199845,
        imgurl: 'https://larecette.net/wp-content/uploads/2018/11/D%C3%A9licieux-g%C3%A2teau-au-chocolat-et-snickers-8-1200x900.jpg',
        titre: "Gateau au chocolat",
        prix: '22',
        quantite: '2'
    },
];

export default class Panier extends React.Component {
  FlatListItemSeparator = () => {
  return (
    <Dash dashGap={10} dashLength={10} dashThickness={1} dashColor={'#F0955F'} style={{margin:10}}/>
  );
}
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroudImage}>
        <View style={styles.main_container}>
        <View style={styles.listeProduits_container}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent = { this.FlatListItemSeparator }
            data={DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <RecettePanier titre={item.titre}
            imgurl={item.imgurl} prix={item.prix}
            quantite={item.quantite}/>}
          />
        </View>
        <View style={styles.resume_container}>
          <View style={styles.resumePrix_container}>
              <View style={styles.resumePrix_sub_container}>
                <View style={styles.prix_cantainer}>
                  <Text>Produits</Text>
                  <Text>54,32€</Text>
                </View>
                <View style={styles.prix_cantainer}>
                  <Text>Livraison</Text>
                  <Text>5,99€</Text>
                </View>
              </View>
              <View style={styles.resumePrix_sub_container}>
                <View style={styles.prixTotal_cantainer}>
                  <Text style={{fontWeight: 'bold'}}>TOTAL</Text>
                  <Text style={{fontWeight: 'bold'}}>60,31€</Text>
                </View>
              </View>
          </View>


          <View style={styles.buttons_container}>
            <TouchableOpacity style={styles.validerButton} activeOpacity={0.3}>
              <Text style={styles.validerButton_text}>Valide ta commande</Text>
            </TouchableOpacity>
            <View style={styles.codeReduction_container}>
              <TextInput
                style={styles.codeReduc_Input}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="Code de Reduction"
                keyboardType="default"
              />
              <TouchableOpacity style={styles.validerCodeButton} activeOpacity={0.3}>
                <Text style={styles.validerButton_text}>Entrer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </View>
      </ImageBackground>
    )
  }
}
var allHeight = Dimensions.get('window').height; //full height
var allWidth = Dimensions.get('window').width; //full width
var marginListeProduit = 20;

const styles = StyleSheet.create({

  backgroudImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  main_container: {
    flex: 1,
  },

  listeProduits_container: {
    paddingBottom: "25%",
    // Position
    height: "85%",
    marginLeft: marginListeProduit,
    marginRight: marginListeProduit,
    // Background
    backgroundColor: "#FFF",
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 9,
  },
  recette: {
    //flex: 1
  },

  resume_container: {
    padding: 10, paddingRight: 15, paddingLeft: 15,
    //flexDirection: 'row',
    // Forme
    borderRadius: 25,
    // Position
    height: "20%",
    marginBottom: 40,
    marginLeft: marginListeProduit * 65/100,
    marginRight: marginListeProduit *  65/100,
    marginTop: "-25%",
    // Background
    backgroundColor: "#f1d397",
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 9,
  },

  resumePrix_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  resumePrix_sub_container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
    //justifyContent:'space-evenly',
  },

  prix_cantainer: {
    width:"100%",
    justifyContent:'space-between',
    flexDirection: 'row',
  },
  prixTotal_cantainer: {
    width:"100%",
    justifyContent:'space-between',
    flexDirection: 'row',
  },

  buttons_container: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  codeReduction_container: {
    flexDirection: 'row',
  },
  codeReduc_Input: {
    padding: 0,
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
    backgroundColor: "#FFF",
    fontSize: 11,
  },
  validerCodeButton: {
    backgroundColor: "#202c39",
    padding: 10,
    borderTopRightRadius: 45,
    borderBottomRightRadius: 45,
  },

  validerButton: {
    backgroundColor: "#202c39",
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 45,
  },
  validerButton_text: {
    color: "#FFF",
    fontSize: 11,
  },
})
