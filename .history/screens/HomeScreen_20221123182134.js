import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Auth, Storage, API } from "aws-amplify";
import RentCard from "../components/RentCard";
import { getListingByCreatedAt } from ".././src/graphql/queries";

import Header from "../components/Header";
const { height, width } = Dimensions.get("window");
const HomeScreen = () => {
  const [newItems, setNewItems] = useState([]);
  const fetchAll = async () => {
    try {
      const itemListByCommonID = await API.graphql({
        query: getListingByCreatedAt,
        variables: { commonID: "1", sortDirection: "DESC" },
        autjMode: "AWS-IAM",
      });
      setNewItems(itemListByCommonID.data.getListingByCreatedAt.items);
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
      <FlatList
        data={newItems}
        renderItem={({ item }) => <RentCard data={item} />}
      />
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
