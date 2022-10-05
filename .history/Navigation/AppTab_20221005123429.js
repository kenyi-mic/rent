import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ChatBubbleLeftRightIcon,
  ClipboardIcon,
  HomeIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ListingScreen from "../screens/ListingScreen";
import ChatScreen from "../screens/ChatScreen";

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
        component={ListingScreen}
        options={{
          tabBarLabel: "Listing",
          tabBarIcon: ({ color = "black" }) => (
            <ClipboardIcon color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color = "black" }) => (
            <ChatBubbleLeftRightIcon color={color} size={30} />
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
