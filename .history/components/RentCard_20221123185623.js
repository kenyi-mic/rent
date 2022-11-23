import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const RentCard = ({ data }) => {
  console.log(data);
  return (
    <TouchableOpacity className="flex flex-row space-x-4 w-5/6 ">
      {/*Right*/}
      <View>
        <Image
          className="w-28 h-28 m-2"
          source={{
            uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
        />
      </View>
      {/*left*/}
      <View className="">
        <Text className="text-xl font-semibold text-red-400 my-2">
          {data.title}
        </Text>
        <Text className="text-lg text-ellipsis w-48 text-gray-600 overflow-hidden">
          {data.description}
        </Text>
        <View className="flex flex-row justify-between items-center my-2">
          <Text className="font-bold text-xs">{data.createdAt}</Text>
          <Text className="text-lg mx-2">${data.rentPrice}/Day</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RentCard;
