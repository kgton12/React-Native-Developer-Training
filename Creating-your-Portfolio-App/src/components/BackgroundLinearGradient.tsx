import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export const BackgroundLinearGradient = (props: any) => {
    return (
        <LinearGradient colors={["#280659", "#1b0033"]} style={styles.container}>
            {props.children}
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
});
