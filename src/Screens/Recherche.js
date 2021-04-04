import React, {useState} from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator, Dimensions, Picker, Animated,SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import RecetteItem from '../Components/RecetteItem'
import Filtres from "../Components/Filtres";

import NavigationRecherche from '../Navigation/NavigationRecherche'


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
        return (
            <View style={styles.main_container}>
                <Animated.View
                style={{
                  transform:[
                    {translateY:translateY }
                  ],
                  elevation:4,
                  zIndex:100,
                }}
                >
                <View style={styles.search_container} >
                    <TextInput onSubmitEditing={() => this._searchRecette()} onChangeText={(text) => this._searchTextInputChanged(text)}  style={[styles.textinput, { backgroundColor: 'lightgrey'}]} placeholder='Rechercher'/>
                    <Button
                        style={styles.buttonFilter}
                        title="Filtres"
                        color="#0c506a"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>

                </Animated.View>

                <NavigationRecherche/>
            </View>
        )
    }
}

const widthAddIcons = 30;
const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  search_container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,

    paddingBottom: 10,
    paddingTop: 20,
    // borderBottomWidth: 1,
    borderTopWidth: 2,
    borderColor: '#817975',
    backgroundColor: '#d4ccc0',
    alignItems: 'center'
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
