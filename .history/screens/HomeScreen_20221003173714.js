import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import React from "react";

const { Height, Width } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main} className="bg-yellow-300">
        <Text>Welcome to rent...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    Height: Height,
  },
  main: {
    Width: Width,
    Height: Height,
  },
});
export default HomeScreen;
