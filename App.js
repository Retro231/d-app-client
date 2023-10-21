import { Platform, StyleSheet } from "react-native";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./screens/BottomTab/Home";
import Setting from "./screens/BottomTab/Setting";
import PracticeScreen from "./screens/Stack/PracticeScreen";
import MockScreen from "./screens/Stack/MockScreen";
import HazardScreen from "./screens/Stack/HazardScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HighwayCodeScreen from "./screens/Stack/HighwayCodeScreen";
import RoadSignScreen from "./screens/Stack/RoadSignScreen";
import Quiz from "./components/quiz/Quiz";
import QuizMenu from "./components/quiz/QuizMenu";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { child, get, ref } from "firebase/database";
import { setQuestionsDB, setVideoQuestionsDB } from "./dbSlice";
import { ques_db } from "./config/firebase";
import Profile from "./screens/BottomTab/Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (rn === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: `#000`,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    // get question form firebase db
    const getQuestions = async () => {
      const dbRef = ref(ques_db);
      let questions = await get(child(dbRef, `questions`));
      let videoQuestions = await get(child(dbRef, `videoQuestions`));
      if (questions.exists()) {
        // console.log(questions.val());
        dispatch(setQuestionsDB(questions.val()));
      } else {
        console.log("no data found");
      }
      if (videoQuestions.exists()) {
        // console.log(videoQuestions.val());
        dispatch(setVideoQuestionsDB(videoQuestions.val()));
      } else {
        console.log("no data found");
      }
    };
    getQuestions();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeTab} />
      <Stack.Screen name="PracticeScreen" component={PracticeScreen} />
      <Stack.Screen name="MockScreen" component={MockScreen} />
      <Stack.Screen name="HazardScreen" component={HazardScreen} />
      <Stack.Screen name="HighwayCodeScreen" component={HighwayCodeScreen} />
      <Stack.Screen name="RoadSignScreen" component={RoadSignScreen} />
      <Stack.Screen name="QuizScreen" component={Quiz} />
      <Stack.Screen name="QuizMenuScreen" component={QuizMenu} />
    </Stack.Navigator>
  );
};

// 1. set up redux
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          {/* <TabNavigation /> */}
          <HomeStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
