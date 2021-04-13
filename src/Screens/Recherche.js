import React, {useState} from 'react'
import { StyleSheet, View, TextInput, FlatList, Text, ActivityIndicator, Dimensions, Picker, Animated,SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import RecetteItem from '../Components/RecetteItem'
import Filtres from "../Components/Filtres";
import backgroundImage from "../image/Patern2_travers2.png";
import NavigationRecherche from '../Navigation/NavigationRecherche'
import { SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';

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
const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY,0,45)
const translateY = diffClamp.interpolate({
  inputRange:[0,45],
  outputRange:[0,-45]
})

class Recherche extends React.Component {
  state = {
    search: '',
  };
  updateState = (search) => {
    this.setState({search});
  };
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

  //Visibilité modal pour le filtre
  state = {
    modalVisible: false
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
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
      const {search} = this.state;
      var produits = [];
      const {meals, isLoading} = this.state;
        return (
          <ImageBackground source={backgroundImage} style={styles.backgroudImage}>
          <ScrollView >
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

                {/*<NavigationRecherche/>*/}
            </ScrollView>
          </ImageBackground>
        )
    }
}

const widthAddIcons = 30;
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
})

export default Recherche
