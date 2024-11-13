import { Text, Image } from "react-native";
import batLogo from "../../../assets/bat-logo.png";
import { styles } from "./BatLogoStyles";

export function BatLogo() {
    return (
        <>
            <Text style={styles.title}>Bat Pass Generator</Text>
            <Image source={batLogo} style={styles.image} />
        </>
    );
}
