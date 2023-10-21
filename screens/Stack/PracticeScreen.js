import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import categoryList from "../../api/categoryList";
import Header from "../../components/Header";
import ScreenTitle from "../../components/ScreenTitle";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../../components/quiz/quizSlice";

const CategoryBtn = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { questionsDB, videoQuestionsDB } = useSelector(
    (state) => state.db.value
  );
  const handlePress = () => {
    // getQuestons by Category
    const categoryId = item.id;
    console.log(categoryId);
    const categoryQuestion = questionsDB.filter((item) => {
      if (categoryId !== 0) {
        return item.category === categoryId;
      } else {
        return item.category !== categoryId;
      }
    });

    dispatch(setQuestions(categoryQuestion));
    navigation.navigate("QuizMenuScreen", { title: item.title });

    // if (isLogedin) {
    //   // setting quiz questions
    //   title !== "Video"
    //     ? dispatch(setQuestions(categoryQuestion))
    //     : dispatch(setQuestions(videoQuestionsDB));
    //   dispatch(setTestState("practice"));
    //   navigation.navigate("QuizMenuScreen", { title: item.title });
    // } else {
    //   navigate("/login");
    // }
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.singleNav}>
          <Image
            height={50}
            width={50}
            source={{
              uri: `http://appsbreaking.com/category_image/${item.iconName}`,
            }}
          />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const PracticeScreen = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack(null);
  };
  return (
    <>
      <Header />
      <ScreenTitle title={`Practice By Category`} goBack={handleGoBack} />
      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.row}>
            {categoryList.map((item) => (
              <CategoryBtn key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 140,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  singleNav: {
    alignItems: "center",
    flexDirection: "column",
    minWidth: "100%",
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: "#d1d5db",
    marginBottom: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#fcd34d",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
