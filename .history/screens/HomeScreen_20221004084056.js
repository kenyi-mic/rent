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
import { SparklesIcon } from "react-native-heroicons/solid";
const { height, width } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View className="flex flex-row">
          <SparklesIcon color="gray" size={20} />
          <TextInput placeholder="Search for property" />
        </View>
      </View>
      <RentCard />
      <RentCard />
      <RentCard />
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
  },
  main: {
    width: width,
    height: height,
  },
});
export default HomeScreen;
