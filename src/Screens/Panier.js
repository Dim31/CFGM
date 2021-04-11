import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import RecettePanier from "../Components/RecettePanier";
<<<<<<< Updated upstream
import BarreDeNavigation from "../Components/BarreDeNavigation";
=======
>>>>>>> Stashed changes


const DATA = [
    {
        id: 181808,
        imgurl: 'https://i.pinimg.com/originals/b2/ba/31/b2ba31f90ac18e1ff8cc10e56ec2bb30.jpg',
        titre: 'Le chat',
        prix: '19.53',
        quantite: '1'
    },
    {
        id: 176986,
        imgurl: 'https://i.pinimg.com/originals/db/c8/0f/dbc80fc2034d97d97ce2de73da9dbc43.jpg',
        titre: 'Le Poulet',
        prix: '74.23',
        quantite: '3'
    },
    {
        id: 1995346,
        imgurl: 'https://i.pinimg.com/originals/f1/5a/ef/f15aefa97f3b7719d23c98d3028a9b8a.jpg',
        titre: "Les petits poussins",
        prix: '43.94',
        quantite: '2'
    },
];

export default class Panier extends React.Component {

    render() {

        return (
            <View>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                <View style={styles.listeDesProduits}>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <RecettePanier style={styles.recette} titre={item.titre}
                                                               imgurl={item.imgurl} prix={item.prix}
                                                               quantite={item.quantite}/>}
                    />

                </View>

                <View style={styles.detailPanier}>

                    <View style={styles.conteneurGauche}>
                        <Text>Produits 54,32€</Text>
                        <Text>Livraison 5,99€</Text>
                        <Text>Valide ta commande</Text>

                    </View>

                    <View style={styles.conteneurDroite}>
                        <Text>TOTAL 60,31€</Text>
                        <View style={styles.codeReduction}>
                            <Text style={styles.textCodeReduction}>Code de Reduction</Text>
                            <Text style={styles.textCodeReduction}>Entrer</Text>

                        </View>


                    </View>
                </View>

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
            </View>

        )
    }
}
var allHeight = Dimensions.get('window').height; //full height
var allWidth = Dimensions.get('window').width; //full width


const styles = StyleSheet.create({
    enTete: {
        flex: 185
    },


    listeDesProduits: {
        height: allHeight / 100 * 50,
        top: 50,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        flexDirection: 'column'
    },
    recette: {
        flex: 1
    },

    detailPanier: {
        marginTop: 90,
        flexDirection: 'row',
        borderColor: '#000000',
        borderWidth: 1,
        height: allHeight / 100 * 10,
        width: allWidth / 100 * 90,
        alignSelf: 'center',
    },

    conteneurGauche: {
        flex: 1,
        justifyContent: 'space-between'
    },

    conteneurDroite: {
        flex: 1,
        justifyContent: 'space-between'

    },
    codeReduction: {
        flexDirection: 'row',
    },
    textCodeReduction: {
        borderColor: '#000000',
        borderWidth: 1,
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 3,
        paddingLeft: 3,

    },
})