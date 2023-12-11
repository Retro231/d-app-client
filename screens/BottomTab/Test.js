import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Test = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
        }}
      ></View>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({});
