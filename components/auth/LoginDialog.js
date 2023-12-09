import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import React from "react";
import { Dialog, Divider } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import LoginWithGmail from "./LoginWithGmail";

const LoginDialog = ({ isVisible, onBackdropPress }) => {
  const [serverError, handleServerError] = useState();
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const firebaseErrorHandler = (err) => {
    console.log(err.code);

    switch (err.code) {
      case "auth/user-not-found":
        return "User not found.Please register for an account!";
      case "auth/wrong-password":
        return "You have enterd wrong password.";
      default:
        return err.message;
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    const { email, password } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      setLoading(false);
      reset({
        email: "",
        password: "",
      });
      onBackdropPress();
    } catch (error) {
      handleServerError(firebaseErrorHandler(error));
      setLoading(false);
    }
  };

  return (
    <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <Dialog.Title title="Login Page" />
      <View>
        <View>
          <Controller
            control={control}
            rules={{
              required: "Email require!",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={{ color: "red" }}>{errors.email?.message}</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: "Password require!",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password?.message}</Text>
          )}
          {serverError && <Text style={{ color: "red" }}>{serverError}</Text>}
        </View>
        <Dialog.Actions>
          <Dialog.Button title="login" onPress={handleSubmit(onSubmit)} />
        </Dialog.Actions>
      </View>
      <Divider />
      <Text style={{ textAlign: "center", marginVertical: 10, color: "gray" }}>
        Login With
      </Text>
      <View
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginWithGmail
          btnText={"Login With Gmail"}
          onBackdropPress={onBackdropPress}
        />
      </View>

      {/* <Dialog.Actions>
        <Dialog.Button
          title="login"
          onPress={() => console.log("Primary Action Clicked!")}
        />
      </Dialog.Actions> */}
    </Dialog>
  );
};

export default LoginDialog;

const styles = StyleSheet.create({});
