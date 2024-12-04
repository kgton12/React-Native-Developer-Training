import { Video } from "expo-av";
import { Button, SafeAreaView, View } from "react-native";
import type { VideoPlayerProps } from "./props";
import { styles } from "./styles";

export default function VideoPlayer({ video, onShare, onSave, onDiscard }: VideoPlayerProps) {
	return (
		<View>
			<SafeAreaView style={styles.container}>
				<Video source={{ uri: video.uri }} useNativeControls={true} style={styles.video} />
				<View style={styles.menuButton}>
					<Button title="Share" onPress={onShare} />
					<Button title="Save" onPress={onSave} />
					<Button title="Discard" onPress={onDiscard} />
				</View>
			</SafeAreaView>
		</View>
	);
}
