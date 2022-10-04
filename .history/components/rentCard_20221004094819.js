import { View, Text, Image } from "react-native";
import React from "react";

const RentCard = () => {
  return (
    <View className="items-center">
      <View className="flex flex-row justify-evenly bg-white w-11/12  rounded-lg my-3 ">
        <Image
          className="my-2 rounded-lg"
          source={{
            width: 145,
            height: 120,
            uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
        />
        <View className="m-2">
          <Text className="text-xl text-red-400 font-bold">
            Apartment for rent
          </Text>
          <Text className="text-lg text-gray-400">Barisal, Bangladesh</Text>
          <Text className="bg-gray-200 p-2 rounded-lg w-1/2 text-base font-semibold my-2">
            $50/DAY
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RentCard;
