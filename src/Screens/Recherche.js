import React, {useState} from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Modal, Pressable, Text, Alert, ActivityIndicator, Dimensions, Picker} from 'react-native'
import RecetteItem from '../Components/RecetteItem'
import Filtres from "../Components/Filtres";


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

class Rechercher extends React.Component {
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
    const { modalVisible } = this.state;
    return (
      <View style={styles.main_container}>
        <View style={styles.search_container} >
          <TextInput onSubmitEditing={() => this._searchRecette()} onChangeText={(text) => this._searchTextInputChanged(text)}  style={[styles.textinput, { backgroundColor: 'lightgrey'}]} placeholder='Rechercher'/>

          {/*<Button
            style={styles.buttonFilter}
            title="Filtres"
            color="#0c506a"
            accessibilityLabel="Learn more about this purple button"
          />*/}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setModalVisible(!modalVisible);
            }}
            >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
                <Filtres/>
              </View>
            </View>
          </Modal>
          <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => this.setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Filtres</Text>
          </Pressable>
        </View>


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
    marginTop: 10
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#293845",
    borderRadius: 20,
    padding: 35,
    height: 500,
    width: 330,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonClose: {
    //backgroundColor: "#2196F3",
  },
  buttonOpen: {
    //backgroundColor: "#F194FF",
    justifyContent: "center",
    backgroundColor: "#293845",
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    width : 100,
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },

})

export default Rechercher
