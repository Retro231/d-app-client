import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import {
  BarChart,
  LineChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenTitle from "../../components/ScreenTitle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@rneui/themed";

const Progress = () => {
  const navigation = useNavigation();
  const [isActive, setActive] = useState({
    practice: true,
    mock: false,
    hazard: false,
  });
  const [testState, setTestState] = useState("practice");
  const [chartLebels, setChartLebels] = useState([]);
  const [chartDataSets, setChartDataSets] = useState([]);

  const getMetaData = (data) => {
    // Extract array of titles
    const titles = data.map((test) => test.testTitle);

    // Calculate answer percentage for each test
    const answerPercentages = data.map((test) => {
      const percentage = (test.correctAns / test.totalQues) * 100;
      return percentage.toFixed(2);
    });

    return { titles, answerPercentages };
  };

  const getStoredData = async (key) => {
    // You can also retrieve the stored array to verify the result
    const storedArrayJSON = await AsyncStorage.getItem(key);
    const storedArray = storedArrayJSON ? JSON.parse(storedArrayJSON) : [];

    console.log("Stored Array:", storedArray);
    const metaData = getMetaData(storedArray);
    setChartLebels(metaData.titles);
    console.log("Titles:", metaData.titles);
    setChartDataSets(metaData.answerPercentages);
    console.log("Answer Percentages:", metaData.answerPercentages);
  };

  const handlePracticeBtn = () => {
    isActive.practice !== true &&
      setActive({
        practice: true,
        mock: false,
        hazard: false,
      });
    getStoredData("practice");
    setTestState("practice");
  };
  const handleMockBtn = () => {
    setActive({
      practice: false,
      mock: true,
      hazard: false,
    });

    getStoredData("mock");
    setTestState("mock");
  };
  const handleHazardBtn = () => {
    setActive({
      practice: false,
      mock: false,
      hazard: true,
    });
    getStoredData("hazard");
    setTestState("hazard");
  };
  const handleGoBack = () => {
    navigation.navigate("HomeScreen");
  };

  const handleReset = async () => {
    try {
      await AsyncStorage.removeItem(testState);
      getStoredData(testState);
      console.log("clear data");
    } catch (e) {
      // clear error
    }
  };

  const handleRefresh = async () => {
    getStoredData(testState);
  };

  return (
    <View style={{ backgroundColor: "#cbd5e1", height: "100%" }}>
      <ScreenTitle title={`Progress`} />
      <>
        <View style={styles.topBtnArea}>
          <TouchableOpacity
            style={[
              styles.topBtn,
              { backgroundColor: isActive.practice ? "#fcd34d" : "gray" },
            ]}
            onPress={handlePracticeBtn}
          >
            <Text style={styles.topBtnText}>Practice test</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.topBtn,
              { backgroundColor: isActive.mock ? "#fcd34d" : "gray" },
            ]}
            onPress={handleMockBtn}
          >
            <Text style={styles.topBtnText}>Mock test</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.topBtn,
              { backgroundColor: isActive.hazard ? "#fcd34d" : "gray" },
            ]}
            onPress={handleHazardBtn}
          >
            <Text style={styles.topBtnText}>Hazarad Clips</Text>
          </TouchableOpacity>
        </View>
        {/* ---------------- */}
      </>
      <View>
        <View style={styles.container}>
          <View>
            {/* <Text>Bezier Line Chart</Text> */}
            {chartLebels.length !== 0 ? (
              <BarChart
                data={{
                  labels: chartLebels,
                  datasets: [
                    {
                      data: chartDataSets,
                    },
                  ],
                }}
                width={Dimensions.get("window").width + 1}
                height={300}
                yAxisSuffix="%"
                chartConfig={{
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  strokeWidth: 3, // optional, default 3
                  barPercentage: 1,
                  useShadowColorFromDataset: false, // optional
                }}
                verticalLabelRotation={15}
                showValuesOnTopOfBars
                style={{
                  marginVertical: 20,
                }}
              />
            ) : (
              <View
                style={{
                  width: Dimensions.get("window").width + 1,
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Text>No tests taken. Please take a test to see progress.</Text>
                <Button color={"secondary"}>Give a Test</Button>
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row-reverse",
            gap: 10,
          }}
        >
          <Button title={"Reset Progress"} onPress={handleReset} />
          <Button title={"Refresh"} onPress={handleRefresh} />
        </View>
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {},
  topBtnArea: {
    flexDirection: "row",
    width: "100%",
    gap: 1,
    marginVertical: 1,
  },
  topBtn: {
    flex: 1,
    height: "auto",
    paddingVertical: 10,
  },
  topBtnText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
});
