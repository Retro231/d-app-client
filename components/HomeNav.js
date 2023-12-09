import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const data = [
  {
    id: "1",
    title: "Practice",
    screen: "PracticeScreen",
  },
  {
    id: "2",
    title: "Mock Test",
    screen: "MockScreen", //change in future...
  },
  {
    id: "3",
    title: "Hazard Percepton",
    screen: "HazardScreen", //change in future...
  },
  // {
  //   id: "4",
  //   title: "Highway Code",
  //   screen: "HighwayCodeScreen", //change in future...
  // },
  {
    id: "5",
    title: "Road Sign",
    screen: "RoadSignScreen", //change in future...
  },
];

const HomeNav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.row}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.singleNav}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#cbd5e1",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  singleNav: {
    minWidth: "100%",
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: "#d1d5db",
    marginBottom: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#0e1826",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#0e1826",
  },
});
