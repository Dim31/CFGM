import React from 'react'
import { StyleSheet,VirtualizedList, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity , FlatList} from 'react-native'

// Icones
import icon_coeur_orange from '../image/icon_coeur_orange.png';
import icon_panier_orange from '../image/icon_panier_orange.png';

// To Remove log
import { LogBox } from 'react-native'
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

//import Video from 'react-native-video'
import {Video} from 'expo-av'
import { WebView } from 'react-native-webview';

import ProduitLittleItem from '../Components/ProduitLittleItem'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const numColumns = 2;
const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }
    return data;
};



class RecetteDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }


  componentDidMount() {
    console.log("componentDidMount");
    // Appel à l'API pour détails
    // getRecetteDetailFromApi(this.props.route.params.idRecette).then(data => {
    //   this.setState({
    //     recette: data,
    //     isLoading: false
    //   })
    // })
  }


  // Video
  onShouldStartLoadWithRequest = (navigator) => {
      if (navigator.url.indexOf('embed') !== -1
      ) {
          return true;
      } else {
          this.videoPlayer.stopLoading(); //Some reference to your WebView to make it stop loading that URL
          return false;
      }
  }

  _getAllIngredient(item){
    let allIngredient = []
    let contIngredient = 1

    while (item["strIngredient" + contIngredient] != ""){
      allIngredient.push({
        "id" : contIngredient.toString() ,
        "ingredient": item['strIngredient' + String(contIngredient)],
      })
      contIngredient++
    }


    return allIngredient

  }

  // Rendu Items Produits
  renderItem = (item) => {
      if (item === undefined) {
          return <View style={[styles.item, styles.itemInvisible]} />;
      }
      return (
          <View style={styles.item} >
              <ProduitLittleItem produit={item} afficherDetailsProduit={this._afficherDetailsProduit} />
          </View>
      );
  };

  _afficherDetailsProduit = (item) => {
    this.props.navigation.navigate("ProduitDetails", {item: item})
  }

  // Affichage
  _displayRecette(item) {
    const recette = this.state.recette
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    //if (recette != undefined) {
    if (item != []) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{uri:item.strMealThumb}}
          />
          <Text style={styles.title_text}>{item.strMeal}</Text>

          <View style={styles.firstPart_container}>
            <View style={styles.ajouts_container}>
              <TouchableOpacity>
                <Image
                  style={styles.imageCoeur}
                  source={icon_coeur_orange}
                />
              </TouchableOpacity>
              <Text style={styles.text_text}></Text>
              <TouchableOpacity>
                <Image
                  style={styles.imagePanier}
                  source={icon_panier_orange}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.infos_container}>
              <Text>Difficulté</Text>
              <Text style={styles.text_text}></Text>
              <Text>Prix</Text>
            </View>
            <View style={styles.infos_container}>
              <Text> X X X</Text>
              <Text style={styles.text_text}></Text>
              <Text>{getRandomInt(8,60)}€</Text>
            </View>
            <Text style={styles.description_text}>C'est l'heure du goûter les enfants !</Text>
          </View>



          <WebView
              ref={(ref) => { this.videoPlayer = ref;}}
              scalesPageToFit={true}
              source={{ html: '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&playsinline=1&showinfo=0&rel=0" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>'}}
              onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} //for iOS
              onNavigationStateChange ={this.onShouldStartLoadWithRequest} //for Android
              //style={styles.videoPlayer}
          />
          <WebView
            //allowsFullscreenVideo
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction
            //source={{ uri: 'https://youtu.be/dQw4w9WgXcQ' }}
            //source = {{ uri: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ?modestbranding=1&playsinline=1&showinfo=0&rel=0'}}
            //style={styles.videoPlayer}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            embed
          />

          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4 // https://www.youtube.com/watch?v=dQw4w9WgXcQ
            rate={1.0}
            volume={0.2}
            isMuted={true}
            resizeMode="cover"
            isLooping
            style={styles.videoPlayer}
            onBuffer={this.onBuffer} // nécéssaire ?
            onError={this.onError} // nécéssaire ?
            useNativeControls
          />
          <View style={styles.infosUtiles_container}>
            <View style={styles.infosUtiles_item}>
              <Text style={ styles.infosUtiles_titres}>Personnes</Text>
              <Text style={ styles.infosUtiles_text}>{getRandomInt(1,10)}</Text>
            </View>
            <View style={styles.infosUtiles_item}>
              <Text style={ styles.infosUtiles_titres}>Temps</Text>
              <Text style={ styles.infosUtiles_text}>{getRandomInt(5,60)} min</Text>
            </View>
            <View style={styles.infosUtiles_item}>
              <Text style={ styles.infosUtiles_titres}>Ustensiles</Text>
              <Text style={ styles.infosUtiles_text}>O V C</Text>
            </View>
          </View>

          <FlatList
              data={this._getAllIngredient(item)}
              //style={styles.produitsFlatList_container}
              contentContainerStyle={styles.produitsFlatList_container}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              numColumns= {numColumns}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                this.renderItem(item)
              )}

          />

          <View style={styles.etapes_container}>
            <Text>{item.strInstructions}</Text>
            </View>
        </ScrollView>
      )
    }

    /*

          <Text style={styles.title_text}>{film.title}</Text>
          <Text style={styles.description_text}>{film.overview}</Text>
          <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
          <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
          <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
          <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
          <Text style={styles.default_text}>Genre(s) : {film.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}
          </Text>
          <Text style={styles.default_text}>Companie(s) : {film.production_companies.map(function(company){
              return company.name;
            }).join(" / ")}
          </Text>
        </ScrollView>
      )
    }
    */
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }



  render() {
    console.log("render");

    const item = this.props.route.params.item;
    //const idRecette = this.props.navigation.getParam(idRecette);
    console.log("id recette"+ item.idMeal);

    return (
      <View style={styles.main_container}>
        {this._displayRecette(item)}
        {
          //this._displayLoading()
        }
      </View>
    )
  }

  onBuffer = () => {
   //TODO : ajouter un comportement durant le chargement de la vidéo. Particulièrement utile lors du chargement d'une vidéo en ligne.
  }
  onError = () => {
     //TODO : ajouter un comportement si la vidéo ne se charge pas (là aussi pour les vidéos en ligne)
  }
}


