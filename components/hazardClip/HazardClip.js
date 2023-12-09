import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video, ResizeMode } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import { LogBox } from "react-native";
import { useDispatch } from "react-redux";
LogBox.ignoreLogs(["new NativeEventEmitter()"]);
import video2 from "./../../assets/video/video_2.mp4";
import ScreenTitle from "../ScreenTitle";
import { Button } from "@rneui/base";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { getAuth } from "firebase/auth";
// import { db } from "../../config/firebase";
// import { addDoc, collection, updateDoc } from "firebase/firestore";

const hazard = [3, 9, 18];

const HazardClip = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { title } = route.params;
  const video = useRef(null);
  const [status, setStatus] = React.useState({});
  const hasUnsavedChanges = Boolean(true);
  const [videoDuration, setVideoDuration] = useState(null);
  // const auth = getAuth();

  // d-test
  const [isplay, setPlay] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [end, setEnd] = useState(false);
  const [countdown, setCountDown] = useState(false);
  const [flag, setFlag] = useState([]);
  const [rate, setRate] = useState([1]);
  const [avrgRate, setAvrgRate] = useState(0);
  const [isLimitExit, setLimitExit] = useState(false);
  const [loginRequest, showLoginRequest] = useState(false);
  const [isDataSaved, setDataSaved] = useState(false);
  const clickLimit = 15;

  const handleExit = () => {
    navigation.navigate("HazardScreen");
    // dispatch(changeScreenOrientationPortrait());
  };

  // handle tap button click
  const handleTap = () => {
    const getVideoDuration = async () => {
      if (flag.length <= clickLimit) {
        if (video.current) {
          const { positionMillis } = await video.current.getStatusAsync();
          let time = positionMillis / 1000;
          setFlag((prev) => {
            return [...prev, Math.round(time)];
          });
        }
      } else {
        setRate([1]);
        setLimitExit(true);
      }
    };
    getVideoDuration();
  };

  const handlePlayAgain = () => {
    setFlag([]);
    setRate([1]);
    setLimitExit(false);
    setEnd(false);
  };
  // const handleSave = () => {
  //   const user = auth.currentUser;
  //   const addData = async () => {
  //     try {
  //       const docRef = await addDoc(
  //         collection(db, "users", user.uid, `${title}`),
  //         {
  //           rating: avrgRate,
  //         }
  //       );
  //       // Update the timestamp field with the value from the server
  //       const updateTimestamp = await updateDoc(docRef, {
  //         timestamp: new Date().toGMTString(), // this does the trick!
  //       });
  //       console.log("Document written by user uid");
  //       navigation.navigate("HazardScreen");
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   };

  //   addData();
  // };

  // handle async storage
  const storeObject = async (key, newObject) => {
    try {
      // Fetch the existing array from AsyncStorage
      const existingObjectsJSON = await AsyncStorage.getItem(key);
      const existingObjects = existingObjectsJSON
        ? JSON.parse(existingObjectsJSON)
        : [];

      // check length of existingobjects

      if (existingObjects.length === 3) {
        existingObjects[0] = existingObjects[1];
        existingObjects[1] = existingObjects[2];
        existingObjects[2] = newObject;
      } else if (existingObjects.length < 3) {
        // Add the new object to the array
        existingObjects.push(newObject);
      }

      // Save the updated array back to AsyncStorage
      await AsyncStorage.setItem(key, JSON.stringify(existingObjects));
      setTimeout(() => {
        setDataSaved(true);
      }, 2000);
      setDataSaved(false);
    } catch (error) {
      console.error("Error storing object:", error);
    }
  };

  // Example usage
  const saveNewObject = async (key, newObject) => {
    // const key = "your_key_here"; // Replace with your desired key
    // const newObject = { item: "value" }; // Replace with your actual object

    // Call the function to store the new object
    await storeObject(key, newObject);

    // You can also retrieve the stored array to verify the result
    const storedArrayJSON = await AsyncStorage.getItem(key);
    const storedArray = storedArrayJSON ? JSON.parse(storedArrayJSON) : [];

    console.log("Stored Array:", storedArray);
  };

  const handleSave = () => {
    let data = {
      testTitle: title,
      totalQues: 5,
      correctAns: avrgRate,
    };

    saveNewObject("hazard", data);
  };
  const handleEnd = () => {
    setEnd(true);
    setPlay(false);
    setPlaying(false);
    showLoginRequest(false);
    console.log(hazard);
    console.log(flag);
    hazard.map((hazardItem) => {
      const found = flag.find((item) => item === hazardItem);
      if (found) {
        console.log(found);
        setRate((prev) => [...prev, 5]);
      } else {
        const found = flag.find((item) => item === hazardItem + 1);
        if (found) {
          console.log(found);
          setRate((prev) => [...prev, 4]);
        } else {
          const found = flag.find((item) => item === hazardItem + 2);
          if (found) {
            console.log(found);
            setRate((prev) => [...prev, 3]);
          } else {
            const found = flag.find((item) => item === hazardItem + 3);
            if (found) {
              console.log(found);
              setRate((prev) => [...prev, 2]);
            } else {
              const found = flag.find((item) => item === hazardItem + 4);
              if (found) {
                console.log(found);
                setRate((prev) => [...prev, 1]);
              } else {
                setRate((prev) => [...prev, 1]);
              }
            }
          }
        }
      }

      return 0;
    });
  };

  useEffect(() => {
    if (status.didJustFinish) {
      handleEnd();
    }
  }, [status]);

  useEffect(() => {
    console.log(rate);
    let totalRate = 0;
    rate.map((item) => {
      totalRate += item;
      return 0;
    });
    let avrg = Math.round(totalRate / rate.length);
    console.log(avrg);
    setAvrgRate(avrg);
  }, [rate]);

  // result page
  const handleGoBack = () => {
    navigation.navigate("HazardScreen");
  };

  return (
    <>
      {!end ? (
        <SafeAreaView>
          <View style={styles.topContainer}>
            <View style={styles.videoContainer}>
              <Video
                ref={video}
                style={styles.video}
                source={video2}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping={false}
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                onLoad={() => {
                  setPlay(true);
                  video.current.playAsync();
                }}
              />
              <TouchableOpacity style={styles.exitBtn} onPress={handleExit}>
                <Icon name="close-circle" size={24} color={"white"}></Icon>
                <Text style={styles.exitBtnText}>Quit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.tapLeft} onPress={handleTap}>
                <Text style={{ fontSize: 22, color: "white" }}>TAP</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tapRight} onPress={handleTap}>
                <Text style={{ fontSize: 22, color: "white" }}>TAP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flagArea}>
              <Text>Flags: </Text>
              {flag.map((item, index) => {
                return (
                  <Icon key={index} name="flag" size={34} color={"red"}></Icon>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <>
          <View>
            <ScreenTitle title={`Result`} goBack={handleGoBack} />
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#010e1c",
                height: "100%",
              }}
            >
              <View style={styles.resultContainer}>
                {isLimitExit && (
                  <Text style={[styles.resultText]}>
                    You resoponded to this clip in an unacceptable manner! You
                    clicked too meny time.
                  </Text>
                )}

                <View>
                  <Text style={[styles.resultText, styles.scoreText]}>
                    You Scored {avrgRate} out of 5
                  </Text>
                  <View style={[styles.starWrapper]}>
                    {[...Array(avrgRate)].map((_, i) => (
                      <Text style={[styles.star]} key={i}>
                        ⭐
                      </Text>
                    ))}
                  </View>
                </View>
                {isLimitExit && (
                  <Text style={[styles.resultText, styles.tips]}>
                    Tips: Aboid tapping many times in a row. Just Make a few
                    taps when you think you spot a developing hazard.
                  </Text>
                )}
                <View style={styles.resultBtnWrapper}>
                  <Button
                    onPress={handlePlayAgain}
                    color={"primary"}
                    title={"Play Again"}
                  />
                  <Button
                    onPress={handleSave}
                    color={"secondary"}
                    title={"Save"}
                  />
                </View>
                {isDataSaved && (
                  <Text style={{ color: "white", marginTop: 10 }}>
                    Result is Saved!
                  </Text>
                )}
              </View>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default HazardClip;

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#010e1c",
  },
  videoContainer: {
    position: "relative",
    justifyContent: "center",
    margin: 3,
  },
  video: {
    alignSelf: "center",
    width: "80%",
    height: "90%",
  },
  exitBtn: {
    position: "absolute",
    top: "3%",
    left: "3%",
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    gap: 1,
  },
  exitBtnText: {
    fontWeight: "bold",
    color: "white",
  },
  tapLeft: {
    position: "absolute",
    left: "5%",
    height: 80,
    width: 80,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  tapRight: {
    position: "absolute",
    right: "5%",
    height: 80,
    width: 80,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  flagArea: {
    height: "10%",
    backgroundColor: "#dedede",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  resultContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    width: "70%",
  },
  resultText: {
    fontSize: 16,
    color: "#dedede",
  },
  scoreText: {
    backgroundColor: "green",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 10,
  },
  starWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 10,
  },
  star: {
    fontSize: 30,
  },
  tips: {},
  resultBtnWrapper: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
});
