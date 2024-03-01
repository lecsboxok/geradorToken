import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";


export function Home() {
    return (
        <View style={ESTILO.container}>
            <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
            <Text>
                Meu app!
            </Text>
            <View style={ESTILO.area}>
                <Slider style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    minimumTrackTintColor="#ff0000"
                    maximumTrackTintColor="#000"
                    thumbTintColor="#392de9" />
            </View>
            <TouchableOpacity style={ESTILO.button}>
                <Text style={ESTILO.buttonText}>
                    Gerar Senha
                </Text>
            </TouchableOpacity>
        </View>

    )
};

const ESTILO = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f3f3ff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 60
    },
    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8
    },
    button: {
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
      buttonText: {
        color: "#FFF"
      }

})