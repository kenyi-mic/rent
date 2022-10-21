import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const CategoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CategoryScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default CategoryScreen;
