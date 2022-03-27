import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

export default function PesananScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor:'#d7f5f4'}}>
            <Text style={styles.teks}>History..</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    teks:{
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        marginTop:10,
    },
});