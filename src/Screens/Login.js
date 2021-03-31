
import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button,Alert,ImageBackground  } from 'react-native'
import Firebase from '../Firebase/firebase'
import Background from '../image/Patern1_travers.png';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    handleLogin = () => {
        const { email, password } = this.state

        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => Alert.alert("Alert","connecté"))
            .catch(error =>  Alert.alert("Alert",error.toString()))
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={Background} style={styles.backgroundImage}>
                    <View style={styles.inputcontainer}>
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
                            placeholder='Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
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
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 7,
        alignItems: 'center',
        backgroundColor: '#202c39',
        borderColor: '#202c39',
        borderWidth: 1,
        borderRadius: 28,
        width: 200
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
        width: '100%'
    },
    logocontainer:{
        borderWidth: 4,
        borderColor: 'pink'
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Login