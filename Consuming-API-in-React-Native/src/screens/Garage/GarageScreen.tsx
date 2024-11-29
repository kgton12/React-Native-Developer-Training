import { View, Text } from "react-native";
import { styles } from "./GarageStyles";
import { CardView } from "../../components/CardView/CardView";

export function GarageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.cameraBox}>
                <View style={styles.triangleCorner}> </View>
                <View style={[styles.triangleCorner, styles.topRight]}> </View>
                <View style={[styles.triangleCorner, styles.bottomLeft]}> </View>
                <View style={[styles.triangleCorner, styles.bottomRight]}> </View>
                <CardView />
            </View>
            <Text>Garage Screen Works</Text>
        </View>
    );
}
