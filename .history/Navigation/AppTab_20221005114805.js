import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BellAlertIcon,
  BuildingLibraryIcon,
  HomeIcon,
} from "react-native-heroicons/solid";
import HomeScreen from "../screens/HomeScreen";

const AppTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color = "black" }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTab;
