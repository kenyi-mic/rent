import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { ChevronRightIcon, PlusCircleIcon } from "react-native-heroicons/solid";

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
      <View className="mx-8 my-4">
        <Text className="my-4 text-xl font-semibold">
          Upload images [Max 5 photos]
        </Text>
        <Pressable className="flex justify-center bg-white items-center h-32 w-32 border-2  border-dashed rounded-3xl">
          <PlusCircleIcon size={40} color="black" />
        </Pressable>
      </View>
      {/*Categories*/}
      <View className="flex flex-row space-x-1 mx-8 justify-between bg-white p-2 rounded-lg items-center ">
        <Text className="text-lg font-semibold text-blue-800">Category</Text>
        <ChevronRightIcon size={24} color="darkblue" />
      </View>
      {/* text input*/}
      <View className="w-11/12 items-center">
        <TextInput
          className="w-400 my-4 text-lg p-2 bg-gray-50 "
          placeholder="Add location"
        />
      </View>
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
