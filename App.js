import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import Appstack from "./Navigation/Appstack";
import "react-native-gesture-handler";

const App = () => {
  return (
    <TailwindProvider>
      <Appstack />
    </TailwindProvider>
  );
};

export default App;
