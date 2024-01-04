import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import { Button } from "@rneui/base";
import * as FileSystem from "expo-file-system";

const MyVideoPlayer = ({ id, content }) => {
  // expo-av player state
  const video = useRef(null);
  const [videoContent, setVideoContent] = useState(null);
  const [status, setStatus] = useState({});
  const videoFileUrl = FileSystem.documentDirectory + content;
  const handlePress = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  };
  useEffect(() => {
    setVideoContent(content);
    console.log("----");
    console.log(videoContent);
  });
  // source={{
  //   uri: `${videoContent}`,
  // }}
  return (
    <View style={styles.videoContainer}>
      {videoContent ? (
        <Video
          key={id}
          ref={video}
          source={{ uri: videoFileUrl }}
          style={styles.video}
          useNativeControls={false}
          resizeMode={ResizeMode.CONTAIN}
          isLooping={false}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      ) : null}

      <Button
        buttonStyle={
          status.isPlaying
            ? { backgroundColor: "red" }
            : { backgroundColor: "green" }
        }
        title={status.isPlaying ? "Pause" : "Play"}
        onPress={handlePress}
      />
    </View>
  );
};

export default MyVideoPlayer;

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 350,
    height: 220,
  },
});
