import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import {
  AdjustmentsVerticalIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  MapPinIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const ListingScreen = () => {
  const [imageData, setImageData] = useState([]);
  const [category, setCategory] = useState({ catId: 0, catName: "Category" });
  const [location, setLocation] = useState({ locId: 0, locName: "Location" });
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [rentPrice, setPrice] = useState();

  Auth.currentAuthenticatedUser()
    .then((user) => {
      // tailwindcss
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

  const route = useRoute();

  useEffect(() => {
    if (!route.params) {
      console.log("There is no data in this route function!");
    } else {
      if (route.params.imageData) {
        setImageData(route.params.imageData);
      } else if (route.params.catId) {
        setCategory(route.params);
      } else if (route.params.locId) {
        setLocation(route.params);
      }
    }
  });

  const getImageMetaData = async () =>{
          imageData.map(async(component, index)=>{
            const imageUrl = component.uri,
            const response = await fetch(imageUrl).then(response => response.json)
            
          })
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* upload images*/}
        <View className="mx-8 my-4">
          <Text className="my-4 text-xl font-semibold">
            Upload images [Max 5 photos]
          </Text>
          <Pressable
            onPress={() => navigation.navigate("select photos")}
            className="flex justify-center bg-white items-center h-32 w-32 border  border-dashed rounded-3xl"
          >
            <PlusCircleIcon size={40} color="black" />
          </Pressable>
          <ScrollView horizontal>
            {imageData &&
              imageData.map((item) => (
                <View key={item.id}>
                  <Image
                    className="w-20 mx-2 my-4 h-32"
                    source={{ uri: item.uri }}
                  />
                </View>
              ))}
          </ScrollView>
        </View>

        {/*Categories*/}
        <Pressable
          android_ripple={{ color: "gray" }}
          onPress={() => navigation.navigate("category")}
          className="flex flex-row space-x-1 mx-8 justify-between bg-white p-2 rounded-lg items-center "
        >
          <View className="flex flex-row items-center space-x-1">
            <AdjustmentsVerticalIcon size={24} color="darkblue" />
            <Text className="text-lg font-semibold text-blue-800">
              {category.catName}
            </Text>
          </View>
          <ChevronRightIcon size={24} color="darkblue" />
        </Pressable>
        {/*Location*/}
        <Pressable
          android_ripple={{ color: "gray" }}
          onPress={() => navigation.navigate("location")}
          className="flex flex-row space-x-1 mx-8 justify-between bg-white p-2 rounded-lg items-center mt-4 "
        >
          <View className="flex flex-row items-center space-x-1">
            <MapPinIcon size={24} color="darkblue" />
            <Text className="text-lg font-semibold text-blue-800">
              {location.locName}
            </Text>
          </View>
          <ChevronRightIcon size={24} color="darkblue" />
        </Pressable>

        {/* text input  --> title*/}
        <View className="flex flex-row space-x-2 justify-start items-center px-2 w-5/4  bg-white my-4 mx-8 ">
          <MaterialIcons
            style={styles.catIcon}
            name="title"
            size={24}
            color="darkblue"
          />
          <TextInput
            className=" text-lg p-2 bg-gray-50 w-full"
            placeholder="Title"
            value={title}
            onChangeText={(e) => setTitle(e)}
          />
        </View>
        {/* text input  --> description*/}
        <View className="flex flex-row space-x-2 items-center justify-start px-2 w-5/4  bg-white my-2 mx-8 ">
          <DocumentTextIcon color="darkblue" size={24} />
          <TextInput
            className=" text-lg p-2 bg-gray-50 w-full"
            placeholder="Add description"
            numberOfLines={2}
            value={description}
            onChangeText={(e) => setDescription(e)}
          />
        </View>
        {/* text input  --> description*/}
        <View className="flex flex-row space-x-2 items-center px-2 w-1/2 justify-start  bg-white my-4 mx-8 ">
          <CurrencyDollarIcon size={24} color="darkblue" />
          <TextInput
            className=" text-lg p-2 bg-gray-50 "
            placeholder="Add Price"
            value={rentPrice}
            keyboardType={"numeric"}
            multiline={true}
            onChangeText={(e) => setPrice(e)}
          />
        </View>
        <View className="m-8 bg-blue-500 rounded elevated shadow-xl">
          <Button
            type="submit"
            className="text-center text-lg p-2 font-semibold text-gray-100"
            title={"Post Advertisement"}
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default withAuthenticator(ListingScreen);
