import React from 'react'
import {Dimensions, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native'
import RecetteAccueil from "../Components/RecetteAccueil";


const DATA = [
    {
        id: 181808,
        imgurl: 'https://i.pinimg.com/originals/b2/ba/31/b2ba31f90ac18e1ff8cc10e56ec2bb30.jpg',
        titre: 'Le chat',
    },
    {
        id: 176986,
        imgurl: 'https://i.pinimg.com/originals/db/c8/0f/dbc80fc2034d97d97ce2de73da9dbc43.jpg',
        titre: 'Le Poulet',
    },
    {
        id: 1995346,
        imgurl: 'https://i.pinimg.com/originals/f1/5a/ef/f15aefa97f3b7719d23c98d3028a9b8a.jpg',
        titre: "Les petits poussins" ,
    },
];


export default class ListeRecettes extends React.Component {

    render() {
        return (
            <View style={styles.conteneurDeListe}>
                <Text> {this.props.titre} </Text>
                <ScrollView
                            style={styles.listeRecette}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <RecetteAccueil style={styles.recette} title={item.titre}
                                                                imgurl={item.imgurl}/>}
                    />
                </ScrollView>
            </View>
        )
    }


}

var allWidth = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    conteneurDeListe: {
        backgroundColor: '#666666',
        width: allWidth - 30,
        height: 200,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'column',
        overflow: 'hidden'
    },
    listeRecette: {
        flexDirection: 'row',
    },
    recette: {
        height: 100,
        width: 100,
        backgroundColor: '#440000'
    }
})
