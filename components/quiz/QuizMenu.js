import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dialog, ListItem, Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header";
import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/themed";
import ScreenTitle from "../ScreenTitle";
import { useSelector } from "react-redux";

const screenHeight = Dimensions.get("window").height;

const QuizMenu = ({ route }) => {
  const navigation = useNavigation();
  const { questions, testState } = useSelector((state) => state.quiz.value);
  const { title } = route.params;
  const handlePress = () => {
    navigation.navigate("QuizScreen", { title });
  };
  return (
    <>
      <SafeAreaView>
        <ScreenTitle title={`Menu`} goBack={() => navigation.goBack(null)} />
        <View style={styles.conatiner}>
          <Card
            containerStyle={{
              borderRadius: 20,
              padding: 20,
              position: "relative",
              top: "-10%", // Move the view 50% down from the top of the parent container
              transform: [{ translateY: -50 }], // Correct for the view's height to center it vertically
              width: "80%", // Set the width of the centered view
              backgroundColor: "white", // Background color of the centered view
              shadowColor: "black", // Shadow color
              shadowOffset: { width: 10, height: -5 }, // Offset (x, y)
              shadowOpacity: 0.2, // Opacity
              shadowRadius: 4, // Radius
              elevation: 5, // Elevation for Android (higher values result in a stronger shadow)
            }}
          >
            <Card.Title style={{ fontSize: 24 }}>
              {/* {testState === "practice" ? "Practice Test" : "Mock Test"} */}
              {title}
            </Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              <ListItem>
                <ListItem.Content style={styles.listContent}>
                  <ListItem.Title style={styles.listTitle}>
                    Number of Question:
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubTitle}>
                    {questions.length}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem>
                <ListItem.Content style={styles.listContent}>
                  <ListItem.Title style={styles.listTitle}>
                    Pass Mark:
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubTitle}>
                    {testState === "practice" ? "None" : "43 out of 50"}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem>
                <ListItem.Content style={styles.listContent}>
                  <ListItem.Title style={styles.listTitle}>
                    Time Limit:
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubTitle}>
                    {testState === "practice" ? "None" : "57 minutes"}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: "green",
                borderRadius: 10,
              }}
              onPress={handlePress}
              title="BEGIN TEST"
            />
          </Card>
        </View>
      </SafeAreaView>
    </>
  );
};

export default QuizMenu;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#cbd5e1",
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight,
  },
  listContainer: {
    margin: 20,
  },
  listContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listSubTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
