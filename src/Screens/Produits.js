import React, { Component } from 'react';
import { View,StyleSheet,ScrollView,FlatList} from 'react-native';
import ItemProduit from '../Components/ItemProduit';
import { SearchBar, Button } from 'react-native-elements';
const data = [
  {titre: 'Nouilles',producteur:'moi le boss',image:'https://cdn.pixabay.com/photo/2018/12/24/19/28/japanese-noodles-3893449_960_720.png'},
  {titre: 'Sushi',producteur:'moi le boss',image:'https://lh3.googleusercontent.com/proxy/htRguiMuB1HV1SGwhAw6gn-AS4IHkXEy-DGzA3Z8Lu3SNHjTuNBBBmyfVORbOd_MqP32fbdu8kUJn5bw9l4jAqugiT-1YbjrIs9PxSW_5M5PqJPWk24xj4A1BMA'},
  {titre: 'chien chaud',producteur:'moi le boss',image:'https://images.emojiterra.com/google/android-pie/512px/1f32d.png'},
  {titre: 'fat burger',producteur:'moi le boss',image:'https://www.fatburgercanada.com/wp-content/uploads/2015/07/king-burger-541x633.png'},
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
          <ItemProduit/>
        </View>
      )
    }
    return(
      <View style={{marginTop:20}}>
        <ScrollView>
          <View style={styles.top}>
            <SearchBar
              placeholder="Recherchez..."
              onChangeText={this.updateState}
              value={search}
              containerStyle={styles.searchBarBox}
              inputContainerStyle={styles.searchBar}
            />
            <Button
              title="Filtres"
              type="outline"
              buttonStyle={styles.bouton}
            />

          </View>
          <View style={styles.container}>
            <FlatList
              data={data}
              renderItem={({item})=> <ItemProduit produit={item}/>}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  top:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-around',
    padding:10,
  },
  container: {
      alignItems:'center',
  },
  searchBarBox: {
    margin:5,
    width:200,
    backgroundColor:'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBar:{
    backgroundColor:'white',
    borderWidth:1,
    borderRadius:30,
  },
  bouton:{
    paddingHorizontal:30,
    borderRadius:20,
  }
})

export default Produit;
