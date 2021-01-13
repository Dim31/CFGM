import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator, Dimensions} from 'react-native'
import RecetteItem from '../Components/RecetteItem'


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


class Recette extends React.Component {
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
      <View style ={styles.main_container}>
        <TextInput onSubmitEditing={() => this._searchRecette()} onChangeText={(text) => this._searchTextInputChanged(text)}  style={[styles.textinput, { backgroundColor: 'lightgrey'}]} placeholder='Rechercher'/>
        <FlatList
          data={formatData(this.state.recettes, numColumns)}
          style={styles.container}
          numColumns= {numColumns}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 50
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },

  container: {
      flex: 1,
      marginVertical: 20,
    },
    item: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      //height: Dimensions.get('window').width / numColumns, // approximate a square *
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      color: '#fff',
    }
})

export default Recette
