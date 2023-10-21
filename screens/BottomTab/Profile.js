import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native";
import { Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dialog } from "@rneui/themed";
import LoginDialog from "../../components/auth/LoginDialog";
import RegisterDialog from "../../components/auth/RegisterDialog";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const { userRegInfo, isLogedin } = useSelector((state) => state.auth.value);
  const [visibleLoginDialog, setVisibleLoginDialog] = useState(false);
  const [visibleRegisterDialog, setVisibleRegisterDialog] = useState(false);
  const user = true;
  const toggleLoginDialog = () => {
    setVisibleLoginDialog(!visibleLoginDialog);
  };
  const toggleRegisterDialog = () => {
    setVisibleRegisterDialog(!visibleRegisterDialog);
  };
  const menuItems = [
    { key: "edit_profile", title: "Edit Profile" },
    { key: "change_password", title: "Change Password" },
    { key: "view_result", title: "View Result" },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    // For example, you can navigate to a logout screen or trigger a logout action.
  };

  return user !== null ? (
    <SafeAreaView>
      <View style={styles.container}>
        <Icon name="person-circle-outline" size={50}></Icon>
        <Text style={styles.name}> {isLogedin && userRegInfo.name}</Text>
        <Text style={styles.email}> {isLogedin && userRegInfo.email}</Text>

        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.menuItem}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Logout" onPress={handleLogout} color={"red"} />
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <View style={styles.container}>
        <Icon name="person-circle-outline" size={50}></Icon>
        <Text style={styles.name}>Guest</Text>
        <Text style={styles.email}>To save your progress,Please login.</Text>
      </View>
      <View style={{ paddingHorizontal: 20, gap: 10 }}>
        <Button title="Login" onPress={toggleLoginDialog} />
        <Text style={{ textAlign: "center" }}>Not have an account?</Text>
        <Button title="Register" onPress={toggleRegisterDialog} />
      </View>

      {/* login dialog */}
      {/* <Dialog
        isVisible={visibleLoginDialog}
        onBackdropPress={toggleLoginDialog}
      >
        <Dialog.Title title="Login Page" />
        <Text>hi,Login</Text>
        <Dialog.Actions>
          <Dialog.Button
            title="login"
            onPress={() => console.log("Primary Action Clicked!")}
          />
        </Dialog.Actions>
      </Dialog> */}

      <LoginDialog
        isVisible={visibleLoginDialog}
        onBackdropPress={toggleLoginDialog}
      />
      <RegisterDialog
        isVisible={visibleRegisterDialog}
        onBackdropPress={toggleRegisterDialog}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    alignItems: "center",
  },
  btnContainer: {
    paddingHorizontal: 40,
    alignItems: "center",
  },
});
