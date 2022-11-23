import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { Auth, Storage, API } from "aws-amplify";
import RentCard from "../components/RentCard";
import { getListingByCreatedAt } from ".././src/graphql/queries";

import Header from "../components/Header";
const { height, width } = Dimensions.get("window");
const HomeScreen = () => {
  const fetchAll = async () => {
    try {
      const itemListByCommonID = await API.graphql({
        query: getListingByCreatedAt,
        variables: { commonID: "1", sortDirection: "DESC" },
        autjMode: "AWS-IAM",
      });
      console.log(itemListByCommonID.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <RentCard />
      <RentCard />
      <RentCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: height,
  },
  main: {
    width: width,
    height: height,
  },
});
export default HomeScreen;
