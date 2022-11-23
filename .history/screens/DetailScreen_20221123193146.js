import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";


const DetailScreen = () => {
  const {params{id, title, description, images, category, categoryID, rentPrice, loaction, locationID, comminID, createdAt, updatedAt}} = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text></Text>
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
