import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Welcome to rent...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? statusBar.currentHeight : 0,
  },
});
export default HomeScreen;
