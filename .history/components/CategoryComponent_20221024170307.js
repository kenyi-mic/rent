import React from "react";
import { Text, View, Pressable } from "react-native";

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
        <Text>OK</Text>
        <Text>Ok</Text>
      </View>
    </Pressable>
  );
};

export default CategoryComponent;
