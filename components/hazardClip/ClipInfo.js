import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video, ResizeMode } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import { LogBox } from "react-native";
import { Button } from "@rneui/base";
import ScreenTitle from "../ScreenTitle";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { changeScreenOrientationLandscape } from "../../appSlice";
LogBox.ignoreLogs(["new NativeEventEmitter()"]);

const clipInfo = [
  {
    id: 1,
    name: "Clip",
    data: "DVSA CGI 1",
  },
  {
    id: 2,

    name: "Area",
    data: "Country Lane",
  },
  {
    id: 3,

    name: "Speed",
    data: "60 MPH",
  },
  {
    id: 4,

    name: "Time Of Day",
    data: "Mid Morning",
  },
  {
    id: 5,

    name: "Weather",
    data: "Overcast / Damp",
  },
];

const ClipInfo = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const { title } = route.params;

  console.log(title);

  const handleGoBack = () => {
    navigation.goBack(null);
  };

  const handlePlay = () => {
    navigation.navigate("HazardClip", { title });
    dispatch(changeScreenOrientationLandscape());
  };

  return (
    <>
      <SafeAreaView>
        <ScreenTitle title={`Clip Information`} goBack={handleGoBack} />
        <View style={styles.playArea}>
          <Text style={styles.playAreaText}>Clip-1</Text>
          <Button buttonStyle={styles.button} onPress={handlePlay}>
            Play
          </Button>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={clipInfo}
            numColumns={1}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={styles.listText}>
                {item.name} : {item.data}
              </Text>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ClipInfo;

const styles = StyleSheet.create({
  playArea: {
    alignSelf: "center",
    width: 200,
    margin: 10,
  },
  playAreaText: {
    textAlign: "center",
    padding: 30,
    backgroundColor: "gray",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  listText: {
    textAlign: "center",
    padding: 5,
    fontSize: 16,
  },
});
