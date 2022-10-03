import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-row justify-evenly bg-blue-600 w-5/6 rounded-lg">
        <Image
          source={{
            width: 100,
            height: 100,
            uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
        />
        <View className="m-2">
          <Text className="text-xl text-red-400 font-bold">
            Apartment for rent
          </Text>
          <Text className="text-lg text-gray-400">Barisal, Bangladesh</Text>
          <Text className="bg-gray-200 p-2 rounded-lg w-1/2 text-base">
            $50/DAY
          </Text>
        </View>
      </View>
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
