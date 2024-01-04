import "expo-dev-client";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./screens/BottomTab/Home";
import Progress from "./screens/BottomTab/Progress";
import PracticeScreen from "./screens/Stack/PracticeScreen";
import MockScreen from "./screens/Stack/MockScreen";
import HazardScreen from "./screens/Stack/HazardScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RoadSignScreen from "./screens/Stack/RoadSignScreen";
import Quiz from "./components/quiz/Quiz";
import QuizMenu from "./components/quiz/QuizMenu";
import { useEffect } from "react";
import { setQuestionsDB, setVideoQuestionsDB } from "./dbSlice";
import QuizResult from "./components/quiz/QuizResult";
import ShowQuizResult from "./components/quiz/ShowQuizResult";
import HazardClip from "./components/hazardClip/HazardClip";
import ClipInfo from "./components/hazardClip/ClipInfo";
import questions from "./api/questionList";
import videoQuestions from "./api/videoQuesions";
import VideoDownload from "./components/VideoDownload";
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
          } else if (rn === "Progress") {
            iconName = focused ? "trending-up-outline" : "trending-up-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: `#fcd34d`,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#0e1826",
          position: "absolute",
          bottom: 0,
          // borderTopStartRadius: 50,
          // borderTopEndRadius: 50,
          borderRadius: 50,
          marginHorizontal: 5,
          shadowColor: "black", // Shadow color
          shadowOffset: { width: 0, height: -4 }, // Offset (x, y)
          shadowOpacity: 0.5, // Opacity
          shadowRadius: 4, // Radius
          elevation: 6, // Elevation for Android (higher values result in a stronger shadow)
        },
        tabBarItemStyle: {
          margin: 10,
        },
        style: { backgroundColor: "transparent" },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Test" component={VideoDownload} />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // firbase
  //   // check if user is subscribed or not.
  //   const getUserSubInfo = async (uid) => {
  //     const querySnapshot = await getDocs(
  //       collection(db, "users", uid, `subscriptionInfo`)
  //     );
  //     querySnapshot.forEach((doc) => {
  //       // console.log(doc.data().subscribe);
  //       dispatch(setSubscribed(doc.data().subscribe));
  //     });
  //   };
  //   // check if there is any user login
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("The user is ------> ", authUser);
  //     if (authUser) {
  //       //the user just logged in/was logged in
  //       console.log(authUser);
  //       console.log(authUser.displayName);
  //       dispatch(setLogin(true));

  //       // for test only ------------------------------>
  //       dispatch(setSubscribed(true));
  //       //------------it will change

  //       // getUserSubInfo(authUser.uid);
  //     } else {
  //       console.log("No user");
  //     }
  //     if (authUser && authUser.displayName !== null) {
  //       dispatch(
  //         setUserRegInfo({
  //           name: authUser.displayName,
  //           email: authUser.email,
  //         })
  //       );
  //     }
  //   });

  //   // get question form firebase db
  //   const getQuestions = async () => {
  //     const dbRef = ref(ques_db);
  //     let questions = await get(child(dbRef, `questions`));
  //     let videoQuestions = await get(child(dbRef, `videoQuestions`));
  //     if (questions.exists()) {
  //       // console.log(questions.val());
  //       dispatch(setQuestionsDB(questions.val()));
  //     } else {
  //       console.log("no data found");
  //     }
  //     if (videoQuestions.exists()) {
  //       // console.log(videoQuestions.val());
  //       dispatch(setVideoQuestionsDB(videoQuestions.val()));
  //     } else {
  //       console.log("no data found");
  //     }
  //   };
  //   getQuestions();
  // }, []);

  // get data from quesions json file.
  useEffect(() => {
    if (questions && videoQuestions) {
      dispatch(setQuestionsDB(questions));
      dispatch(setVideoQuestionsDB(videoQuestions));
    }
  }, []); // Empty dependency array to ensure the effect runs only once
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
      <Stack.Screen name="ClipInfo" component={ClipInfo} />
      <Stack.Screen name="HazardClip" component={HazardClip} />
      <Stack.Screen name="RoadSignScreen" component={RoadSignScreen} />
      <Stack.Screen name="QuizScreen" component={Quiz} />
      <Stack.Screen name="QuizMenuScreen" component={QuizMenu} />
      <Stack.Screen name="QuizResultScreen" component={QuizResult} />
      <Stack.Screen name="ShowQuizResult" component={ShowQuizResult} />
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
