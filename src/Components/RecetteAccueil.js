import React from 'react'
import {Dimensions, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'


export default class RecetteAccueil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { afficherDetailsRecette } = this.props;
    return (
      <View style={styles.conteneurRecette}>
      <TouchableOpacity
        onPress = {() => afficherDetailsRecette(this.props.item.idMeal)}
      >
        <Image style={styles.ImageRecette} source={{uri: this.props.item.strMealThumb}}/>
        <Text style={styles.TextRecette} numberOfLines={2}>{this.props.item.strMeal}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var allWidth = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
  conteneurRecette: {
    flexDirection: 'column',
    //marginRight: allWidth * 5/100,
    marginRight: 20,
    width: allWidth /4,
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
    color: '#202C39',
    flexWrap: 'wrap',
  }
})
