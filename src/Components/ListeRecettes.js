import React from 'react'
import {ActivityIndicator, Dimensions, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native'
import RecetteAccueil from "./RecetteAccueil";
import {getMealsByCategory, getSingleRandomMeal} from "../API/AppelAPI"
import { withNavigation } from 'react-navigation';

export default class ListeRecettes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      isLoading: true
    };
  }

  _loadMeal(option) {
    if (option === "random") {
      let mealsList = []
      for (let i = 0; i < 50; i++) {
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
          if (i === 9) {
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

  _afficherDetailsRecette = (item) => {
      this.props.navigation.navigate("RecetteDetails", {item: item})
  }

  render() {
    const {meals, isLoading} = this.state;
    return (
      <View style={styles.conteneurDeListe}
        onLayout={() => {
          this._loadMeal(this.props.item.option)
      }}>
        <Text style={styles.titreListe}> {this.props.item.titre} </Text>
        <ScrollView>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              keyExtractor={(item) => item.idMeal.toString() + this.props.item.titre}
              horizontal
              data={meals}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View>
                  <RecetteAccueil item={item} afficherDetailsRecette={this._afficherDetailsRecette}/>
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
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 0,
    },
    shadowOpacity: 0.130,
    shadowRadius: 5,
    elevation: 9,
    // Width
    marginLeft: 20,
    marginBottom: 20,
    marginRight: -100,
    paddingRight: 100,
    // Border
    borderRadius: 45,
    padding: 20,
    // Color
    backgroundColor: "#FFF"
  },
  titreListe: {
    fontSize: 23,
    marginBottom: 20,
  },
  recette: {
    height: 100,
    width: 100,
    backgroundColor: '#440000'
  },
})
