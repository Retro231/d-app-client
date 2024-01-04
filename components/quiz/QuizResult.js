import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BackHandler } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenTitle from "../ScreenTitle";
import { useEffect } from "react";
import { Divider } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuizResult = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { title } = route.params;
  // const auth = getAuth();
  // const user = auth.currentUser;
  const state = useSelector((state) => state.quiz.value);
  const { questions, regAns, testState } = state; //questons id start from 1;

  const [correctlyAnsweredQuestions, setCorrectlyAnsweredQuestions] = useState(
    []
  );
  const [wronglyAnsweredQuestions, setWronglyAnsweredQuestions] = useState([]);

  useEffect(() => {
    const correctlyAnswered = [];
    const wronglyAnswered = [];

    questions.forEach((question, index) => {
      const userSelectedOption = regAns[`${index}`];
      const isCorrect = userSelectedOption === question.correctAnswer;

      if (isCorrect) {
        correctlyAnswered.push(question);
      } else {
        wronglyAnswered.push(question);
      }
    });

    setCorrectlyAnsweredQuestions(correctlyAnswered);
    setWronglyAnsweredQuestions(wronglyAnswered);
  }, []);

  // handle async storage
  const storeObject = async (key, newObject) => {
    try {
      // Fetch the existing array from AsyncStorage
      const existingObjectsJSON = await AsyncStorage.getItem(testState);
      const existingObjects = existingObjectsJSON
        ? JSON.parse(existingObjectsJSON)
        : [];

      // check length of existingobjects

      if (existingObjects.length === 3) {
        existingObjects[0] = existingObjects[1];
        existingObjects[1] = existingObjects[2];
        existingObjects[2] = newObject;
      } else if (existingObjects.length < 3) {
        // Add the new object to the array
        existingObjects.push(newObject);
      }

      // Save the updated array back to AsyncStorage
      await AsyncStorage.setItem(key, JSON.stringify(existingObjects));
    } catch (error) {
      console.error("Error storing object:", error);
    }
  };

  // Example usage
  const saveNewObject = async (key, newObject) => {
    // const key = "your_key_here"; // Replace with your desired key
    // const newObject = { item: "value" }; // Replace with your actual object

    // Call the function to store the new object
    await storeObject(key, newObject);

    // You can also retrieve the stored array to verify the result
    const storedArrayJSON = await AsyncStorage.getItem(key);
    const storedArray = storedArrayJSON ? JSON.parse(storedArrayJSON) : [];

    console.log("Stored Array:", storedArray);
  };

  useEffect(() => {
    let data = {
      testTitle: title,
      totalQues: questions.length,
      correctAns: correctlyAnsweredQuestions.length,
    };

    saveNewObject(testState, data);
  }, [correctlyAnsweredQuestions]);

  const [isActive, setActive] = useState({
    allQ: true,
    correctQ: false,
    incorrectQ: false,
  });

  const handleAllBtn = () => {
    isActive.allQ !== true &&
      setActive({
        allQ: true,
        correctQ: false,
        incorrectQ: false,
      });
  };
  const handleCorrectBtn = () => {
    setActive({
      allQ: false,
      correctQ: true,
      incorrectQ: false,
    });
  };
  const handleIncorrectBtn = () => {
    setActive({
      allQ: false,
      correctQ: false,
      incorrectQ: true,
    });
  };

  const getButtonStatus = () => {
    if (isActive.allQ === true) {
      return questions;
    }
    if (isActive.correctQ === true) {
      return correctlyAnsweredQuestions;
    }
    if (isActive.incorrectQ === true) {
      return wronglyAnsweredQuestions;
    }
  };

  const getQuesionStatus = (quesitonID, correctAnswer) => {
    const userSelectedOption = regAns[`${quesitonID - 1}`];
    const isCorrect = userSelectedOption === correctAnswer;

    if (isCorrect) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    // Add event listener for hardware back button press
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleGoBack
    );

    // Remove event listener when the component is unmounted
    return () => backHandler.remove();
  }, []);

  const handleGoBack = () => {
    navigation.navigate("HomeScreen");
    return true;
  };

  return (
    <>
      <ScreenTitle title={`Result`} goBack={handleGoBack} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#cbd5e1" }}>
        <View style={styles.container}>
          <View style={styles.leaderBoard}>
            {testState != "practice" && (
              <>
                <View style={styles.status}>
                  {correctlyAnsweredQuestions.length >= 43 ? (
                    <>
                      <Icon
                        name="happy-outline"
                        size={36}
                        color={"green"}
                      ></Icon>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Passed
                      </Text>
                    </>
                  ) : (
                    <>
                      <Icon name="sad-outline" size={36} color={"gray"}></Icon>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Failed
                      </Text>
                    </>
                  )}
                </View>
                <Divider style={{ width: "60%" }} />
              </>
            )}

            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  name={`checkmark-circle-outline`}
                  size={24}
                  color={"green"}
                ></Icon>
                <Text style={styles.leaderBoardText}>
                  Correct Ans: {correctlyAnsweredQuestions.length}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  name={`close-circle-outline`}
                  size={24}
                  color={"red"}
                ></Icon>
                <Text style={styles.leaderBoardText}>
                  Wrong Ans: {wronglyAnsweredQuestions.length}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.topBtnArea}>
            <TouchableOpacity
              style={[
                styles.topBtn,
                { backgroundColor: isActive.allQ ? "#fcd34d" : "gray" },
              ]}
              onPress={handleAllBtn}
            >
              <Text style={styles.topBtnText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.topBtn,
                { backgroundColor: isActive.correctQ ? "#fcd34d" : "gray" },
              ]}
              onPress={handleCorrectBtn}
            >
              <Text style={styles.topBtnText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.topBtn,
                { backgroundColor: isActive.incorrectQ ? "#fcd34d" : "gray" },
              ]}
              onPress={handleIncorrectBtn}
            >
              <Text style={styles.topBtnText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
          {/* ---------------- */}
          <View style={{ flex: 1 }}>
            <FlatList
              // style={{ marginBottom: testState !== "practice" ? 1600 : 550 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={getButtonStatus()}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ShowQuizResult", { id: item.id })
                    }
                    style={{
                      margin: 4,
                      padding: 4,
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      style={{ width: "10%" }}
                      name={
                        getQuesionStatus(item.id, item.correctAnswer)
                          ? `checkmark-circle-outline`
                          : `close-circle-outline`
                      }
                      size={24}
                      color={
                        getQuesionStatus(item.id, item.correctAnswer)
                          ? `green`
                          : `red`
                      }
                    ></Icon>
                    <Text style={{ fontSize: 15, width: "80%" }}>
                      {item.id}. {item.question}
                    </Text>
                    <Icon
                      style={{ width: "10%" }}
                      name="chevron-forward-outline"
                      size={24}
                    />
                  </TouchableOpacity>
                </>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default QuizResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  leaderBoard: {
    paddingBottom: 20,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  leaderBoardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  topBtnArea: {
    flexDirection: "row",
    width: "100%",
    gap: 1,
  },
  topBtn: {
    flex: 1,
    height: "auto",
    paddingVertical: 10,
  },
  topBtnText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
});
