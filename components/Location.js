import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const Location = () => {
  const navigation = useNavigation();
  const [locations, setLocations] = useState([]);

  const locData = [
    {
      id: 1,
      name: "Manhattan",
    },
    {
      id: 2,
      name: "Moonachie",
    },
    {
      id: 3,
      name: "Barcelona",
    },
    {
      id: 4,
      name: "Hackensack",
    },
    {
      id: 5,
      name: "Athenia",
    },
    {
      id: 6,
      name: "Boston",
    },
    {
      id: 7,
      name: "Wayne",
    },
    {
      id: 8,
      name: "London",
    },
    {
      id: 9,
      name: "New york",
    },
    {
      id: 10,
      name: "Los Angelas",
    },
    {
      id: 11,
      name: "Buenos Ares",
    },
  ];

  useEffect(() => {
    const fetchData = () => {
      setLocations(locData);
    };
    fetchData();
  }, []);
  return (
    <>
      {locations.map((item, index) => (
        <Pressable
          className="flex flex-rowitems-center justify-start bg-blue-500 border-b border-gray-200 pl-4"
          key={item.id}
          android_ripple={{ color: "lightblue" }}
          onPress={() =>
            navigation.navigate("Listing", {
              locId: item.id,
              locName: item.name,
            })
          }
        >
          <Text className="text-lg text-gray-800 my-2 font-bold">
            {item.name}
          </Text>
        </Pressable>
      ))}
    </>
  );
};
const styles = StyleSheet.create({});
export default Location;
