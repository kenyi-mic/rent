import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Pressable,
} from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { PlusCircleIcon, PlusIcon } from "react-native-heroicons/solid";

const ListingScreen = () => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log("User id is: ", user?.attributes?.sub);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  return (
    <SafeAreaView style={styles.container}>
      {/* upload images*/}
      <View className="m-10 items-center">
        <Text calssName="my-4">Upload images [Max 5 photos]</Text>
        <Pressable className="flex justify-center items-center  h-32 w-32 border-2  border-dashed rounded-3xl">
          <PlusCircleIcon size={40} color="black" />
        </Pressable>
      </View>
      <Text>Category</Text>
      <Text>Location</Text>
      <Text>Title</Text>
      <Text>Descriptions</Text>
      <Text>Value</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default withAuthenticator(ListingScreen);
