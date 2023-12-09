import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import HomeNav from "../../components/HomeNav";
import { StyleSheet, View } from "react-native";
const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <HomeNav />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cbd5e1",
    height: "100%",
  },
});
