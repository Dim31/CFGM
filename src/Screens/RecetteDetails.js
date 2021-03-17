import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity , FlatList} from 'react-native'

//import Video from 'react-native-video'
import {Video} from 'expo-av'
import { WebView } from 'react-native-webview';

import ProduitItem from '../Components/ProduitItem'

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
      recette: undefined,
      isLoading: true,
      produits: [{ key: 'A', id: 1, nom:'Tomates'}, { key: 'B', id: 2, nom:'Carottes' }, { key: 'C' , id: 3, nom:'Pâte feuilleté'}, { key: 'D' , id: 4, nom:'Chocolat'}],
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

  // Rendu Items Produits
  renderItem = ({ item, index }) => {
      if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
      }
      return (
          <View style={styles.item} >
              <ProduitItem produit={item} afficherDetailsProduit={this._afficherDetailsProduit} />
          </View>
      );
  };

  _afficherDetailsProduit = (idProduit) => {
    this.props.navigation.navigate("ProduitDetails", {idProduit: idProduit})
  }

  // Affichage
  _displayRecette() {
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
    if (this.props.route.params.idRecette != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{uri: "https://recipeimages.migros.ch/crop/v-w-1200-h-630-a-center_center/46bffe3dd0c25933234fd2180eecc6060368e9bf/gateau-au-chocolat-avec-cerises-0-16-9.jpg"}} // getImageFromApi(film.backdrop_path)}
          />
          <Text style={styles.title_text}>Gâteau au chocolat fondant rapide {this.props.route.params.idRecette}</Text>

          <View style={styles.firstPart_container}>
            <View style={styles.ajouts_container}>
              <TouchableOpacity>
                <Image
                  style={styles.imageCoeur}
                  source={{uri: 'https://img.icons8.com/ios/452/hearts--v1.png'}}
                />
              </TouchableOpacity>
              <Text style={styles.text_text}></Text>
              <TouchableOpacity>
                <Image
                  style={styles.imagePanier}
                  source={{uri: 'https://image.flaticon.com/icons/png/512/126/126510.png'}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.infos_container}>
              <Text>Difficulté</Text>
              <Text style={styles.text_text}></Text>
              <Text>Prix</Text>
            </View>
            <View style={styles.infos_container}>
              <Text>xxxx</Text>
              <Text style={styles.text_text}></Text>
              <Text>10,00€</Text>
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
              <Text style={ styles.infosUtiles_text}>2</Text>
            </View>
            <View style={styles.infosUtiles_item}>
              <Text style={ styles.infosUtiles_titres}>Temps</Text>
              <Text style={ styles.infosUtiles_text}>20 min</Text>
            </View>
            <View style={styles.infosUtiles_item}>
              <Text style={ styles.infosUtiles_titres}>Ustensiles</Text>
              <Text style={ styles.infosUtiles_text}>O V C</Text>
            </View>
          </View>

          <FlatList
              data={formatData(this.state.produits, numColumns)}
              style={styles.produitsFlatList_container}
              numColumns= {numColumns}
              renderItem={this.renderItem}

          />

          <View style={styles.etapes_container}>
            <Text style={ styles.etapes_title}>Etape 1</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Justo eget magna fermentum iaculis eu non diam phasellus. Integer quis auctor elit sed vulputate mi sit amet mauris. Aliquet lectus proin nibh nisl condimentum. Sapien et ligula ullamcorper malesuada proin libero nunc. Facilisi etiam dignissim diam quis enim lobortis. Duis ut diam quam nulla porttitor. Non tellus orci ac auctor. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Tellus molestie nunc non blandit massa. Nam at lectus urna duis convallis convallis tellus. Tristique sollicitudin nibh sit amet commodo. Scelerisque felis imperdiet proin fermentum leo vel orci. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet nisl purus in mollis nunc sed. Aliquam purus sit amet luctus venenatis lectus. Sagittis purus sit amet volutpat consequat mauris nunc congue.</Text>
            <Text style={ styles.etapes_title}>Etape 2</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Justo eget magna fermentum iaculis eu non diam phasellus. Integer quis auctor elit sed vulputate mi sit amet mauris. Aliquet lectus proin nibh nisl condimentum. Sapien et ligula ullamcorper malesuada proin libero nunc. Facilisi etiam dignissim diam quis enim lobortis. Duis ut diam quam nulla porttitor. Non tellus orci ac auctor. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Tellus molestie nunc non blandit massa. Nam at lectus urna duis convallis convallis tellus. Tristique sollicitudin nibh sit amet commodo. Scelerisque felis imperdiet proin fermentum leo vel orci. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet nisl purus in mollis nunc sed. Aliquam purus sit amet luctus venenatis lectus. Sagittis purus sit amet volutpat consequat mauris nunc congue.</Text>
            <Text style={ styles.etapes_title}>Etape 3</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Justo eget magna fermentum iaculis eu non diam phasellus. Integer quis auctor elit sed vulputate mi sit amet mauris. Aliquet lectus proin nibh nisl condimentum. Sapien et ligula ullamcorper malesuada proin libero nunc. Facilisi etiam dignissim diam quis enim lobortis. Duis ut diam quam nulla porttitor. Non tellus orci ac auctor. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Tellus molestie nunc non blandit massa. Nam at lectus urna duis convallis convallis tellus. Tristique sollicitudin nibh sit amet commodo. Scelerisque felis imperdiet proin fermentum leo vel orci. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet nisl purus in mollis nunc sed. Aliquam purus sit amet luctus venenatis lectus. Sagittis purus sit amet volutpat consequat mauris nunc congue.</Text>
            <Text style={ styles.etapes_title}>Etape 4</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Justo eget magna fermentum iaculis eu non diam phasellus. Integer quis auctor elit sed vulputate mi sit amet mauris. Aliquet lectus proin nibh nisl condimentum. Sapien et ligula ullamcorper malesuada proin libero nunc. Facilisi etiam dignissim diam quis enim lobortis. Duis ut diam quam nulla porttitor. Non tellus orci ac auctor. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Tellus molestie nunc non blandit massa. Nam at lectus urna duis convallis convallis tellus. Tristique sollicitudin nibh sit amet commodo. Scelerisque felis imperdiet proin fermentum leo vel orci. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet nisl purus in mollis nunc sed. Aliquam purus sit amet luctus venenatis lectus. Sagittis purus sit amet volutpat consequat mauris nunc congue.</Text>
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

    const idRecette = this.props.route.params.idRecette;
    //const idRecette = this.props.navigation.getParam(idRecette);
    console.log("id recette"+ idRecette);

    return (
      <View style={styles.main_container}>
        {this._displayRecette()}
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
  },
  item: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginTop: 20,
      //height: Dimensions.get('window').width / numColumns, // approximate a square *
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
