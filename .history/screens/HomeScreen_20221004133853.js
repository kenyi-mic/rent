import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import RentCard from "../components/RentCard";

import Header from "../components/Header";
const { height, width } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <RentCard />
      <RentCard />
      <RentCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: height,
    backgroundColor: "#D4F1F4",
  },
  main: {
    width: width,
    height: height,
  },
});
export default HomeScreen;
