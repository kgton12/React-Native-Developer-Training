import { Camera, type CameraRecordingOptions, type CameraView } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from "expo-sharing";
import { useEffect, useRef, useState } from "react";
import { Text } from "react-native";
import VideoCaptureView from "./src/components/VideoCaptureView";
import VideoPlayer from "./src/components/VideoPlayer";

export default function App() {
	const [hasCameraPermission, setHasCameraPermission] = useState(false);
	const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
	const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);
	const [video, setVideo] = useState<any>(null);

	const cameraRef = useRef<CameraView>(null);
	const [isRecord, setIsRecord] = useState(false);

	useEffect(() => {
		(async () => {
			const cameraPermission = await Camera.requestCameraPermissionsAsync();
			const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
			const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

			setHasCameraPermission(cameraPermission.status === "granted");
			setHasMicrophonePermission(microphonePermission.status === "granted");
			setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
		})();
	}, []);

	if (!hasCameraPermission || !hasMicrophonePermission) {
		return <Text>Não tem permissão para usar a câmera ou microfone</Text>;
	} else if (!hasMediaLibraryPermission) {
		return <Text>Não tem permissão para acessar a galeria de mídia</Text>;
	}

	const recordVideo = () => {
		setIsRecord(true);
		const options: CameraRecordingOptions = {
			maxDuration: 60,
		};

		if (cameraRef && cameraRef.current) {
			cameraRef.current.recordAsync(options).then((recordedVideo: any) => {
				setVideo(recordedVideo);
				setIsRecord(false);
			});
		}
	};
	const stopRecording = () => {
		setIsRecord(false);
		if (cameraRef && cameraRef.current) {
			cameraRef.current.stopRecording();
		}
	};
	const discardVideo = () => {
		setVideo(undefined);
	};

	if (video) {
		const shareVideo = async () => {
			await shareAsync(video.uri);
			setVideo(undefined);
		};
		const saveVideo = async () => {
			await MediaLibrary.saveToLibraryAsync(video.uri);
			setVideo(undefined);
		};

		return <VideoPlayer video={video} onShare={shareVideo} onSave={saveVideo} onDiscard={discardVideo} />;
	}

	return <VideoCaptureView cameraRef={cameraRef} isRecording={isRecord} onRecording={recordVideo} onStopRecording={stopRecording} />;
}
