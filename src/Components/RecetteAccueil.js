import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

export default class RecetteAccueil extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <View style={styles.conteneurRecette}>

                <Image style={styles.ImageRecette} source={{uri: this.props.item.strMealThumb}}/>

                <Text style={styles.TextRecette}>{this.props.item.strMeal}</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    conteneurRecette: {
        flexDirection: 'column',
        marginRight: 5,
        width: 150
    },
    ImageRecette: {
        height: 150,
        width: 150,
    },



})
