import React from 'react'
<<<<<<< HEAD
import {AppRegistry, StyleSheet, Text, View, Dimensions, Image, Button} from 'react-native'
=======
import {AppRegistry, StyleSheet, Text, View} from 'react-native'
>>>>>>> origin/raphael
import Slider from "@react-native-community/slider";
import SwitchSelector from "react-native-switch-selector";
import InputSpinner from "react-native-input-spinner";
import {CheckBox} from "react-native-elements";

<<<<<<< HEAD
import icon_plus from '../image/icon_plus.png';
import icon_moins from '../image/icon_moins.png';
import icon_checked from '../image/icon_checked.png';
import icon_unchecked from '../image/icon_unchecked.png';
=======
>>>>>>> origin/raphael

const optionsCuisson = [
    { label: "<15min", value: "<15min" },
    { label: "<30min", value: "<30min" },
    { label: "<60min", value: "<60min" }
];

const optionsDifficulte = [
    { label: "Très facile", value: "Très facile" },
    { label: "Facile", value: "Facile" },
    { label: "Moyen", value: "Moyen" },
    { label: "Difficile", value: "Difficile" }
];

export default class Filtres extends React.Component {

<<<<<<< HEAD
  state = {
    value: 0,
    checkedExpress: false,
    checkedVege: false,
    checkedHealthy: false,
    checkedDessert: false,
    checkedSaison: false,
    checkedApero: false,
    selectedCategories: []
  };

  onSelectionsChange = (selectedCategories) => {
    this.setState({selectedCategories})
  }



