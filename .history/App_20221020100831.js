import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import Appstack from "./Navigation/Appstack";
import "react-native-gesture-handler";

import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";

import awsconfig from "./src/aws-exports";
Amplify.configure({
  ...awsconfig,
  analytics: {
    disabled: true,
  },
});

const App = () => {
  return (
    <TailwindProvider>
      <Appstack />
    </TailwindProvider>
  );
};

export default App;
