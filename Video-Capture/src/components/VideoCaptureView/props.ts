import type { CameraView } from "expo-camera";
import type React from "react";

export type VideoCaptureViewProps = {
	cameraRef: React.RefObject<CameraView>;
	isRecording: boolean;
	onRecording: () => void;
	onStopRecording: () => void;
};
