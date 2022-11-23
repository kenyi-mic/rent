import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Entypo, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Category = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const catData = [
    {
      id: 1,

      fullIcon: (
        <Entypo style={styles.catIcon} name="home" size={24} color="black" />
      ),
      name: "Apartment",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      fullIcon: (
        <Entypo style={styles.catIcon} name="book" size={24} color="black" />
      ),
      name: "Books",
    },
    {
      id: 5,
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
  ];

  useEffect(() => {
    const fetchData = () => {
      setCategories(catData);
    };
    fetchData();
  }, []);
  return (
    <>
      {categories.map((item, index) => (
        <Pressable
          className="flex flex-row flex-start items-center justify-start space-x-2 bg-blue-500 border-b border-gray-200 pl-4"
          key={item.id}
          android_ripple={{ color: "lightblue" }}
          onPress={() =>
            navigation.navigate("Listing", {
              catId: item.id,
              catName: item.name,
            })
          }
        >
          {item.fullIcon}
          <Text className="text-lg text-gray-800 my-2 font-bold">
            {item.name}
          </Text>
        </Pressable>
      ))}
    </>
  );
};
const styles = StyleSheet.create({});
export default Category;
