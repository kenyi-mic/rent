import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Pressable,
  TextInput,
  TextBase,
  TextInputBase,
} from "react-native";
import React, { useState } from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import {
  AdjustmentsVerticalIcon,
  ChevronRightIcon,
  MapPinIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";

const ListingScreen = () => {
  const [imageData, setImageData] = useState([]);

  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log("User id is: ", user?.attributes?.sub);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

  const route = useRoute();
  if (!route.params) {
    console.log("There is no data in this route function!");
  } else {
    if (route.params.imageData) {
      setImageData(route.params.imageData);
    }
  }

  console.log(imageData);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* upload images*/}
      <View className="mx-8 my-4">
        <Text className="my-4 text-xl font-semibold">
          Upload images [Max 5 photos]
        </Text>
        <Pressable
          onPress={() => navigation.navigate("select photos")}
          className="flex justify-center bg-white items-center h-32 w-32 border  border-dashed rounded-3xl"
        >
          <PlusCircleIcon size={40} color="black" />
        </Pressable>
      </View>
      {/*Categories*/}
      <View className="flex flex-row space-x-1 mx-8 justify-between bg-white p-2 rounded-lg items-center ">
        <View className="flex flex-row items-center space-x-1">
          <AdjustmentsVerticalIcon size={24} color="darkblue" />
          <Text className="text-lg font-semibold text-blue-800">Category</Text>
        </View>
        <ChevronRightIcon size={24} color="darkblue" />
      </View>
      {/*Location*/}
      <View className="flex flex-row space-x-1 mx-8 justify-between bg-white p-2 rounded-lg items-center mt-4 ">
        <View className="flex flex-row items-center space-x-1">
          <MapPinIcon size={24} color="darkblue" />
          <Text className="text-lg font-semibold text-blue-800">Location</Text>
        </View>
        <ChevronRightIcon size={24} color="darkblue" />
      </View>

      {/* text input  --> title*/}
      <View className="w-5/4  bg-white my-4 mx-8 ">
        <TextInput className=" text-lg p-2 bg-gray-50 " placeholder="Title" />
      </View>
      {/* text input  --> description*/}
      <View className="w-5/4  bg-white my-2 mx-8 ">
        <TextInput
          className=" text-lg p-2 bg-gray-50 "
          placeholder="Add description"
          numberOfLines={2}
        />
      </View>
      {/* text input  --> description*/}
      <View className="w-1/2  bg-white my-4 mx-8 ">
        <TextInput
          className=" text-lg p-2 bg-gray-50 "
          placeholder="Add Price"
        />
      </View>
      <View className="m-8 bg-blue-500 rounded elevated shadow-xl">
        <Text className="text-center text-lg p-2 font-semibold text-gray-100">
          Post Advertisement
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default withAuthenticator(ListingScreen);