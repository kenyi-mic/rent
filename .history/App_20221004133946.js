import { View, Text } from "react-native";

import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            backgroundColor: "#D4F1F4",
          }}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
