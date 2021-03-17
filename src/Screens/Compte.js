import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { ButtonGroup, Avatar } from "react-native-elements";
import pattern2_travers from "../image/Patern2_travers.png";
import en_tete from "../image/en-tete.png";

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
                <ImageBackground source={pattern2_travers} style={styles.patternStyle}>
                    {/*En-tete*/}
                    <View style={styles.enTeteView}>
                        <ImageBackground source={en_tete} style={styles.enTeteStyle}/>
                    </View>
                    {/*Avatar*/}
                    <View style={styles.avatarView}>
                        <Avatar
                            size={120}
                            rounded
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                        />
                    </View>
                    {/*Contenu*/}
                    <View style={styles.contenuView}>

                    </View>
                </ImageBackground>
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
    patternStyle: {
        resizeMode: 'stretch',
        height: '115%',
        width: '100%',
    },
    enTeteStyle: {
        resizeMode: 'stretch',
        height: '100%',
        width: '100%',
    },
    enTeteView: {
        //backgroundColor: 'pink',
        flex: 1,

    },
    avatarView: {
        //backgroundColor: 'purple',
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contenuView: {
        //backgroundColor: 'green',
        flex: 5,
    }
})

export default Compte
