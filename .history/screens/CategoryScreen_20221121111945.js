import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import Category from "../components/Category";

const CategoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="pl-4">
        <Text className="text-xl  font-bold text-gray-800">
          Choose a Category
        </Text>
        <Category />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default CategoryScreen;
