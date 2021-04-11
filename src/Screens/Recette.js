import React from 'react'
import {ActivityIndicator,ScrollView, Image, FlatList, StyleSheet, Text, View} from 'react-native'
import RecetteItem from '../Components/RecetteItem'
<<<<<<< Updated upstream
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
=======
import RecetteAccueil from "../Components/RecetteAccueil";
import {getSingleRandomMeal} from "../API/AppelAPI"

// const formatData = (data, numColumns) => {
//     const numberOfFullRows = Math.floor(data.length / numColumns);
//     let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
//     while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
//         data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
//         numberOfElementsLastRow++;
//     }
//     return data;
// };
>>>>>>> Stashed changes

const numColumns = 2;


class Recette extends React.Component {
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

<<<<<<< Updated upstream
    _afficherDetailsRecette = (idRecette) => {
        this.props.navigation.navigate("RecetteDetails", {idRecette: idRecette})
=======
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
>>>>>>> Stashed changes
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
        const {meals, isLoading} = this.state;

        return (
<<<<<<< Updated upstream
            <View style={styles.main_container}>
                    <FlatList
                        data={formatData(this.state.recettes, numColumns)}
                        style={styles.flatList_container}
                        numColumns= {numColumns}
                        renderItem={this.renderItem}
                    />
=======
            <View
                style={styles.main_container}
                onLayout={() => {
                this._loadMeal()
            }}>

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
>>>>>>> Stashed changes
            </View>
        )
    }

}


const styles = StyleSheet.create({
<<<<<<< Updated upstream
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
=======
        main_container: {
            flex: 1,
        },
        search_container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,

            paddingBottom: 10,
            borderBottomWidth: 1,
        }
        ,
        textinput: {
            marginLeft: 5,
            marginRight: 5,
            height: 45,
            borderColor: '#000000',
            borderWidth: 1,
            paddingLeft: 5,
            flex: 0.8,
            borderRadius: 20
        }
        ,
        buttonFilter: {}
        ,
        liste: {}
        ,

        flatList_container: {
            flex: 1,
            paddingTop: 10,
            //marginVertical: 20,
        }
        ,
        item: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
            //height: Dimensions.get('window').width / numColumns, // approximate a square *
        }
        ,
        itemInvisible: {
            backgroundColor: 'transparent',
        }
        ,
    }
)
>>>>>>> Stashed changes

export default Recette

