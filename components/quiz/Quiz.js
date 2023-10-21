import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@rneui/themed";
import { next, prev, resetQuiz } from "./quizSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header";
import { useNavigation } from "@react-navigation/native";

const Quiz = () => {
  const state = useSelector((state) => state.quiz.value);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isAnswerWrong, setIsAnswerWrong] = useState(null);

  const { testState, questions, currentIndex, regAns } = state;
  const { question, answers, correctAnswer, mediaType, content } =
    questions[currentIndex];

  const dispatch = useDispatch();
  const navigation = useNavigation();

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
    navigation.navigate("Home");
  };
  const handleSubmit = () => {};
  const handlePress = (selectedValue) => {
    console.log(selectedValue);
    console.log(correctAnswer);
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

  if (currentIndex < questions.length) {
    return (
      <>
        <SafeAreaView>
          <Header />
          <View style={styles.container}>
            <Text style={styles.questionText}>
              {currentIndex + 1}/{questions.length}
            </Text>
            <Text style={styles.questionText}>{question}</Text>
            <View style={styles.optionContainer}>
              {answers.map((option, index) => (
                <TouchableOpacity
                  key={index}
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
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.actionBtnContainer}>
            <Button onPress={handlePrev} disabled={currentIndex === 0}>
              Prev
            </Button>
            <Button
              onPress={handleNext}
              disabled={currentIndex === questions.length - 1}
            >
              Next
            </Button>
            <Button
              onPress={handleNext}
              color="warning"
              disabled={currentIndex === questions.length - 1}
            >
              Skip
            </Button>
            <Button onPress={handleQuit} color="error">
              Quit
            </Button>
            {currentIndex === questions.length - 1 && (
              <Button onPress={handleSubmit} color="success">
                Submit
              </Button>
            )}
          </View>
        </SafeAreaView>
      </>
    );
  } else {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.questionText}>Quiz finished!</Text>
        </View>
      </SafeAreaView>
    );
  }
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
  },
  optionContainer: {
    width: "100%",
  },
  option: {
    backgroundColor: "#e4e4e4",
    padding: 10,
    margin: 5,
  },
  actionBtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    padding: 20,
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
