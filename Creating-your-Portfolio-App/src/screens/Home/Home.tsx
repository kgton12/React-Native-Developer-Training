// src/screens/Home/Home.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { Avatar } from "../../components/Avatar";
import { CustomButton } from "../../components/CustomButton";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleLinkedInPress = () => {
        console.log("LinkedIn Pressed");
    };

    const handleGithubPress = () => {
        console.log("GitHub Pressed");
    };

    const handleEmailPress = () => {
        console.log("Email Pressed");
    };

    const handleSkillPress = () => {
        navigation.navigate("Skills");
    };
    
    return (


        <LinearGradient colors={["#280659", "#1b0033"]} style={styles.container}>
            <Avatar />

            <Text style={styles.text}>Hello, I'm Wellington M.
                FullStack Developer</Text>

            <View style={styles.buttonContainer}>
                <CustomButton text="LinkedIn" onPress={handleLinkedInPress} icon="linkedin" />
                <CustomButton text="GitHub" onPress={handleGithubPress} icon="github" />
                <CustomButton text="Email" onPress={handleEmailPress} icon="envelope" />
            </View>

            <TouchableOpacity style={styles.skillButton} onPress={handleSkillPress}>
                <Text style={styles.skillButtonText}>
                    <Icon name="code" size={18} color="#fff" /> Skills
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#fff",
        textAlign: "center",
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20,
        gap: 10,
    },
    skillButton: {
        backgroundColor: "#422680",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    skillButtonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
});

export default HomeScreen;
