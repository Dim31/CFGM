import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ButtonGroup, Avatar } from "react-native-elements";

class Compte extends React.Component {
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
                <View style={styles.second_container}>
                    <View style={styles.icon_container}>
                        <Avatar
                            size={120}
                            rounded
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.menu_container}>
                        <TouchableOpacity>
                            <Text style={styles.text_menu}> Mes commandes </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text_menu}> Moyen de paiement </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text_menu}> Préférences </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text_menu}> Paramètres </Text>
                        </TouchableOpacity>
                    </View>
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
    text_menu: {
        fontSize: 20,
        marginTop: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        padding: 20,
    },
    icon_container: {
        flex: 1,
        //backgroundColor: '#954DFC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu_container: {
        flex: 2,
        //backgroundColor: '#FC4DF1',
    }
})

export default Compte
