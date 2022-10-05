import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BellAlertIcon,
  BuildingLibraryIcon,
  HomeIcon,
  UserIcon,
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
          tabBarIcon: ({ color = "black", size={30} }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="VIP"
        component={HomeScreen}
        options={{
          tabBarLabel: "VIP",
          tabBarIcon: ({ color = "black" }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={HomeScreen}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color = "black" }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color = "black" }) => (
            <UserIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTab;
