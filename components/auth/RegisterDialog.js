import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Dialog } from "@rneui/themed";
import { Divider } from "@rneui/themed";
import LoginWithGmail from "./LoginWithGmail";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { TextInput } from "react-native";
import { setUserRegInfo } from "./authSlice";
import { useDispatch } from "react-redux";

const RegisterDialog = ({ isVisible, onBackdropPress }) => {
  const [serverError, handleServerError] = useState();
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const handleAuth = async (userInfo) => {
    setLoading(true);
    const { fName, lName, email, password } = userInfo;

    let fullName = `${fName} ${lName}`;
    console.log(fullName);
    dispatch(
      setUserRegInfo({
        name: fullName,
        email,
      })
    );
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      onBackdropPress();
    } catch (error) {
      handleServerError(firebaseErrorHandler(error));
    }
  };
  const firebaseErrorHandler = (err) => {
    console.log(err.code);

    switch (err.code) {
      case "auth/invalid-email":
        return "Invalid email address!Try again.";
      default:
        return err.message;
    }
  };
  const onSubmit = async (data) => {
    const logout = await handleAuth(data);
    reset({
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };
  return (
    <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <Dialog.Title title="Registration Page" />
      <View>
        <View>
          <Controller
            control={control}
            rules={{
              required: "First Name require!",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="First Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="fName"
          />
          {errors.fName && (
            <Text style={{ color: "red" }}>{errors.fName?.message}</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: "Last Name require!",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Last Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lName"
          />
          {errors.lName && (
            <Text style={{ color: "red" }}>{errors.lName?.message}</Text>
          )}
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

          <Controller
            control={control}
            rules={{
              required: "Confirm Password require!",
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Confirm Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="confirm_password"
          />
          {errors.confirm_password && (
            <Text style={{ color: "red" }}>
              {errors.confirm_password?.message}
            </Text>
          )}
          {serverError && <Text style={{ color: "red" }}>{serverError}</Text>}
        </View>
        <Dialog.Actions>
          <Dialog.Button title="Register" onPress={handleSubmit(onSubmit)} />
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
    </Dialog>
  );
};

export default RegisterDialog;

const styles = StyleSheet.create({});
