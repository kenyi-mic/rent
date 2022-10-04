import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import React from "react";

const DetailScreen = () => {
  return (
    <View>
      <Text>Check out the product details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default DetailScreen;
