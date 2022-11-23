import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RentCard = ({ data }) => {
  const navigation = useNavigation();
  console.log(data);
  return (
    <View className="flex flex-col items-center w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail")}
        className="flex flex-row space-x-2 w-11/12 bg-white justify-center m-2 "
      >
        {/*Right*/}
        <View className="pl-3">
          <Image
            className="w-36 h-36 m-2"
            source={{
              uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
          />
        </View>
        {/*left*/}
        <View className="pr-2">
          <Text className="text-xl font-semibold text-red-400 my-2">
            {data.title}
          </Text>
          <Text className="text-lg text-ellipsis w-48 text-gray-600 overflow-hidden mr-3">
            {data.description}
          </Text>
          <View className="flex flex-row justify-between items-center my-2 mr-3">
            <Text className="font-semibold text-sm text-gray-700">
              {data.locationName}
            </Text>
            <Text className="text-sm px-2 font-bold text-gray-100 bg-gray-700 p-1 rounded-sm">
              ${data.rentPrice}/Day
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RentCard;
