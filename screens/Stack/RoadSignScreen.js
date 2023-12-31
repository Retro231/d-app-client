import { View, Text } from "react-native";
import React from "react";
import PdfPreviewer from "../../components/roadSign/PdfPreviewer";
import ScreenTitle from "../../components/ScreenTitle";
import { useNavigation } from "@react-navigation/native";
const RoadSignScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScreenTitle
        title={`Road Signs`}
        goBack={() => navigation.goBack(null)}
      />
      <PdfPreviewer />
    </>
  );
};

export default RoadSignScreen;
