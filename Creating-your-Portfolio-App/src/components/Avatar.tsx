import { Image, StyleSheet } from "react-native";
import React from "react";

export const Avatar = () => {
    return <Image source={{ uri: "https://avatars.githubusercontent.com/u/56723945?v=4" }} style={styles.image} />;
};
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});
