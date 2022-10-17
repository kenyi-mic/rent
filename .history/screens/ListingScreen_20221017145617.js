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
import {
  ChevronRightIcon,
  PlusCircleIcon,
  PlusIcon,
} from "react-native-heroicons/solid";

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
      <View className="m-10">
        <Text className="my-4 text-xl font-semibold">
          Upload images [Max 5 photos]
        </Text>
        <Pressable className="flex justify-center bg-white items-center h-32 w-32   border-dashed rounded-3xl">
          <PlusCircleIcon size={40} color="black" />
        </Pressable>
      </View>
      {/*Categories*/}
      <View className="flex flex-row space-x-2">
        <Text>Category</Text>
        <ChevronRightIcon size={20} color="black" />
      </View>
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