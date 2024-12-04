import { CameraView } from "expo-camera";
import { Text, TouchableOpacity, View } from "react-native";
import type { VideoCaptureViewProps } from "./props";
import { styles } from "./styles";

export default function VideoCaptureView({ cameraRef, isRecording, onRecording, onStopRecording }: VideoCaptureViewProps) {
	return (
		<CameraView style={styles.container} ref={cameraRef}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={isRecording ? onStopRecording : onRecording} style={styles.buttonRecording}>
					<Text style={styles.buttonText}>{isRecording ? "Stop Recording" : "Start Recording"}</Text>
				</TouchableOpacity>
			</View>
		</CameraView>
	);
}
