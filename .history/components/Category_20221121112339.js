import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Entypo, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Category = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState({
    names: [
      {
        id: 0,

        fullIcon: (
          <Entypo style={styles.catIcon} name="home" size={24} color="black" />
        ),
        name: "Apartment",
      },
      {
        id: 1,
        fullIcon: (
          <Ionicons
            style={styles.catIcon}
            name="car-sport"
            size={24}
            color="black"
          />
        ),
        name: "Vehicle",
      },
      {
        id: 2,
        fullIcon: (
          <MaterialIcons
            style={styles.catIcon}
            name="room-preferences"
            size={24}
            color="black"
          />
        ),
        name: "Household Items",
      },
      {
        id: 3,
        fullIcon: (
          <Entypo style={styles.catIcon} name="book" size={24} color="black" />
        ),
        name: "Books",
      },
      {
        id: 4,
        fullIcon: (
          <AntDesign
            style={styles.catIcon}
            name="paperclip"
            size={24}
            color="black"
          />
        ),
        name: "Office Equipment",
      },
    ],
  });
  return (
    <>
      {categories.map((item, index) => (
        <Pressable
          key={item.id}
          onPress={() =>
            navigation.navigate("Listing", {
              catId: item.id,
              catName: item.name,
            })
          }
        ></Pressable>
      ))}
    </>
  );
};
const styles = StyleSheet.create({});
export default Category;
