import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";

const RentCard = ({ items }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Details")}
      className="items-center"
    >
      <View className="flex flex-row justify-evenly bg-white w-11/12  rounded-lg my-3 ">
        <Image
          className="my-2 rounded-sm"
          source={{
            width: 145,
            height: 120,
            uri: items.images[0],
          }}
        />
        <View className="m-2">
          <Text className="text-xl text-red-400 font-bold">{items.title}</Text>
          <Text className="text-sm text-gray-600 font-light">
            {items.description}
          </Text>
          <Text className="text-lg text-gray-400">{items.locationName}</Text>
          <Text className="bg-gray-200 p-2 rounded-lg w-1/2 text-base font-semibold my-2">
            ${items.rentPrice}/DAY
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RentCard;
