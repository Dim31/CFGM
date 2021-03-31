import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { ButtonGroup } from "react-native-elements";
import BarreDeNavigation from "../Components/BarreDeNavigation";

class Aide extends React.Component {
    state = {
        index: 0
    }
    updateIndex = (index) => {
        this.setState({index})
    }


    render() {
        const { selectedIndex } = this.state
        return (
            <View style={styles.main_container}>
                <View style={styles.first_container}></View>
                <View style={styles.second_container}>
                    <TouchableOpacity>
                        <Text style={styles.menu}> Qui sommes nous ? </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.menu}> Producteurs </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.menu}> Contact / Aide </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.third_container}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={['Accueil', 'Panier', 'Compte', '?']}
                        containerStyle={{height: 60, marginLeft: 0, marginRight: 0, marginTop: 0, marginBottom: 0, backgroundColor: '#FC9F4D'}} />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        //backgroundColor: 'yellow',
        marginTop: 30,
    },
    first_container: {
        flex: 2.5,
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    second_container: {
        flex: 8,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },
    third_container: {
        flex: 1,
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        fontSize: 30,
        marginBottom: 30,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        padding: 20,
    }
})

export default Aide