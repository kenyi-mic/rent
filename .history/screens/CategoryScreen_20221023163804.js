import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const CategoryScreen = () => {
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
    <SafeAreaView style={styles.container}>
      <View>
        {categories.names.map((category) => {
          <Pressable
            onPress={() =>
              navigation.navigate("Listing", {
                id: category.id,
                name: category.name,
              })
            }
          ></Pressable>;
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default CategoryScreen;
