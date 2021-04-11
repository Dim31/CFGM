import React from 'react'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'

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

var allWidth = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
    conteneurRecette: {
        flexDirection: 'column',
        marginRight: allWidth * 5/100,
    },
    ImageRecette: {
        alignSelf: 'center',
        height: allWidth / 4,
        width: allWidth / 4,
        borderRadius: 19,
    },
    TextRecette: {
        textAlign: 'center',
        fontSize: 10,
        marginTop: 8,
        color: '#202C39'
    }



})
