import React from "react";
import { Text, View } from "react-native";

const CategoryComponent = (id, name, fullIcon) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Listing", {
          id: id,
          name: name,
        })
      }
    >
      <View>
        <Text>Home sweet home</Text>
        <Text>{fullIcon}</Text>
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryComponent;
