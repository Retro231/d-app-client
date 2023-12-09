// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React, { useEffect, useState } from "react";
// import Icon from "react-native-vector-icons/Ionicons";
// import { FlatList } from "react-native";
// import { Button } from "@rneui/themed";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Dialog } from "@rneui/themed";
// import LoginDialog from "../../components/auth/LoginDialog";
// import RegisterDialog from "../../components/auth/RegisterDialog";
// import { useDispatch, useSelector } from "react-redux";
// import { getAuth, signOut, updateProfile } from "firebase/auth";
// import { setLogin, setSubscribed } from "../../components/auth/authSlice";

// const Profile = () => {
//   const { userRegInfo, isLogedin } = useSelector((state) => state.auth.value);
//   const [visibleLoginDialog, setVisibleLoginDialog] = useState(false);
//   const [visibleRegisterDialog, setVisibleRegisterDialog] = useState(false);
//   const toggleLoginDialog = () => {
//     setVisibleLoginDialog(!visibleLoginDialog);
//   };
//   const toggleRegisterDialog = () => {
//     setVisibleRegisterDialog(!visibleRegisterDialog);
//   };
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const dispatch = useDispatch();
//   const menuItems = [
//     { key: "edit_profile", title: "Edit Profile" },
//     { key: "change_password", title: "Change Password" },
//   ];

//   const handleLogout = async () => {
//     try {
//       const isSignOut = await signOut(auth);
//       console.log(isSignOut);
//       dispatch(setLogin(false));
//       dispatch(setSubscribed(false));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(userRegInfo.name);
//   useEffect(() => {
//     const updateUser = () => {
//       updateProfile(auth.currentUser, {
//         displayName: userRegInfo.name,
//       })
//         .then(() => {
//           // Profile updated!
//           // ...
//           console.log("Profile updated!");
//         })
//         .catch((error) => {
//           // An error occurred
//           // ...
//           console.log(error);
//         });
//     };

//     if (user && user.displayName === null) {
//       updateUser();
//     }
//   });
//   return user !== null ? (
//     <SafeAreaView style={{ backgroundColor: "#cbd5e1", height: "100%" }}>
//       <View style={styles.container}>
//         <Icon name="person-circle-outline" size={50}></Icon>
//         <Text style={styles.name}> {isLogedin && userRegInfo.name}</Text>
//         <Text style={styles.email}> {isLogedin && userRegInfo.email}</Text>
//       </View>
//       <FlatList
//         data={menuItems}
//         keyExtractor={(item) => item.key}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.menuItem}>
//             <Text>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//         ListFooterComponent={
//           // <View style={styles.btnContainer}>
//           //   <Button title="Logout" onPress={handleLogout} color={"red"} />
//           // </View>
//           <>
//             <TouchableOpacity
//               style={styles.menuItemLastChild}
//               onPress={handleLogout}
//             >
//               <Text style={{ fontWeight: "bold" }}>Logout</Text>
//             </TouchableOpacity>
//           </>
//         }
//       />
//     </SafeAreaView>
//   ) : (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <Icon name="person-circle-outline" size={50}></Icon>
//         <Text style={styles.name}>Guest</Text>
//         <Text style={styles.email}>To save your progress,Please login.</Text>
//       </View>
//       <View style={{ paddingHorizontal: 20, gap: 10 }}>
//         <Button title="Login" onPress={toggleLoginDialog} />
//         <Text style={{ textAlign: "center" }}>Not have an account?</Text>
//         <Button title="Register" onPress={toggleRegisterDialog} />
//       </View>

//       {/* login dialog */}
//       {/* <Dialog
//         isVisible={visibleLoginDialog}
//         onBackdropPress={toggleLoginDialog}
//       >
//         <Dialog.Title title="Login Page" />
//         <Text>hi,Login</Text>
//         <Dialog.Actions>
//           <Dialog.Button
//             title="login"
//             onPress={() => console.log("Primary Action Clicked!")}
//           />
//         </Dialog.Actions>
//       </Dialog> */}

//       <LoginDialog
//         isVisible={visibleLoginDialog}
//         onBackdropPress={toggleLoginDialog}
//       />
//       <RegisterDialog
//         isVisible={visibleRegisterDialog}
//         onBackdropPress={toggleRegisterDialog}
//       />
//     </SafeAreaView>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "left",
//     marginVertical: 10,
//     marginHorizontal: 30,
//     backgroundColor: "#ddd",
//     borderRadius: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "gray",
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   email: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   menuItem: {
//     marginHorizontal: 30,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "gray",
//     alignItems: "left",
//     backgroundColor: "#ddd",
//     marginTop: 5,
//     borderRadius: 10,
//   },
//   menuItemLastChild: {
//     marginHorizontal: 30,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "gray",
//     alignItems: "left",
//     backgroundColor: "#f28d8d",
//     marginTop: 5,
//     borderRadius: 10,
//     marginTop: 40,
//   },
//   btnContainer: {
//     marginTop: 10,
//     paddingHorizontal: 40,
//     alignItems: "right",
//   },
// });
