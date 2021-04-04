import React, {useState} from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator, Dimensions, Picker} from 'react-native'
import RecetteItem from '../Components/RecetteItem'
import { withNavigation } from 'react-navigation';



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
            recettes: [{ key: 'A', id: 1}, { key: 'B', id: 2 }, { key: 'C' , id: 3}, { key: 'D' , id: 4}, { key: 'E' , id: 5}, { key: 'F' , id: 6}, { key: 'G' , id: 7}, { key: 'H' , id: 8}, { key: 'I' , id: 9}],
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

    _afficherDetailsRecette = (idRecette) => {
      this.props.navigation.navigate("RecetteDetails", {idRecette: idRecette})
    }

    // Rendu Items recettes
    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <View style={styles.item} >
                <RecetteItem recette={item} afficherDetailsRecette={this._afficherDetailsRecette} />
            </View>
        );
    };


    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    data={formatData(this.state.recettes, numColumns)}
                    style={styles.flatList_container}
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
    },
    liste:{

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

export default Recette
