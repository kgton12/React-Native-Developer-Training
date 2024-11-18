import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Rating } from "../../components/Rating";
import { BackgroundLinearGradient } from "../../components/BackgroundLinearGradient";
import { Avatar } from "../../components/Avatar";

const SkillsScreen = () => {
    return (
        <BackgroundLinearGradient>
            <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollView}>
                <View style={styles.container}>
                    <Avatar />
                    <Text style={styles.text}>My Skills</Text>
                    <View style={styles.ratingContainer}>
                        <Rating text=".NET" rating={5} />
                        <Rating text="C#" rating={5} />
                        <Rating text="NodeJS" rating={4} />
                        <Rating text="TypeScript" rating={4} />
                        <Rating text="PostgreSQL" rating={3} />
                        <Rating text="SQL" rating={3} />
                        <Rating text="React Native" rating={3} />
                        <Rating text="React Native" rating={3} />
                    </View>
                </View>
            </ScrollView>
        </BackgroundLinearGradient>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    scrollView: {
        backgroundColor: "transparent",
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "transparent",
    },
    text: {
        fontSize: 25,
        color: "#fff",
        marginVertical: 10,
    },
    ratingContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
    },
});

export default SkillsScreen;