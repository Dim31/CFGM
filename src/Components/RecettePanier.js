import React from 'react'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'


export default class RecettePanier extends React.Component {

    render() {
        return (
            <View style={styles.toutDetailsRecettePanier}>

                <Image style={styles.ImageRecette} source={{uri: this.props.imgurl}}/>

                <View style={styles.flex2}>
                    <View style={styles.conteneurHaut}>

                        <View style={styles.detailRecette}>
                            <Text> {this.props.titre} </Text>
                            <Text> {this.props.prix}  </Text>
                        </View>



                        <View style={styles.formQuantite}>
                            <View style={styles.buttonModificationQuantite}>
                                <Text>-</Text>
                            </View>
                            <Text> {this.props.quantite} </Text>
                            <View style={styles.buttonModificationQuantite}>
                                <Text>+</Text>
                            </View>
                        </View>

                        <Text> {this.props.prix}  </Text>

                        <Image style={styles.logoPoubelle}
                               source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0-YQyr1vfHUPz0j3DgiocNWVE3Eak6lCyx9ujBLn_M62-LeF9EFVLzDO4A&usqp=CAc'}}/>

                    </View>
                    <View style={styles.conteneurBas}>

                        <Text> Modifier les produits </Text>
                        <Image style={styles.logoEtendre}
                               source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_ejEOaJqq2YQcpxpDipoitjDSV4nfJZHiA&usqp=CAU'}}/>
                    </View>
                </View>

            </View>
        )
    }


}

var allWidth = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    toutDetailsRecettePanier: {
        flexDirection: 'row',
        width: allWidth / 100 * 90,
        marginTop: 50
    },
    ImageRecette: {
        flex: 1,
        height: 150,
        width: 150,
    },
    logoEtendre: {
        height: 25,
        width: 25,
        alignSelf: 'center'
    },
    flex2: {
        flex: 2,
    },
    conteneurHaut: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formQuantite: {
      flexDirection: 'row',
    },
    conteneurBas: {
        alignSelf: 'center'
    },

    buttonModificationQuantite: {
        borderWidth: 1,
        borderColor: '#000000',
        width: 20,
        height: 20,
    },
    logoPoubelle: {
        height: 25,
        width: 25
    }
})
