import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/appnavigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export function Home() {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const handleFormPress = async () => {
        navigation.navigate("Form");
    };
    return (
        <LinearGradient colors={["#280659", "#1b0033"]} style={styles.container}>
            <View style={styles.container}>
                <Image source={require("../../../assets/logo.png")} style={styles.logo} />
                <TouchableOpacity style={styles.button} onPress={handleFormPress}>
                    <Text style={styles.buttonText}>Active Bat Signal</Text>
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
    logo: {
        width: 375,
        height: 159,
        marginBottom: 20,
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
});
