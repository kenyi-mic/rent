import React from "react";
import { Text, View } from "react-native";

const CategoryComponent = () => {
  return (
    <Pressable
      key={item.id}
      onPress={() =>
        navigation.navigate("Listing", {
          id: item.id,
          name: item.name,
        })
      }
    >
      <View>
        <Text>{item?.fullIcon}</Text>
        <Text>{item?.name}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryComponent;
