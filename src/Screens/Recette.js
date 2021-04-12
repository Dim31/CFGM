import React from 'react'
import {ActivityIndicator, ScrollView, Image, FlatList, StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native'
import RecetteItem from '../Components/RecetteItem'
import RecetteAccueil from "../Components/RecetteAccueil";
import {getSingleRandomMeal} from "../API/AppelAPI"
import { SearchBar, Button } from 'react-native-elements';
import backgroundImage from "../image/Patern2_travers2.png";
import Icon from 'react-native-vector-icons/Octicons';

// const formatData = (data, numColumns) => {
//     const numberOfFullRows = Math.floor(data.length / numColumns);
//     let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
//     while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
//         data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
//         numberOfElementsLastRow++;
//     }
//     return data;
// };

const numColumns = 2;


class Recette extends React.Component {
  state = {
    search: '',
  };
  updateState = (search) => {
    this.setState({search});
  };

  constructor(props) {
    super(props);
    this.page = 0
    this.totalPages = 0
    this.searchedText = ""
    this.state = {
      meals: [],
      isLoading: true
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
    console.log(this.searchedText);
  }

  _searchRecette() {
  }

  _afficherDetailsRecette = (item) => {
    this.props.navigation.navigate("RecetteDetails", {item: item})
  }

  _loadMeal() {
    let mealsList = []
    for (let i = 0; i < 20; i++) {
      getSingleRandomMeal().then(json => {
        var item = json.meals[0]
        var verifIfItemAlreadyUse = false
        for (let i2 = 0; i2 < mealsList.length; i2++) {
          if (item.idMeal === mealsList[i2].idMeal) {
            verifIfItemAlreadyUse = true
          }
        }
        if (!verifIfItemAlreadyUse) {
          mealsList.push(item)
        }
        if (i === 19) {
          this.setState({meals: mealsList})
          this.setState({isLoading: false})
        }
      })
    }
  }

  // Rendu Items recettes
  renderItem = (item) => {
    if (item === undefined) {
      return <View style={[styles.item, styles.itemInvisible]}/>;
    }
    return (
      <View style={styles.item}>
        <RecetteItem item={item} afficherDetailsRecette={this._afficherDetailsRecette}/>
      </View>
    );
  };

  render() {
    const {search} = this.state;
    var produits = [];
    const {meals, isLoading} = this.state;
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroudImage}>
        <ScrollView onLayout={() => { this._loadMeal() }}>
          <View style={styles.search_container}>
            <SearchBar
              containerStyle={styles.searchBar_container}
              inputContainerStyle={styles.searchBar_input}
              placeholder="Tarte aux fraises"
              inputStyle={{color:'#202c39'}}
              onChangeText={this.updateState}
              value={search}
            />
            <TouchableOpacity
              onPress = {() => this.props.navigation.navigate("Filtres")}
              style={{
                alignItems:'center',
                justifyContent:'space-evenly',
                flexDirection: 'row',
                width:100,
                height:45,
                backgroundColor:'#202c39',
                borderRadius:50,
              }}
            >
              <Icon name="settings"  size={20} color="#f1d397" />
              <Text style={{color: '#f1d397', fontWeight: 'bold'}}>Filtres</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.main_container} >
            {isLoading ? <ActivityIndicator/> : (
              <FlatList
                style={styles.flatList_container}
                numColumns={numColumns}
                data={meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={({item}) => (
                  this.renderItem(item)
                )}
              />
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  backgroudImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  search_container:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft: 10,
    marginRight: 10,
    margin: 20,
  },
  searchBar_container: {
    flex:1,
    backgroundColor:'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.130,
    shadowRadius: 5,
    elevation: 9,
  },
  searchBar_input:{
    backgroundColor:'white',
    width: "100%",
    borderRadius:50,
    height: 45,
  },
  search_button:{
    width: "100%",
    height: 45,
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
})

export default Recette
