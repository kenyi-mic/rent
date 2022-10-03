import { View, Text } from "react-native";

import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <View>
          <Text className="text-red-600">Let's build a rent App</Text>
        </View>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
