import React from 'react'
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native'

export default class BarreDeNavigation extends React.Component {


    _goToRecettePage() {
        this.props.navigation.navigate("Recette")
    }

    render() {

        return (
            <View style={styles.barreDeNavigation}>


                <View style={styles.ItemDeNavigaton}>
                    <Image style={styles.icon}
                           source={{uri: 'data:image/jpeg;base64,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'}}/>
                </View>


                <TouchableOpacity style={styles.ItemDeNavigaton} onPress={() => this._goToRecettePage()}>
                    <Image style={styles.icon}
                           source={{uri: 'data:image/jpeg;base64,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'}}/>
                </TouchableOpacity>

                <View style={styles.ItemDeNavigaton}>
                    <Image style={styles.icon}
                           source={{uri: 'data:image/jpeg;base64,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'}}/>
                </View>

                <View style={styles.ItemDeNavigaton}>
                    <Image style={styles.icon}
                           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlUnHOO8B9gKhdHEk3KI7dxubl13t1IlG_A&usqp=CAU'}}/>
                </View>


            </View>
        )
    }


}

var allWidth = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    barreDeNavigation: {
        width: allWidth,
        height: 60,
        borderWidth: 1,
        borderColor: '#000000',
        flexDirection: 'row',
    },
    ItemDeNavigaton: {
        flex: 1,
        justifyContent: 'center',
        left: 25,
    },
    icon: {
        height: 40,
        width: 40,
    }
})
