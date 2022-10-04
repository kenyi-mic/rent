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
      <View className="bg-red-400 p-2">
        <View className="flex flex-row w-full bg-white items-center p-2 rounded-xl">
          <SparklesIcon color="gray" size={20} />
          <TextInput
            className="text-lg mx-2"
            placeholder="Search for property"
          />
        </View>
        <View>
          <View className="flex flex-row ">
            <Text className="text-lg text-gray-600 text-semibold">
              Location
            </Text>
            <Text className="text-bold text-lg mx-2  ">Barisal</Text>
          </View>
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
