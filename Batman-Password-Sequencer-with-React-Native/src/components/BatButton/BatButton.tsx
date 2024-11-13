import { Text, Pressable } from "react-native";
import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import { useState } from "react";
import generatePass from "../../service/passwordService";
import Clipboard from "expo-clipboard";

export function BatButton() {
    const [pass, setPass] = useState("");

    function handleGenerateButton(): void {
        let newPass: string = generatePass();
        setPass(newPass);
    }

    async function handleCopyButton(): Promise<void> {
        await Clipboard.setStringAsync(pass);
    }

    return (
        <>
            <BatTextInput pass={pass} />
            <Pressable style={styles.button} onPress={handleGenerateButton}>
                <Text style={styles.text}>📲 GENERATE 📲</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleCopyButton}>
                <Text style={styles.text}>⚡ COPY ⚡</Text>
            </Pressable>
        </>
    );
}
