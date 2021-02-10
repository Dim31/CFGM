import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator, TouchableOpacity} from 'react-native'


export default class Accueil extends React.Component {
  _goToRecettePage() {
    this.props.navigation.navigate("Recette")
  }

  render() {
    return (
      <View>
      <TouchableOpacity   onPress={() => this._goToRecettePage()}>
        <View>
          <View>
            <Text style={[{ marginTop: 50}]}>Aller vers recette</Text>
          </View>
        </View>
      </TouchableOpacity>
      </View>
    )
  }
}
