import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import hazardList from "../../api/hazardList";
import ScreenTitle from "../../components/ScreenTitle";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions, setTestState } from "../../components/quiz/quizSlice";
import { useIsFocused } from "@react-navigation/native";
import { changeScreenOrientationPortrait } from "../../appSlice";
import { changeScreenOrientationLandscape } from "../../appSlice";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["new NativeEventEmitter()"]);
const hazardQuestionsDB = [
  {
    id: 1,
    url: require("./../../assets/video/video_2.mp4"),
    hazard: [3, 9, 18],
  },
  {
    id: 2,
    url: require("./../../assets/video/video_2.mp4"),
    hazard: [3, 9, 18],
  },
  {
    id: 3,
    url: require("./../../assets/video/video_2.mp4"),
    hazard: [3, 9, 18],
  },
  {
    id: 4,
    url: require("./../../assets/video/video_2.mp4"),
    hazard: [3, 9, 18],
  },
  {
    id: 5,
    url: require("./../../assets/video/video_2.mp4"),
    hazard: [3, 9, 18],
  },
];

const HazardBtn = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePress = () => {
    // getQuestons by Category
    const hazardQuestionId = item.id;
    const hazardQuestions = hazardQuestionsDB.filter((item) => {
      if (hazardQuestionId !== 0) {
        return item.category === hazardQuestionId;
      } else {
        return item.category !== hazardQuestionId;
      }
    });

    dispatch(setQuestions(hazardQuestions));

    dispatch(setTestState("hazard"));
    navigation.navigate("ClipInfo", { title: item.title });
    dispatch(changeScreenOrientationLandscape());
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.singleNav}>
          <Image height={50} width={50} source={item.iconName} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const HazardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  isFocused && dispatch(changeScreenOrientationPortrait());

  return (
    <>
      <ScreenTitle
        title={`Hazard Clips`}
        goBack={() => navigation.goBack(null)}
      />
      <View style={styles.container}>
        <FlatList
          data={hazardList}
          numColumns={2}
          columnWrapperStyle={{
            margin: 2,
            padding: 1,
            columnGap: 5,
            justifyContent: "center",
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <HazardBtn key={item.id} item={item} />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default HazardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "#cbd5e1",
  },
  item: {
    width: "48%",
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: "#d1d5db",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#0e1826",
  },
  singleNav: {
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#0e1826",
  },
});
