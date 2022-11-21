import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import Location from "../components/Location";

const LocationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="">
        <Text className="text-xl  font-bold text-gray-800 pl-4 my-4">
          Choose a Location(City)
        </Text>
        <Location />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default LocationScreen;
