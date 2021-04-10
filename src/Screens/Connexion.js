import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

class Connexion extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.first_container}>
                    <Image
                        style={styles.image}
                        source={{uri:"logo"}}
                    />
                    <Text style={styles.slogan}> Slogan de notre application </Text>
                </View>
                <View style={styles.second_container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => []}
                    >
                        <Text style={styles.textCommencer}>Commencer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => []}
                    >
                        <Text style={styles.textCompte}> J'ai déjà un compte </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.third_container}>
                    <Text> Expression de grand-parents qui change </Text>
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
        flex: 3,
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    second_container: {
        flex: 3,
        //backgroundColor: 'red',
        alignItems: 'center',
    },
    third_container: {
        flex: 1,
        //backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 180,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    slogan: {
        fontSize: 18,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#4DAAFC",
        padding: 20,
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 40,
    },
    textCommencer: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    textCompte: {
        fontSize: 20,
    }
})

export default Connexion