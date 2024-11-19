import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export function Form() {
    const handlerCallBatman = () => {
        Alert.alert("Batman is coming!");
    };

    return (
        <LinearGradient colors={["#280659", "#1b0033"]} style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={require("../../../assets/logo.png")} style={styles.logo} />
                <Text style={styles.title}>🦇🦇 Form from Batman 🦇🦇</Text>
                <TextInput style={styles.input} placeholder="Nome" />
                <TextInput style={styles.input} placeholder="Telefone" />
                <TextInput style={styles.input} placeholder="Localização" />
                <TextInput style={styles.input} placeholder="Observação" />

                <TouchableOpacity style={styles.button} onPress={handlerCallBatman}>
                    <Text style={styles.buttonText}>⚡⚡ Call Batman ⚡⚡</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    innerContainer: {
        width: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        color: "white",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "yellow",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    logo: {
        width: 375,
        height: 159,
        marginBottom: 20,
    },
});
