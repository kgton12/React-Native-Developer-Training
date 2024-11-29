import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./BuyButtonStyles";

export function BuyButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <AntDesign name="shoppingcart" size={24} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Buy This</Text>
            </TouchableOpacity>
        </View>
    );
}
