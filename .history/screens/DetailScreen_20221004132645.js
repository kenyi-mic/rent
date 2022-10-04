import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Check out the product details</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default DetailScreen;
