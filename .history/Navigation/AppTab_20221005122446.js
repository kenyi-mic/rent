import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ClipboardIcon,
  HomeIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";

const AppTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "#D4F1F4" }}
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "dodgerblue",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color = "black" }) => (
            <HomeIcon color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Listing"
        component={HomeScreen}
        options={{
          tabBarLabel: "Listing",
          tabBarIcon: ({ color = "black" }) => (
            <ClipboardIcon color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailScreen}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color = "black" }) => (
            <HomeIcon color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color = "black" }) => (
            <UserIcon color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTab;
