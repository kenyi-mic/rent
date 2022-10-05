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
        tabBarActiveTintColor: "2192FF",
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
        name="VIP"
        component={HomeScreen}
        options={{
          tabBarLabel: "VIP",
          tabBarIcon: ({ color = "black" }) => (
            <HomeIcon color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={HomeScreen}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color = "black" }) => (
            <HomeIcon color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color = "black" }) => (
            <UserIcon color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTab;
