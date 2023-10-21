import { StyleSheet, Text } from "react-native";
import React from "react";
import { Dialog } from "@rneui/themed";

const RegisterDialog = ({ isVisible, onBackdropPress }) => {
  return (
    <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <Dialog.Title title="Registration Page" />
      <Text>hi,Register</Text>
      <Dialog.Actions>
        <Dialog.Button
          title="login"
          onPress={() => console.log("Primary Action Clicked!")}
        />
      </Dialog.Actions>
    </Dialog>
  );
};

export default RegisterDialog;

const styles = StyleSheet.create({});
