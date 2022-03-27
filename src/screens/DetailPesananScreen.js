import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'

export default function DetailPesananScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#d7f5f4'}}>
            <View style={styles.tampilan}>
                <Text style={styles.teks1}>BERHASIL DIPROSES</Text>
                <Image style={styles.image} source={require('../picture/ceklis.png')}></Image>
                <Text style={styles.teks2}>Hati Hati di Jalan :)</Text>
            </View>
            <TouchableOpacity style = { styles.Btn } onPress={()=>navigation.navigate('Pembatalan')}>
                <Text style ={styles.teksBtn}>Batalkan Pesanan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    tampilan: {
        width: 250,
        height:250,
        backgroundColor:'white',
        alignItems: 'center',
        flexDirection:'column',
        marginBottom:50,
        marginTop:100,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius:100,
        alignItems: 'center',
        marginTop:30,
        marginBottom: 55,
    },
    teks1: {
        fontSize:13,
        fontWeight:'900',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        marginTop:10,
    },
    teks2: {
        fontSize:13,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },
    Btn: {
        width: 130,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bf1d1d",
        marginTop:100,
    },
    teksBtn: {
        color: "#FFFFFF",
        fontSize:13,
        fontWeight:'bold',
        fontFamily: 'monospace',
    },
});