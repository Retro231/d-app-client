import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import HomeNav from "../../components/HomeNav";
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header />
      <HomeNav />
    </SafeAreaView>
  );
};

export default Home;
