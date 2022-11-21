import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailScreen from "../screens/DetailScreen";
import AppTab from "./AppTab";
import SelectPhotosScreen from "../screens/SelectPhotoScreen";
import CategoryScreen from "../screens/CategoryScreen";
import LocationScreen from "../screens/LocationScreen";

const Appstack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "#D4F1F4",
          },

          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="BottomTap" component={AppTab} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="select photos" component={SelectPhotosScreen} />
        <Stack.Screen name="category" component={CategoryScreen} />
        <Stack.Screen name="location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appstack;
