import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@rneui/base";
import ScreenTitle from "../ScreenTitle";
import { useDispatch } from "react-redux";
const clipInfo = [
  {
    id: 1,
    name: "Clip",
    data: "DVSA CGI 1",
  },
  {
    id: 2,

    name: "Area",
    data: "Country Lane",
  },
  {
    id: 3,

    name: "Speed",
    data: "60 MPH",
  },
  {
    id: 4,

    name: "Time Of Day",
    data: "Mid Morning",
  },
  {
    id: 5,

    name: "Weather",
    data: "Overcast / Damp",
  },
];

const ClipInfo = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const { title } = route.params;

  console.log(title);

  const handleGoBack = () => {
    navigation.goBack(null);
  };

  const handlePlay = () => {
    navigation.navigate("HazardClip", { title });
  };

  return (
    <>
      <ScreenTitle title={title} goBack={handleGoBack} />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={clipInfo}
            numColumns={1}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={styles.listText}>
                {item.name} : {item.data}
              </Text>
            )}
          />
        </View>
        <Button buttonStyle={styles.button} width="100%" onPress={handlePlay}>
          Play
        </Button>
      </View>
    </>
  );
};

export default ClipInfo;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  listContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  listText: {
    padding: 5,
    fontSize: 16,
    textAlign: "left",
    color: "white",
  },
  button: {},
});
