import { TextInput } from "react-native";
import { styles } from "./BatTextInputStyles";

interface BatTextInputProps {
    pass: string;
}

export function BatTextInput(props: BatTextInputProps) {
    return <TextInput placeholder="PASS" style={styles.input} value={props.pass} />;
}
