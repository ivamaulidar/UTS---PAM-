import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export default function LainnyaScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}>
            <View style={styles.profil}>
                <Text style={styles.teks1}>Acount</Text>
                <Image style={styles.image} source={require('../picture/Profil.png')}></Image>
                <Text style={styles.teks2}>Iva Maulida</Text>
                <Text style={styles.teks2}>119140059</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profil: {
        width:200,
        height:200,
        backgroundColor:'#d7f5f4',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent: 'center',
    },
    teks1:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily: 'monospace',
        color:'black',
    },
    image: {
        height: 80,
        width: 80,
        borderRadius:50,
        alignItems: 'center',
        marginTop:20,
        marginBottom:10,
    },
    teks2:{
        fontSize:15,
        fontFamily: 'monospace',
        color:'black',
        marginBottom:5,
    }
});