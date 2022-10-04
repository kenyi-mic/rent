import { View, Text } from "react-native";

import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import Appstack from "./Navigation/Appstack";

const App = () => {
  return (
    <TailwindProvider>
      <Appstack />
    </TailwindProvider>
  );
};

export default App;
