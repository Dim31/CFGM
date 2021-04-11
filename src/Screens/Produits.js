import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, FlatList, ImageBackground, TouchableOpacity, Text} from 'react-native';
import ProduitItem from '../Components/ProduitItem';
import { SearchBar, Button } from 'react-native-elements';
import backgroundImage from "../image/Patern2_travers2.png";
import Icon from 'react-native-vector-icons/Octicons';

const data = [
  {key: 'A', titre: 'Tomate',producteur:'Nom du producteur',image:'https://img.cuisineaz.com/680x357/2018-04-14/i139355-tomates.jpeg'},
  {key: 'B', titre: 'Fraise',producteur:'Nom du producteur',image:'https://grandest.mutualite.fr/content/uploads/sites/45/2020/05/Cover-FRAISES-730x480.jpg'},
  {key: 'C', titre: 'Carotte',producteur:'Nom du producteur',image:'https://www.semaille.com/9016-large_default/carotte-nantaise-2.jpg'},
  {key: 'D', titre: 'Oeuf',producteur:'Nom du producteur',image:'https://cdn.bioalaune.com/img/article/thumb/900x500/29095-6_bonnes_raisons_de_manger_des_oeufs_regulierement.jpg'},
]

class Produit extends React.Component {
  state = {
    search: '',
  };
  updateState = (search) => {
    this.setState({search});
  };
  render(){
    const {search} = this.state;
    var produits = [];
    for(let i = 0;i < 10; i++){
      produits.push(
        <View key = {i}>
          <ProduitItem/>
        </View>
      )
    }
    return(
      <ImageBackground source={backgroundImage} style={styles.backgroudImage}>
        <ScrollView>
          <View style={styles.search_container}>
            <SearchBar
              containerStyle={styles.searchBar_container}
              inputContainerStyle={styles.searchBar_input}
              placeholder="Tomate"
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
          <FlatList
            data={data}
            renderItem={({item})=> <ProduitItem produit={item}/>}
            numColumns={2}
          />
        </ScrollView>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
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
})

export default Produit;
