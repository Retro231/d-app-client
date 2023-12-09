import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenTitle = ({ title, goBack }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {goBack ? (
          <TouchableOpacity onPress={goBack}>
            <Icon name="arrow-undo" size={34} color={"red"}></Icon>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fcd34d",
  },
  title: {
    fontSize: 20,
    padding: 10,
    color: "#000",
    fontWeight: "bold",
  },
});
