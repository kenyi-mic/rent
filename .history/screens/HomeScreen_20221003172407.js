import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="bg-yellow-100">
        <Text>Welcome to rent...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default HomeScreen;
