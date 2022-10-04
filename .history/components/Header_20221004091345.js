import { View, Text, TextInput } from "react-native";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  Square2StackIcon,
} from "react-native-heroicons/solid";
import React from "react";

const Header = () => {
  return (
    <View>
      <View className="bg-red-400 px-2 py-4">
        <View className="flex flex-row w-full bg-white items-center p-2 rounded-xl">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            className="text-lg mx-2 w-full"
            placeholder="Search for property"
          />
        </View>
        <View className="flex flex-row justify-between py-2">
          <View className="flex flex-row items-center">
            <MapPinIcon color="gray" size={20} />
            <Text className="text-lg text-gray-600 text-semibold">
              Location
            </Text>
            <Text className="text-bold text-lg mx-2  ">Barisal</Text>
          </View>
          <View className="flex flex-row items-center">
            <Square2StackIcon color="gray" size={20} />
            <Text className="text-lg text-gray-600 text-semibold">
              Category
            </Text>
            <Text className="text-bold text-lg mx-2  ">Apartment</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
