import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#333",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    logoContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 60,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: "#4D4D4D",
    },
    inputContainer: {
        width: "80%",
        flexDirection: "column",
        alignItems: "center",
    },
});
