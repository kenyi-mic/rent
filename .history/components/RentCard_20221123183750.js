import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const RentCard = ({ data }) => {
  return (
    <TouchableOpacity className="flex flex-row space-x-4 w-5/6 ">
      {/*Right*/}
      <View>
        <Image
          className="w-40 h-40 m-2"
          source={{
            uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
        />
      </View>
      {/*left*/}
      <View>
        <Text className="text-xl font-semibold text-red-400">{data.title}</Text>
        <Text>{data.description}</Text>
        <View className="flex flex-row justify-between">
          <Text>{data.createdAt}</Text>
          <Text>{data.rentPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RentCard;
