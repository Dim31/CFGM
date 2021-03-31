import React from 'react'
import {ActivityIndicator, Button, Dimensions, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native'
import RecetteAccueil from "./RecetteAccueil";
import {getMealsByCategory, getSingleRandomMeal} from "../API/AppelAPI"



export default class ListeRecettes extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            meals: [],
            isLoading: true
        };

    }


    _loadMeal(option) {


        if (option == "random"){
            let mealsList = []
            for (let i = 0; i < 100;i++){
                getSingleRandomMeal().then(json =>{
                    var item = json.meals[0]

                    mealsList.push(item)

                    if (i == 9){
                        this.setState({meals: mealsList})
                        this.setState({isLoading: false})
                    }
                })

            }
        } else {
            getMealsByCategory(option).then(json => {
                var item = json.meals
                this.setState({meals: item})
                this.setState({isLoading: false})
            })
        }



    }




    render() {
        const {meals, isLoading} = this.state;


        return (
            <View style={styles.conteneurDeListe}
            onLayout={() => {this._loadMeal(this.props.item.option)}}>
                <Text style={styles.N} > {this.props.item.titre} </Text>
                <ScrollView>

                    {isLoading ? <ActivityIndicator/> : (
                        <FlatList
                            horizontal

                            data={meals}
                            // data={DATA}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => {``
                                item.idMeal.toString()
                            }}
                            renderItem={({item}) => (
                                <View>

                                    {/*<Text>fds</Text>*/}

                                    <RecetteAccueil item={item}/>


                                </View>
                            )}
                        />
                    )}


                </ScrollView>
            </View>
        )
    }


}


var allWidth = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
    conteneurDeListe: {
        width: 418,
        height: 202,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'column',
        overflow: 'hidden',
        borderWidth: 1,
    },
    recette: {
        height: 100,
        width: 100,
        backgroundColor: '#440000'
    }
})
