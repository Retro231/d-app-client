import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Text, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as VideoThumbnails from "expo-video-thumbnails";
import { ResizeMode, Video } from "expo-av";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../config/firebase";
const VideoDownload = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [downloadedFileUri, setDownloadedFileUri] = useState("");
  const downloadFile = async (url, fileName, isVideo) => {
    try {
      //request permission
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission needed",
          "This app needs access to your Media Library."
        );
        return;
      }
      const fileUri = FileSystem.documentDirectory + fileName;
      const fileExists = await FileSystem.getInfoAsync(fileUri);
      if (fileExists.exists) {
        setDownloadedFileUri(fileExists.uri);
        console.log("File Exist:", fileExists);
      } else {
        console.log("Stating Download...!!");
        const downloadResumable = FileSystem.createDownloadResumable(
          url,
          fileUri,
          {},
          false
        );
        const { uri } = await downloadResumable.downloadAsync(null, {
          shouldCache: false,
        });

        console.log("Download Completed: ", uri);

        if (isVideo) {
          //genarate thubnail for video
          // const { uri: thumbnailUri } = await VideoThumbnails.getThumbnailAsync(
          //   uri,
          //   { time: 1000 }
          // );
          // console.log("Thumbnail created: ", thumbnailUri);
          // const asset = await MediaLibrary.createAssetAsync(uri);
          // console.log("Asset created: ", asset);

          //show Alert with file location
          Alert.alert("Downlaod Succefully,");
          setDownloadedFileUri(fileUri);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = async () => {
    const pathReference = ref(storage, "video/video_2.mp4");
    const url = await getDownloadURL(pathReference);
    console.log(url);
    downloadFile(url, "video_2.mp4", true);
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Download Video" onPress={handleDownload} />
    </View>
  );
};

export default VideoDownload;
const styles = StyleSheet.create({
  video: {
    width: 300,
    height: 300,
  },
});
