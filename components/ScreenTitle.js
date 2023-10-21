import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ScreenTitle = ({ title, goBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.backBtn}>Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    backgroundColor: "#0e1826",
    flexDirection: "row",
    gap: 20,
  },
  backBtn: {
    color: "#000",
    backgroundColor: "red",
    paddingHorizontal: 20,
    padding: 10,
    fontWeight: "bold",
  },
  title: {
    padding: 10,
    color: "#fff",
    fontWeight: "bold",
  },
});