const widthAddIcons = 45;
const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    //margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    marginTop: 15,
    textAlign: 'center',
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },



  firstPart_container: {
    padding: 35,
    paddingBottom: 25,
  },

  ajouts_container: {
    flexDirection: 'row',
    // paddingLeft: 10,
    // paddingRight: 10,
    marginTop: -10,
    marginBottom: 20,
  },
  imagePanier: {
    width: widthAddIcons,
    height: widthAddIcons,
  },
  imageCoeur: {
    width: widthAddIcons,
    height: widthAddIcons,
  },
  text_text: {
    flex: 1
  },

  infos_container: {
    flexDirection: 'row',
  },


  videoPlayer: {
    height:200,
    marginBottom: 25,
  },

  infosUtiles_container: {
    flexDirection: 'row',
    flex: 1,
    paddingRight: 50,
    paddingLeft: 50,
    justifyContent: 'space-between',
  },
  infosUtiles_item: {
    textAlign: 'center',
  },
  infosUtiles_titres: {
    textAlign: 'center',
    marginBottom: 8,
  },
  infosUtiles_text: {
    textAlign: 'center',
    borderRadius: 10,
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#F0955F',
    color: '#FFFFFF',
    overflow:'hidden',alignSelf: 'center'
  },


  produitsFlatList_container: {
      flex: 1,
      margin: 20,

  },
  item: {

  },



  etapes_container: {
    flex: 1,
    padding: 30,
    paddingTop: 10,
  },
  etapes_title: {
    fontWeight: 'bold',
    fontSize: 25,
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 25,
    marginBottom: 15,
    color: '#F0955F',
    textAlign: 'center'
  }
})

export default RecetteDetails
