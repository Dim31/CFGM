import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from "react-native"
import Logo_6 from '../image/Logo_6.png'
import pattern1_travers from '../image/Patern1_travers.png'

class Connexion extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <ImageBackground source={pattern1_travers} style={styles.patternStyle}>
                <View style={styles.first_container}>
                    <Image
                        style={styles.image}
                        source={Logo_6}
                    />
                </View>
                <View style={styles.second_container}>
                    <Text style={styles.slogan}> Cuisinez local ! </Text>
                    <Text style={styles.sousSlogan}> C'est le moment de mettre les pieds dans le plat ! </Text>
                </View>
                <View style={styles.third_container}>
                    <TouchableOpacity
                        style={styles.buttonBegin}
                        onPress={() => []}
                    >
                        <Text style={styles.textBegin}>Commencer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonAlready}
                        onPress={() => []}
                    >
                        <Text style={styles.textAlready}> J'ai déjà un compte </Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#F1D397',
        marginTop: 30,
    },
    first_container: {
        flex: 1,
        marginTop: 30,
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    second_container: {
        flex: 0.25,
        //backgroundColor: 'red',
        alignItems: 'center',
    },
    third_container: {
        flex: 1,
        //backgroundColor: 'green',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'stretch',
        //width: 210,
        //height: 205,
        width: 150,
        height: 150,
        margin: 5,
        backgroundColor: 'transparent'
    },
    slogan: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#293845',
    },
    sousSlogan: {
        fontSize: 15,
        color: '#293845',
    },
    buttonBegin: {
        alignItems: "center",
        backgroundColor: "#293845",
        padding: 20,
        borderRadius: 50,
        borderWidth: 1,
        marginTop: 40,
        width: 230,
    },
    buttonAlready:{
        alignItems: "center",
        backgroundColor: "#F1D397",
        padding: 20,
        borderRadius: 50,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#293845",
        width: 230,
    },
    textBegin: {
        fontSize: 20,
        color: '#fff',
    },
    textAlready: {
        fontSize: 20,
    },
    patternStyle: {
        resizeMode: 'stretch',
        height: '115%',
        width: '100%',
    },
})

export default Connexion