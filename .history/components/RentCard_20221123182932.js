import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const RentCard = ({ data }) => {
  return (
    <TouchableOpacity>
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
        <Text>{data.title}</Text>
        <Text>{data.description}</Text>
        <View>
        <Text>{data.description}</Text>
          <Text>{data.price}</Text>

        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RentCard;
