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
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  QueueListIcon,
  SparklesIcon,
  Square2StackIcon,
} from "react-native-heroicons/solid";
const { height, width } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="bg-red-400 px-2 pt-4">
        <View className="flex flex-row w-full bg-white items-center p-2 rounded-xl">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            className="text-lg mx-2 w-full"
            placeholder="Search for property"
          />
        </View>
        <View className="flex flex-row justify-between py-2">
          <View className="flex flex-row items-center">
            <MapPinIcon color="gray" size={20} />
            <Text className="text-lg text-gray-600 text-semibold">
              Location
            </Text>
            <Text className="text-bold text-lg mx-2  ">Barisal</Text>
          </View>
          <View className="flex flex-row items-center">
            <Square2StackIcon color="gray" size={20} />
            <Text className="text-lg text-gray-600 text-semibold">
              Category
            </Text>
            <Text className="text-bold text-lg mx-2  ">Apartment</Text>
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