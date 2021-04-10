import React from 'react'
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {Avatar} from "react-native-elements";
import pattern2_travers from "../image/Patern2_travers.png";
import call from "../image/call.png"
import woman from "../image/woman.png"
import email from "../image/email.png"
import localisation from "../image/location-pin.png"
import none from "../image/traffic-signal.png"
import vege from "../image/vegetarian.png"
import pencil from "../image/pencil.png"
import paypal from "../image/paypal.png"
import visa from "../image/visa.png"
import applepay from "../image/apple-pay.png"
import mastercard from "../image/mastercard.png"
import arrow from "../image/right-arrow.png"
import Dash from "react-native-dash";

class Compte extends React.Component {
    state = {
        index: 0
    }
    updateIndex = (index) => {
        this.setState({index})
    }

    render() {
        const {selectedIndex} = this.state
        return (
            <SafeAreaView style={styles.main_container}>
                <ImageBackground source={pattern2_travers} style={styles.patternStyle}>
                    {/*En-tete*/}
                    {/*
                    <View style={styles.enTeteView}>
                        <ImageBackground source={en_tete} style={styles.enTeteStyle}/>
                    </View>
                    */}
                    <ScrollView style={styles.scrollView}>
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
                            {/*Informations*/}
                            <View style={styles.informations}>
                                <Text style={styles.title}>Informations:</Text>
                                <View style={styles.bi_icons}>
                                    <View style={styles.iconLeft}>
                                        <Image source={call} style={styles.image}/>
                                        {/*Numero en BDD*/}
                                        <Text style={styles.text}>06.07.09.34.23</Text>
                                    </View>
                                    <View style={styles.iconRight}>
                                        <Image source={woman} style={styles.image}/>
                                        {/*Nombre de personnes dans le foyer en BDD*/}
                                        <Text style={styles.text}>1 personne</Text>
                                    </View>
                                </View>
                                <View style={styles.bi_icons}>
                                    <View style={styles.iconLeft}>
                                        <Image source={email} style={styles.image}/>
                                        {/*Email en BDD*/}
                                        <Text style={styles.text}>melissa.coste@gmail.com</Text>
                                    </View>
                                    <View style={styles.iconRight}>
                                        <Image source={none} style={styles.image}/>
                                        {/*Allergies en BDD*/}
                                        <Text style={styles.text}>Aucune allergie</Text>
                                    </View>
                                </View>
                                <View style={styles.bi_icons}>
                                    <View style={styles.iconLeft}>
                                        <Image source={localisation} style={styles.image}/>
                                        {/*Adresse en BDD*/}
                                        <Text style={styles.text}>12 rue de la poste {"\n"} 32000 Toulouse</Text>
                                    </View>
                                    <View style={styles.iconRight}>
                                        <Image source={vege} style={styles.image}/>
                                        {/*Régime en BDD*/}
                                        <Text style={styles.text}>Végétarienne</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.modify}>
                                    <Image source={pencil} style={styles.image}/>
                                    <Text style={styles.text}>Modifier mes informations</Text>
                                </TouchableOpacity>
                                <Dash dashGap={10} dashLength={10} dashThickness={1} dashColor={'#F0955F'}
                                      style={{marginTop: 20}}/>
                            </View>
                            {/*Mes commandes*/}
                            <View style={styles.informations}>
                                <Text style={styles.title}>Mes commandes:</Text>
                                {/*TODO : Component à faire*/}
                                <Dash dashGap={10} dashLength={10} dashThickness={1} dashColor={'#F0955F'}
                                      style={{marginTop: 20}}/>
                            </View>
                            {/*Mes moyens de paiement*/}
                            <View style={styles.informations}>
                                <Text style={styles.title}>Mes moyens de paiement:</Text>
                                <View style={styles.bi_icons}>
                                    <TouchableOpacity style={styles.bi_icons}><Image source={paypal}
                                                                                     style={styles.paymentLogo}/></TouchableOpacity>
                                    <TouchableOpacity style={styles.bi_icons}><Image source={visa}
                                                                                     style={styles.paymentLogo}/></TouchableOpacity>
                                    <TouchableOpacity style={styles.bi_icons}><Image source={applepay}
                                                                                     style={styles.paymentLogo}/></TouchableOpacity>
                                    <TouchableOpacity style={styles.bi_icons}><Image source={mastercard}
                                                                                     style={styles.paymentLogo}/></TouchableOpacity>
                                </View>
                            </View>
                            {/*Coups de coeur*/}
                            <View style={styles.informations}>
                                <Text style={styles.title}>Coups de coeur:</Text>
                                <Text>
                                    {/*TODO : Component à faire*/}
                                </Text>
                            </View>
                            {/*Parametres/Informations*/}
                            <View style={styles.informations}>
                                <TouchableOpacity style={styles.bi_icons}>
                                    <Text style={styles.buttonParameter}>Paramètres</Text>
                                    <Image source={arrow} style={styles.image}/>
                                </TouchableOpacity>
                                <Dash dashGap={0} dashLength={10} dashThickness={1} dashColor={'#707070'}/>
                                <TouchableOpacity style={styles.bi_icons}>
                                    <Text style={styles.buttonParameter}>Informations</Text>
                                    <Image source={arrow} style={styles.image}/>
                                </TouchableOpacity>
                                <Dash dashGap={0} dashLength={10} dashThickness={1} dashColor={'#707070'}/>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        //backgroundColor: 'yellow',
        //marginTop: 30,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingBottom: Platform.OS === 'android' ? 80 : 0,
    },
    patternStyle: {
        resizeMode: 'stretch',
        height: '100%',
        width: '100%',
    },
    enTeteStyle: {
        resizeMode: 'stretch',
        height: '100%',
        width: '100%',
    },
    enTeteView: {
        //backgroundColor: 'pink',
        flex: 0.2,

    },
    avatarView: {
        //backgroundColor: 'purple',
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    contenuView: {
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 20,
        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    scrollView: {
        //backgroundColor: 'pink',
        flex: 1,
    },
    title: {
        fontSize: 14,
        marginBottom: 10,
    },
    text: {
        fontSize: 11,
        flexWrap: 'wrap',
        top: 10,
        left: 10,
    },
    image: {
        width: 13,
        height: 13,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 2,
        marginBottom: 10,
    },
    informations: {
        flex: 1,
        //backgroundColor: 'pink',
        margin: 15,
    },
    bi_icons: {
        flex: 1,
        flexDirection: 'row',
        //flexWrap: 'wrap',
    },
    iconLeft: {
        flex: 3,
        flexDirection: 'row',
    },
    iconRight: {
        flex: 2,
        flexDirection: 'row',
        //flexWrap: 'wrap',
    },
    modify: {
        flex: 1,
        flexDirection: 'row',
        opacity: .40,
    },
    paymentLogo: {
        width: 46,
        height: 46,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 2,
        marginBottom: 10,
    },
    buttonParameter: {
        fontSize: 20,
        color: '#707070',
    },
    buttonParameterArrowBox: {
        flex: 1,
    }
})

export default Compte
