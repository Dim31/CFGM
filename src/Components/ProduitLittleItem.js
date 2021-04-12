import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity , Button, Dimensions} from 'react-native'


class ProduitLittleItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { produit, afficherDetailsProduit } = this.props
    return (
      <View style = {styles.main_container}>
        <TouchableOpacity
          onPress = {() => afficherDetailsProduit(produit)}
          style = {styles.content_container}
        >
          <View style={styles.cadre_container}>
            <View style={styles.alimentTitle_container}>
              <Image
                style={styles.image}
                source={{uri: 'https://www.themealdb.com/images/ingredients/'+ produit.ingredient +'.png'}}
                />
              <Text ></Text>
              <Text
                numberOfLines={Platform.OS === 'ios' ? null : 2} minHeight={(Platform.OS === 'ios' && 2) ? (20 * 2) : null}
                style={styles.title_text}
              > {produit.ingredient}
              </Text>
            </View>
            <Text style={styles.description_text}></Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

var allWidth = Dimensions.get('window').width; //full width
const widthAddIcons = 33;
const styles = StyleSheet.create({

  main_container: {
    margin: 3,
  },
  content_container: {
    justifyContent: 'flex-start',flex:1,
    alignItems: 'flex-start',

  },
  cadre_container: {
    //width: allWidth * 45/100,
    //padding: 10,
    alignItems: 'center',
    textAlign: "left",
    //borderWidth: 1,

  },
  image: {
    width: Dimensions.get('window').width/2 * 0.3 ,
    height: Dimensions.get('window').width/2 * 0.3,
    borderRadius: Dimensions.get('window').width/2 * 0.2/ 2,
  },


  alimentTitle_container: {
    flexDirection: 'row',
    //alignItems: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1
  },
  title_text: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 15,
    width: allWidth * 20/100,
    //fontWeight: 'bold',
    //marginTop: 20,
    //marginBottom: 10,
  },

  description_container: {
  },
  description_text: {
    // fontStyle: 'italic',
    // color: '#666666',
    // fontSize: 12,
    // textAlign: 'left',
    // marginTop: 2,
  },


  ajouts_container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -10
  },
})

export default ProduitLittleItem
