import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";

const ListingScreen = () => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log("Email is: ", user?.attributes?.email);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  return (
    <SafeAreaView style={styles.container}>
      <Text>ListingScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default withAuthenticator(ListingScreen);
