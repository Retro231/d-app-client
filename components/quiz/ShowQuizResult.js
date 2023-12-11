import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "./quizSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import ScreenTitle from "../ScreenTitle";

const ShowQuizResult = () => {
  const route = useRoute();
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isAnswerWrong, setIsAnswerWrong] = useState(null);
  const state = useSelector((state) => state.quiz.value);
  const quesionID = route.params.id - 1;
  const { testState, questions, regAns } = state;
  const { question, answers, correctAnswer, mediaType, content } =
    questions[quesionID];
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const userSelectedOption = regAns[`${quesionID}`];
    if (userSelectedOption === correctAnswer) {
      setIsAnswerCorrect(true);
      setIsAnswerWrong(null);
    } else {
      setIsAnswerCorrect(null);
      setIsAnswerWrong(true);
    }
  }, []);

  // preventing going back
  const handleGoBack = () => {
    navigation.goBack(null);
  };

  if (question) {
    return (
      <>
        <ScreenTitle title={"Result"} goBack={handleGoBack} />
        <SafeAreaView style={{ flex: 1, backgroundColor: "#cbd5e1" }}>
          <ScrollView
            style={{ marginBottom: 30 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.container}>
              <Text style={styles.questionText}>
                {quesionID + 1}/{questions.length}
              </Text>

              <Text style={styles.questionText}>{question}</Text>
              {mediaType === "image" && content && (
                <Image
                  height={230}
                  width={300}
                  resizeMode="contain"
                  source={{ uri: `http://appsbreaking.com/qimage/${content}` }}
                  alt="content"
                />
              )}

              <View style={styles.optionContainer}>
                {answers.map((option, index) => (
                  <Text
                    key={index}
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
                    {option}
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  } else {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.questionText}>No Data Available</Text>
        </View>
      </SafeAreaView>
    );
  }
};

export default ShowQuizResult;

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
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#0e1826",
  },
  correctAnswer: {
    backgroundColor: "green",
  },
  wrongAnswer: {
    backgroundColor: "red",
  },
});
