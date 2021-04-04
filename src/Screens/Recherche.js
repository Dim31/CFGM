import React, {useState} from 'react'
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator,
  Dimensions,
  Picker,
  ImageBackground, TouchableOpacity
} from 'react-native'
import RecetteItem from '../Components/RecetteItem'
import Background from "../image/Patern1.png";


const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const numColumns = 2;

class Rechercher extends React.Component {
  constructor(props) {
    super(props)
    this.page = 0
    this.totalPages = 0
    this.state = {
      recettes: [{ key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }],
      isLoading: false
    }
    this.searchedText = ""
  }


  _searchTextInputChanged(text) {
    this.searchedText = text
    console.log(this.searchedText);
  }

  _searchRecette() {

  }

  // Rendu Items recettes
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item} >
          <RecetteItem recette={item}  />
      </View>
    );
  };


  render() {
    return (
      <View style={styles.main_container}>
        <ImageBackground source={Background} style={styles.backgroundImage}>
        <View style={styles.search_container} >
          <TextInput onSubmitEditing={() => this._searchRecette()} onChangeText={(text) => this._searchTextInputChanged(text)}  style={[styles.textinput, { backgroundColor: 'lightgrey'}]} placeholder='Rechercher'/>

          <TouchableOpacity style={styles.buttonFilter}>
            <Text style={styles.buttonText}>Filtres</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:1}}>
        <FlatList
          data={formatData(this.state.recettes, numColumns)}
          style={styles.flatList_container}
          numColumns= {numColumns}
          renderItem={this.renderItem}
        />
        </View>
        </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 10
  },
  search_container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,

    paddingBottom: 10,
    borderBottomWidth: 1,
  },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 45,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      flex: 0.8,
      borderRadius: 20
    },
    buttonFilter: {
      alignItems: "center",
      backgroundColor: "#293845",
      paddingVertical:10,
      paddingHorizontal:20,
      borderRadius: 50,
      borderWidth: 1,
      width: 100,
    },

  flatList_container: {
    flex: 1,
    paddingTop: 10,
    //marginVertical: 20,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
    //height: Dimensions.get('window').width / numColumns, // approximate a square *
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  backgroundImage:{
    width: '100%',
    height: '100%',

  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffe2c4'
  },

})

export default Rechercher
