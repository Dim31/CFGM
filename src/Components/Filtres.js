import React from 'react'
import {AppRegistry, StyleSheet, Text, View} from 'react-native'
import Slider from "@react-native-community/slider";
import SwitchSelector from "react-native-switch-selector";
import InputSpinner from "react-native-input-spinner";
import {CheckBox} from "react-native-elements";


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