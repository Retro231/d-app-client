import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dialog, ListItem, Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header";
import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/themed";
const QuizMenu = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("QuizScreen", { title: "Practice" });
  };
  return (
    <>
      <SafeAreaView>
        <Header />
        <View>
          <Card>
            <Card.Title>Practice Test</Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              <ListItem>
                <ListItem.Content style={styles.listContent}>
                  <ListItem.Title style={styles.listTitle}>
                    Number of Question:
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubTitle}>
                    50
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem>
                <ListItem.Content style={styles.listContent}>
                  <ListItem.Title style={styles.listTitle}>
                    Pass Mark:
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubTitle}>
                    43 out of 50
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem>
                <ListItem.Content style={styles.listContent}>
                  <ListItem.Title style={styles.listTitle}>
                    Time Limit:
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubTitle}>
                    57 minutes
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
              }}
              onPress={handlePress}
              title="Begin Test"
            />
          </Card>
        </View>
      </SafeAreaView>
    </>
  );
};

export default QuizMenu;

const styles = StyleSheet.create({
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
