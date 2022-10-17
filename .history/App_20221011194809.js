import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import Appstack from "./Navigation/Appstack";
import "react-native-gesture-handler";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const App = () => {
  return (
    <TailwindProvider>
      <Appstack />
    </TailwindProvider>
  );
};

export default App;
