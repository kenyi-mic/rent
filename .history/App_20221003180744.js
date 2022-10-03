import { View, Text } from "react-native";

import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <TailwindProvider>
      <HomeScreen />
    </TailwindProvider>
  );
};

export default App;
