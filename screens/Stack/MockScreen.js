import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import mockTestList from "../../api/mockTestList";
import ScreenTitle from "../../components/ScreenTitle";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions, setTestState } from "../../components/quiz/quizSlice";
const MockBtn = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { questionsDB, videoQuestionsDB } = useSelector(
    (state) => state.db.value
  );
  const getUniqueIds = (questions) => {
    // Step 1: Create an array of unique IDs
    const uniqueIds = questions.map((item) => item.id);
    // Step 2: Shuffle the array of unique IDs (Fisher-Yates shuffle)
    for (let i = uniqueIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [uniqueIds[i], uniqueIds[j]] = [uniqueIds[j], uniqueIds[i]];
    }

    return uniqueIds;
  };

  const handlePress = () => {
    // const randomQuestions = [];
    // const randomVideoQuestions = [];

    const uniqueIdsGaneral = getUniqueIds(questionsDB);
    const uniqueIdsVideo = getUniqueIds(videoQuestionsDB);

    // Step 3: Take the first 10 unique IDs and extract the corresponding items
    const randomGaneralQuestions = uniqueIdsGaneral
      .slice(0, 47)
      .map((id) => questionsDB.find((item) => item.id === id));

    const randomVideoQuestions = uniqueIdsVideo
      .slice(0, 3)
      .map((id) => videoQuestionsDB.find((item) => item.id === id));

    // marge two array of quesion. Both have some similler ids.
    const finalQuestion = [...randomGaneralQuestions, ...randomVideoQuestions];

    // Modify the items with new unique IDs
    const modifiedQuestions = finalQuestion.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    dispatch(setQuestions(modifiedQuestions));
    dispatch(setTestState("mock"));
    navigation.navigate("QuizMenuScreen", { title: item.title });
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.singleNav}>
          <Image style={{ width: 50, height: 50 }} source={item.iconName} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const MockScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScreenTitle
        title={`Mock Tests`}
        goBack={() => navigation.goBack(null)}
      />
      <View style={styles.container}>
        <FlatList
          data={mockTestList}
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
              <MockBtn key={item.id} item={item} />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default MockScreen;

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