  render() {
    return (


      <View style={styles.main_container}>
      <View style={styles.modalView}>
        {/*Prix*/}
        <View style={styles.price_container}>
            <Text style={[styles.text, { width:40}]}>Prix</Text>
            <Slider
              style={{width: allWidth * 60/100, justifyContent: 'center',
              alignItems: 'center',}}
              minimumTrackTintColor={"#f0955f"}
              //maximumTrackTintColor={"#f0955f"}
              thumbTintColor={"#f1d397"}
              value={this.state.value}
              minimumValue={0}
              maximumValue={100}
              step={5}
              onValueChange={value => this.setState({ value })}
            />
            <Text style={[styles.text, { width:40}]}>{this.state.value} €</Text>
        </View>
        {/*Nb personne / Tps cuisson*/}
        <View style={styles.time_people_container}>
          <View style={styles.poeple_container}>
            <Text style={styles.text}>Nombre de personnes</Text>
            <InputSpinner
              max={10}
              min={1}
              step={1}
              colorLeft={'transparent'}
              colorRight={'transparent'}
              textColor={'#f1d397'}
              buttonLeftImage={ <Image style={styles.icon} source={icon_moins}/> }
              buttonRightImage= { <Image style={styles.icon} source={icon_plus}/> }
              editable={false}
              value={this.state.number}
              onChange={(num) => { console.log(num); }}
            />
          </View>
          <View style={styles.time_container}>
            <Text style={styles.text}>Temps de cuisson</Text>
            <InputSpinner
              max={120}
              min={10}
              step={10}
              colorLeft={'transparent'}
              colorRight={'transparent'}
              textColor={'#f1d397'}
              buttonLeftImage={ <Image style={styles.icon} source={icon_moins}/> }
							buttonRightImage= { <Image style={styles.icon} source={icon_plus}/> }
              //colorAsBackground
              editable={false}
              value={this.state.number}
              onChange={(num) => { console.log(num); }}
            >
              <Text style={{fontSize: 15, color: "#f1d397"}}> min</Text>
            </InputSpinner>
          </View>
        </View>
        {/*Difficulté*/}
        <View style={styles.difficulty_container}>
          <Text style={styles.text}>Difficulté</Text>
          <SwitchSelector
            style={styles.switchSelector_difficulty}
            options={optionsDifficulte}
            initial={2}
            buttonColor= '#F0955F'
            textColor= '#F1D397'
            backgroundColor="#202c39"
            onPress={value => console.log(`Call onPress with value: ${value}`)}
          />
        </View>
        {/*Catégorie*/}
        <View style={styles.categorie_container}>
          <Text style={styles.text}>Categories</Text>
          <View style={styles.firstRow}>
            <CheckBox
              style={styles.checkbox}
              title='Express'
              checkedColor={'#F0955F'}
              checkedIcon={<Image style={styles.icon} source={icon_checked} />}
              uncheckedIcon={<Image style={styles.icon} source={icon_unchecked} />} uncheckedColor={'#F0955F'}
              textStyle={{color:'#F1D397'}}
              containerStyle={styles.checkbox}
              checked={this.state.checkedExpress}
              onIconPress={() => this.setState({checkedExpress: !this.state.checkedExpress})}
              onPress={() => this.setState({checkedExpress: !this.state.checkedExpress})}
            />
            <CheckBox
              style={styles.checkbox}
              title='Végé'
              checkedColor={'#F0955F'}
              checkedIcon={<Image style={styles.icon} source={icon_checked} />}
              uncheckedIcon={<Image style={styles.icon} source={icon_unchecked} />} uncheckedColor={'#F0955F'}
              textStyle={{color:'#F1D397'}}
              containerStyle={styles.checkbox}
              checked={this.state.checkedVege}
              onIconPress={() => this.setState({checkedVege: !this.state.checkedVege})}
              onPress={() => this.setState({checkedVege: !this.state.checkedVege})}
            />
          </View>
          <View style={styles.firstRow}>
            <CheckBox
              style={styles.checkbox}
              title='Healthy'
              checkedColor={'#F0955F'}
              checkedIcon={<Image style={styles.icon} source={icon_checked} />}
              uncheckedIcon={<Image style={styles.icon} source={icon_unchecked} />} uncheckedColor={'#F0955F'}
              textStyle={{color:'#F1D397'}}
              containerStyle={styles.checkbox}
              checked={this.state.checkedHealthy}
              onIconPress={() => this.setState({checkedHealthy: !this.state.checkedHealthy})}
              onPress={() => this.setState({checkedHealthy: !this.state.checkedHealthy})}
            />
            <CheckBox
              style={styles.checkbox}
              title='Dessert'
              checkedColor={'#F0955F'}
              checkedIcon={<Image style={styles.icon} source={icon_checked} />}
              uncheckedIcon={<Image style={styles.icon} source={icon_unchecked} />} uncheckedColor={'#F0955F'}
              textStyle={{color:'#F1D397'}}
              containerStyle={styles.checkbox}
              checked={this.state.checkedDessert}
              onIconPress={() => this.setState({checkedDessert: !this.state.checkedDessert})}
              onPress={() => this.setState({checkedDessert: !this.state.checkedDessert})}
            />
          </View>
          <View style={styles.firstRow}>
            <CheckBox
              style={styles.checkbox}
              title='Saison'
              checkedColor={'#F0955F'}
              checkedIcon={<Image style={styles.icon} source={icon_checked} />}
              uncheckedIcon={<Image style={styles.icon} source={icon_unchecked} />} uncheckedColor={'#F0955F'}
              textStyle={{color:'#F1D397'}}
              containerStyle={styles.checkbox}
              checked={this.state.checkedSaison}
              onIconPress={() => this.setState({checkedSaison: !this.state.checkedSaison})}
              onPress={() => this.setState({checkedSaison: !this.state.checkedSaison})}
            />
            <CheckBox
              style={styles.checkbox}
              title='Apéro'
              checkedColor={'#F0955F'}
              checkedIcon={<Image style={styles.icon} source={icon_checked} />}
              uncheckedIcon={<Image style={styles.icon} source={icon_unchecked} />} uncheckedColor={'#F0955F'}
              textStyle={{color:'#F1D397'}}
              containerStyle={styles.checkbox}
              checked={this.state.checkedApero}
              onIconPress={() => this.setState({checkedApero: !this.state.checkedApero})}
              onPress={() => this.setState({checkedApero: !this.state.checkedApero})}
            />
          </View>
        </View>
        </View>
      </View>
    )
  }
}
var allWidth = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
  main_container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#243846",
    //marginTop: 22,
  },
  modalView: {
    flex:1,
    margin: 20,
    backgroundColor: "#243846",
    //borderRadius: 70,
    padding: 35,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5
  },
  title_text: {
    fontSize: 25,
    color: "#f1d397",
    marginBottom: 30
  },

  price_container:{
    //flex: 4,
    flexDirection: 'row',
    width: allWidth * 80/100,
    justifyContent: 'space-between',
    //alignItems: 'center'
  },

  time_people_container:{
    flexDirection: 'row',
    marginTop: 30,
  },
  poeple_container:{
  },
  time_container:{
  },

  difficulty_container:{
    marginTop: 30,
  },
  switchSelector_difficulty: {
    width: allWidth * 90/100,
    textAlign: "center",alignItems: 'center'
  },

  categorie_container:{
    marginTop: 30,
  },


  text:{
    color: "#F1D397",
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },



  inputSpinner: {
    backgroundColor:"transparent"
  },
  firstRow:{
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
  },
  checkbox: {
    backgroundColor:'transparent',
    borderWidth:0,
    width: allWidth * 35/100
  }
});
=======
    state = {
        value: 0,
        checkedExpress: false,
        checkedVege: false,
        checkedHealthy: false,
        checkedDessert: false,
        checkedSaison: false,
        checkedApero: false,
        selectedCategories: []
    };


    onSelectionsChange = (selectedCategories) => {
        this.setState({selectedCategories})
    }

    render() {

        return (
            <View style={styles.globalStyle}>
                {/*Prix*/}
                <View style={styles.priceStyle}>
                    <View>
                        <Text style={styles.textStyle}>Prix</Text>
                    </View>
                    <View>
                        <Slider
                            style={{width: 200, height: 40}}
                            minimumTrackTintColor={"#FFE2C4"}
                            maximumTrackTintColor={"white"}
                            thumbTintColor={"#F0955F"}
                            value={this.state.value}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            onValueChange={value => this.setState({ value })}
                        />
                    </View>
                    <View>
                        <Text style={{color:"white"}}>
                            {this.state.value} €
                        </Text>
                    </View>
                </View>

                {/*Nb personne / Tps cuisson*/}
                <View style={styles.nbPrsnStyle}>
                    <View style={styles.nbStyle}>
                        <Text style={styles.textStyle}>Nombre de personnes</Text>
                        <InputSpinner
                            max={10}
                            min={1}
                            step={1}
                            buttonTextColor={'white'}
                            colorLeft={'#F0955F'}
                            colorRight={'#F0955F'}
                            textColor={'white'}
                            editable={false}

                            value={this.state.number}
                            onChange={(num) => {
                                console.log(num);
                            }}
                        />
                    </View>
                    <View style={styles.timeStyle}>
                        <Text style={styles.textStyle}>Temps de cuisson</Text>
                        <SwitchSelector
                            options={optionsCuisson}
                            initial={0}
                            buttonColor={'#F0955F'}
                            onPress={value => console.log(`Call onPress with value: ${value}`)}
                        />
                    </View>
                </View>

                {/*Difficulté*/}
                <View style={styles.difficultyStyle}>
                    <Text style={styles.textStyle}>Difficulté</Text>
                    <SwitchSelector
                        options={optionsDifficulte}
                        initial={0}
                        buttonColor={'#F0955F'}
                        onPress={value => console.log(`Call onPress with value: ${value}`)}
                    />
                </View>

                {/*Catégorie*/}
                <View style={styles.categoriesStyles}>
                    <Text style={styles.textStyle}>Categories</Text>
                    <View style={styles.firstRow}>
                        <CheckBox
                            title='Express'
                            checked={this.state.checkedExpress}
                            checkedColor={'#F0955F'}
                            checkedIcon={'check-circle'}
                            uncheckedIcon={'circle'}
                            uncheckedColor={'#F0955F'}
                            containerStyle={{backgroundColor:'#293845', borderWidth:0, width:100, height: 40,marginTop: 10, marginRight: 10}}
                            textStyle={{color:'#F1D397'}}
                            onIconPress={() => this.setState({checkedExpress: !this.state.checkedExpress})}
                            onPress={() => this.setState({checkedExpress: !this.state.checkedExpress})}
                        />
                        <CheckBox
                            title='Végé'
                            checked={this.state.checkedVege}
                            checkedColor={'#F0955F'}
                            checkedIcon={'check-circle'}
                            uncheckedIcon={'circle'}
                            uncheckedColor={'#F0955F'}
                            containerStyle={{backgroundColor:'#293845', borderWidth:0, width:80, height: 40,marginTop: 10, marginRight: 10}}
                            textStyle={{color:'#F1D397'}}
                            onIconPress={() => this.setState({checkedVege: !this.state.checkedVege})}
                            onPress={() => this.setState({checkedVege: !this.state.checkedVege})}
                        />
                    </View>
                    <View style={styles.firstRow}>
                        <CheckBox
                            title='Healthy'
                            checked={this.state.checkedHealthy}
                            checkedColor={'#F0955F'}
                            checkedIcon={'check-circle'}
                            uncheckedIcon={'circle'}
                            uncheckedColor={'#F0955F'}
                            containerStyle={{backgroundColor:'#293845', borderWidth:0, width:100, height: 40,marginTop: 10, marginRight: 10}}
                            textStyle={{color:'#F1D397'}}
                            onIconPress={() => this.setState({checkedHealthy: !this.state.checkedHealthy})}
                            onPress={() => this.setState({checkedHealthy: !this.state.checkedHealthy})}
                        />
                        <CheckBox
                            title='Dessert'
                            checked={this.state.checkedDessert}
                            checkedColor={'#F0955F'}
                            checkedIcon={'check-circle'}
                            uncheckedIcon={'circle'}
                            uncheckedColor={'#F0955F'}
                            containerStyle={{backgroundColor:'#293845', borderWidth:0, width:100, height: 40,marginTop: 10, marginRight: 10}}
                            textStyle={{color:'#F1D397'}}
                            onIconPress={() => this.setState({checkedDessert: !this.state.checkedDessert})}
                            onPress={() => this.setState({checkedDessert: !this.state.checkedDessert})}
                        />
                    </View>
                    <View style={styles.firstRow}>
                        <CheckBox
                            title='Saison'
                            checked={this.state.checkedSaison}
                            checkedColor={'#F0955F'}
                            checkedIcon={'check-circle'}
                            uncheckedIcon={'circle'}
                            uncheckedColor={'#F0955F'}
                            containerStyle={{backgroundColor:'#293845', borderWidth:0, width:100, height: 40,marginTop: 10, marginRight: 10}}
                            textStyle={{color:'#F1D397'}}
                            onIconPress={() => this.setState({checkedSaison: !this.state.checkedSaison})}
                            onPress={() => this.setState({checkedSaison: !this.state.checkedSaison})}
                        />
                        <CheckBox
                            title='Apéro'
                            checked={this.state.checkedApero}
                            checkedColor={'#F0955F'}
                            checkedIcon={'check-circle'}
                            uncheckedIcon={'circle'}
                            uncheckedColor={'#F0955F'}
                            containerStyle={{backgroundColor:'#293845', borderWidth:0, width:100, height: 40, marginTop: 10, marginRight: 10}}
                            textStyle={{color:'#F1D397'}}
                            onIconPress={() => this.setState({checkedApero: !this.state.checkedApero})}
                            onPress={() => this.setState({checkedApero: !this.state.checkedApero})}
                        />
                    </View>
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    globalStyle:{
        flex: 1,
    },
    textStyle:{
        color: "#F1D397",
        marginBottom: 10,
        marginTop: 10,
    },
    priceStyle:{
        flex: 1,
        flexDirection: 'row',
        //backgroundColor:'red',
    },
    nbPrsnStyle:{
        flex: 3,
        flexDirection: 'row',
        //backgroundColor:'blue',
    },
    difficultyStyle:{
        flex: 3,
        //backgroundColor:'yellow',
    },
    categoriesStyles:{
        flex: 5,
        //backgroundColor:'green',
        marginBottom: 10,
    },
    firstRow:{
        flex: 1,
        flexDirection: 'row',
    },
    nbStyle:{
        flex: 1,
        marginRight: 10,
        //backgroundColor: 'purple',
    },
    timeStyle:{
        flex: 1,
        marginLeft: 10,
        //backgroundColor: 'pink',
    },
});
>>>>>>> origin/raphael
