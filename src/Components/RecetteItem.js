import React from 'react'
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import icon_coeur_orange from '../image/icon_coeur_orange.png';
import icon_panier_orange from '../image/icon_panier_orange.png';
import icon_ajout_orange from '../image/icon_ajout_orange.png';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


class RecetteItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {item, afficherDetailsRecette} = this.props
        // console.log("L id du recette est : "+item.idMeal);
        // console.log("L key du recette est : "+item.idMeal);
        return (
            <View style={styles.main_container}>
                <TouchableOpacity
                    onPress={() => afficherDetailsRecette(item)}
                    //onPress = {() => afficherDetailsRecette(recette.id)}
                    style={styles.content_container}
                >
                    <View style={styles.cadre_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.title_text} numberOfLines={1}>{item.strMeal}</Text>
                            <Text style={styles.price_text}>{getRandomInt(8, 60)} €</Text>
                        </View>
                        <View style={styles.description_container}>
                            <Text style={styles.description_text}
                                  numberOfLines={1}>[{item.strArea}] {item.strTags}</Text>
                            <Text style={styles.plus_text}>En savoir plus</Text>
                        </View>
                    </View>
                    <Image
                        style={styles.image}
                        source={{uri: item.strMealThumb}}
                    />
                </TouchableOpacity>

                <View style={styles.ajouts_container}>
                    <TouchableOpacity onPress={() => this._ajoutRecettePanier()} style={styles.imageCoeur_container}>
                        <Image
                            style={styles.imageAjout}
                            source={icon_ajout_orange}
                        /><Text> </Text>
                        <Image
                            style={styles.imageCoeur}
                            source={icon_coeur_orange}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text_text}></Text>
                    <TouchableOpacity onPress={() => this._ajoutRecetteFavoris()} style={styles.imagePanier_container}>
                        <Image
                            style={styles.imageAjout}
                            source={icon_ajout_orange}
                        /><Text> </Text>
                        <Image
                            style={styles.imagePanier}
                            source={icon_panier_orange}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

var allWidth = Dimensions.get('window').width; //full width
const widthAddIcons = 28;
const styles = StyleSheet.create({
    main_container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 5,
        marginBottom: 40,

        borderRadius: 20,
        backgroundColor: '#45add9',
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        width: allWidth / 2 - allWidth * 0.05,
    },
    content_container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cadre_container: {
        width: allWidth/2 - allWidth * 0.05,
        borderWidth: 0,
        borderRadius: 20,
        paddingBottom: Dimensions.get('window').width / 2 * 0.6 * 0.7,
        padding: 10,
        backgroundColor: '#F1D397',
    },
    image: {
        width: Dimensions.get('window').width / 2 * 0.6,
        height: Dimensions.get('window').width / 2 * 0.6,
        borderRadius: Dimensions.get('window').width / 2 * 0.6 / 2,
        backgroundColor: 'gray',
        marginTop: -Dimensions.get('window').width / 2 * 0.6 * 0.7,

    },


    header_container: {},
    title_text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    price_text: {
        fontWeight: 'bold',
        fontSize: 15,
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
        marginTop: 10,
        marginBottom: 5
    },
    plus_text: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
        color: '#083f57',
        color: '#F0955F',
    },


    ajouts_container: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 15,
        marginTop: -5,
    },
    imagePanier_container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imagePanier: {
        width: widthAddIcons,
        height: widthAddIcons,
    },
    imageCoeur_container: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    imageCoeur: {
        width: widthAddIcons,
        height: widthAddIcons,
    },
    imageAjout: {
      width: widthAddIcons * 50/100,
      height: widthAddIcons * 50/100,
    },
    text_text: {
        flex: 1
    }
})

export default RecetteItem
