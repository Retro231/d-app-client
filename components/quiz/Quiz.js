import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@rneui/themed";
import { next, prev, resetQuiz, setRegAns } from "./quizSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Divider } from "@rneui/base";
import MyVideoPlayer from "../MyVideoPlayer";
import video2 from "./../../assets/video/video_2.mp4";
import video3 from "./../../assets/video/video_3.mp4";
import video4 from "./../../assets/video/video_4.mp4";
const getVideo = (id) => {
  const videoArray = [video2, video3, video4];

  return videoArray[id];
};

const initialTime = {
  min: 0,
  sec: 10,
};
const Quiz = () => {
  // others
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const { title } = route.params;
  //quiz state
  const [time, setTime] = useState(initialTime);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isAnswerWrong, setIsAnswerWrong] = useState(null);
  const state = useSelector((state) => state.quiz.value);
  const { testState, questions, currentIndex, regAns } = state;
  const { question, answers, correctAnswer, mediaType, content } =
    questions[currentIndex];
  const hasUnsavedChanges = Boolean(question);
  // timer
  let timerInterval;
  useEffect(() => {
    const updateCountDown = () => {
      let seconds = time.sec;
      let minutes = time.min;

      if (minutes <= 0 && seconds <= 1) {
        clearInterval(timerInterval);
        Alert.alert("Times Up!!", "You can submit this quiz..", [
          {
            text: "Cancel",
            onPress: () => handleQuit(),
            style: "cancel",
          },
          { text: "Submit", onPress: () => handleSubmit() },
        ]);
      } else if (seconds <= 1) {
        setTime({
          ...time,
          min: minutes - 1,
          sec: 59,
        });
      } else {
        setTime({
          ...time,
          sec: seconds - 1,
        });
      }
    };

    switch (testState) {
      case "mock":
        timerInterval = setInterval(updateCountDown, 1000);
        break;
      case "freeTest":
        timerInterval = setInterval(updateCountDown, 1000);
        break;
      case "practice":
        clearInterval(timerInterval);
        break;
      default:
        break;
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [time]);

  // action btn's functions

  const handleNext = () => {
    if (questions.length > currentIndex + 1) {
      dispatch(next());
    }
    setIsAnswerCorrect(null);
    setIsAnswerWrong(null);
  };
  const handlePrev = () => {
    dispatch(prev());
  };
  const handleQuit = () => {
    dispatch(resetQuiz());
    // if (testState === "practice") {
    //   navigation.navigate("PracticeScreen");
    // }
    navigation.navigate("Home");
  };
  const handleSubmit = () => {
    navigation.navigate("QuizResultScreen", { title });
  };
  const handlePress = (selectedValue) => {
    console.log(selectedValue);
    console.log(correctAnswer);
    dispatch(setRegAns({ value: selectedValue, currentQues: currentIndex }));
    if (selectedValue === correctAnswer) {
      setIsAnswerCorrect(true);
      setIsAnswerWrong(null);
    } else {
      setIsAnswerCorrect(null);
      setIsAnswerWrong(true);
    }
    setTimeout(() => {
      handleNext();
    }, 100);
  };

  // preventing going back

  const handleGoBack = () => {
    navigation.addListener("beforeRemove", (e) => {
      if (!hasUnsavedChanges) {
        // If we don't have unsaved changes, then we don't need to do anything
        return;
      }

      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Prompt the user before leaving the screen
      Alert.alert(
        "Discard changes?",
        "You have unsaved changes. Are you sure to discard them and leave the screen?",
        [
          { text: "Don't leave", style: "cancel", onPress: () => {} },
          {
            text: "Discard",
            style: "destructive",
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => {
              navigation.dispatch(e.data.action);

              testState === "practice"
                ? navigation.navigate("PracticeScreen")
                : navigation.navigate("MockScreen");
              dispatch(resetQuiz());
            },
          },
        ]
      );
    });
  };
  useEffect(handleGoBack, [navigation, hasUnsavedChanges]);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#cbd5e1" }}>
        <ScrollView
          style={{ marginBottom: 30 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack(null)}>
              <Icon name="arrow-undo" size={34} color={"red"}></Icon>
            </TouchableOpacity>
            {testState === "mock" ? (
              <View style={styles.timerWraper}>
                <Icon name="time-outline" size={24} />
                <Text style={styles.timer}>
                  {time.min < 10 ? "0" + time.min : time.min} :
                  {time.sec < 10 ? "0" + time.sec : time.sec}
                </Text>
              </View>
            ) : (
              <View></View>
            )}
          </View>

          <View style={styles.container}>
            <Text style={styles.questionText}>
              {currentIndex + 1}/{questions.length}
            </Text>

            <Text style={styles.questionText}>{question}</Text>
            {mediaType === "image" && content && (
              <Image
                height={230}
                width={300}
                source={{ uri: `https://i.ibb.co/Rb9V1dX/${content}` }}
                alt="content"
              />
            )}
            {mediaType === "video" && content && (
              <MyVideoPlayer
                id={currentIndex}
                content={getVideo(currentIndex)}
              />
            )}
            <View style={styles.optionContainer}>
              {answers.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.7}
                  onPress={() => handlePress(index)}
                  style={[
                    styles.option,
                    index === correctAnswer &&
                      isAnswerCorrect === true &&
                      styles.correctAnswer,
                    index !== correctAnswer &&
                      isAnswerWrong === true &&
                      styles.wrongAnswer,
                    index === correctAnswer &&
                      isAnswerWrong === true &&
                      styles.correctAnswer,
                  ]}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.actionBtnContainer}>
            <Button
              buttonStyle={styles.actionBtn}
              onPress={handlePrev}
              disabled={currentIndex === 0}
            >
              Prev
            </Button>
            <Button
              buttonStyle={styles.actionBtn}
              onPress={handleNext}
              disabled={currentIndex === questions.length - 1}
            >
              Next
            </Button>
            <Button
              buttonStyle={styles.actionBtn}
              onPress={handleNext}
              color="warning"
              disabled={currentIndex === questions.length - 1}
            >
              Skip
            </Button>
            <Button
              buttonStyle={styles.actionBtn}
              onPress={handleQuit}
              color="error"
            >
              Quit
            </Button>
            {currentIndex === questions.length - 1 && (
              <Button
                buttonStyle={styles.actionBtn}
                onPress={handleSubmit}
                color="success"
              >
                Submit
              </Button>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#cbd5e1",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fcd34d",
  },
  timerWraper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  },
  timer: {
    fontSize: 16,
    fontWeight: "500",
  },

  questionText: {
    fontSize: 20,
    marginBottom: 20,
    color: "#0e1826",
    fontWeight: "bold",
  },
  optionContainer: {
    width: "100%",
  },
  option: {
    backgroundColor: "#cbd5e1",
    padding: 10,
    margin: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#0e1826",
  },
  optionText: {
    color: "#0e1826",
  },
  actionBtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    padding: 20,
  },
  actionBtn: {
    borderWidth: 1,
    borderColor: "#0e1826",
  },
  correctAnswer: {
    backgroundColor: "green",
    animationName: "blink",
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  wrongAnswer: {
    backgroundColor: "red",
    animationName: "blink",
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});
