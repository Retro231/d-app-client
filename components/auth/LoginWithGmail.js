import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setLogin } from "./authSlice";
import { useDispatch } from "react-redux";

const LoginWithGmail = ({ btnText }) => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const handleGoogleAuth = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(setLogin(true));
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <TouchableOpacity onPress={handleGoogleAuth}>
      <View>
        <Image
          height={10}
          width={10}
          source={require("./../../assets/googleIcon.png")}
        />
        {/* <Text>{btnText}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default LoginWithGmail;

const styles = StyleSheet.create({});
