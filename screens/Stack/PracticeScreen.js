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

import categoryList from "../../api/categoryList";
import Header from "../../components/Header";
import ScreenTitle from "../../components/ScreenTitle";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions, setTestState } from "../../components/quiz/quizSlice";
import { useState } from "react";
import { useEffect } from "react";

const CategoryBtn = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { questionsDB, videoQuestionsDB } = useSelector(
    (state) => state.db.value
  );
  const handlePress = () => {
    // getQuestons by Category
    const categoryId = item.id;
    const categoryQuestion = questionsDB.filter((item) => {
      if (categoryId !== 0) {
        return item.category === categoryId;
      } else {
        return item.category !== categoryId;
      }
    });

    {
      item.title !== "Video"
        ? dispatch(setQuestions(categoryQuestion))
        : dispatch(setQuestions(videoQuestionsDB));
    }

    dispatch(setTestState("practice"));
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
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setData([
      ...categoryList,
      {
        id: "video",
        title: "Video",
        iconName: "videoIcon.png",
      },
    ]);
  }, []);

  return (
    <>
      <ScreenTitle
        title={`Practice By Category`}
        goBack={() => navigation.goBack(null)}
      />
      <View style={styles.container}>
        <FlatList
          data={data}
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
              <CategoryBtn key={item.id} item={item} />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default PracticeScreen;

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
