import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons/'
import * as Clipboard from 'expo-clipboard';


export function CaixaToken({token, removerToken}) {

    async function copiarToken() {
        await Clipboard.setStringAsync(token)
        alert("Token copiado para área de transferência.")
    }

    return (
        <Pressable style={ESTILOS.caixa} >
            <Text style={ESTILOS.text} selectable={false} onLongPress={copiarToken}>
                {token}
            </Text>
            <Ionicons size={20} color={"#fff"} name="trash" onPress={removerToken}/>
        </Pressable>

    )

}

const ESTILOS = StyleSheet.create({
    caixa:{
        backgroundColor:"#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        color:"#FFFFFF"
    }
})