import { View } from "react-native";
import { styles } from "./DividerStyles";

export function Divider() {
    return (
        <View style={styles.dividerContainer}>
            <View style={styles.divider}></View>
        </View>
    );
}
