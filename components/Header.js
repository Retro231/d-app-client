import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.logoContainer}>
        <Image
          style={[{ width: 80, height: 80, resizeMode: "contain" }]}
          source={require("../assets/logo/logo.png")}
        />
        <Text style={styles.appTitle}>UK Driving Theory Revision 2023</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fcd34d",
  },
  appTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
