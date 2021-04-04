import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image, ImageBackground} from 'react-native'
import Firebase from '../Firebase/firebase'
import Background from "../image/Patern1_travers.png";
import Logo from "../image/Logo_6.png";

class Signup extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    handleSignUp = () => {
        const { email, password } = this.state
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error))
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={Background} style={styles.backgroundImage}>
                    <View style={styles.logocontainer}>
                        <Image source={Logo} style={styles.logo}/>
                    </View>
                    <View style={styles.inputcontainer}>
                        <TextInput
                            style={styles.inputBox}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                            placeholder='Nom'
                        />
                        <TextInput
                            style={styles.inputBox}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder='Email'
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={styles.inputBox}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder='Mot de passe'
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                        <Text style={styles.buttonText}>Inscription</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1d397',

        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 28,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#293845",
        padding: 20,
        borderRadius: 50,
        borderWidth: 1,
        marginTop: 40,
        width: 230,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    },
    inputcontainer:{
        width: '100%',
        alignItems: 'center',
    },
    logocontainer:{
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        resizeMode: 'stretch',
        width: 150,
        height: 150,
        margin: 5,
        backgroundColor: 'transparent'
    },

})

export default Signup