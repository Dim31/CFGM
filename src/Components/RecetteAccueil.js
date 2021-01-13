import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

export default class RecetteAccueil extends React.Component {

    render() {
        return (
            <View style={styles.conteneurRecette}>

                <Image style={styles.ImageRecette} source={{uri: this.props.imgurl}}/>

                <Text style={styles.TextRecette}>{this.props.title}</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    conteneurRecette: {
        flexDirection: 'column',
        marginRight: 5,
    },
    ImageRecette: {
        height: 150,
        width: 150,
    },
    TextRecette: {

    }


})
