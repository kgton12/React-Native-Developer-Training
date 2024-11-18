import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Rating = ({ text, rating }: { text: string; rating: number }) => {
    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Icon key={i} name="star" size={24} color={i <= rating ? "#FFD700" : "#C0C0C0"} style={styles.star} />,
            );
        }
        return stars;
    };

    return (
        <View style={styles.ratingContainer}>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.starsContainer}>{renderStars()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    ratingContainer: {
        alignItems: "center",
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#422680",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 5,
    },
    starsContainer: {
        flexDirection: "row",
    },
    star: {
        marginHorizontal: 2,
    },
});
