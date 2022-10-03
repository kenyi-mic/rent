import { View, Text } from "react-native";

import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const App = () => {
  return (
    <TailwindProvider>
      <View>
        <Text className="text-red-600">Let's build a rent App</Text>
      </View>
    </TailwindProvider>
  );
};

export default App;
