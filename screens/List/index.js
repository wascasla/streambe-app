import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  NativeBaseProvider,
  FlatList,
  ScrollView,
  Divider,
  Image,
  Spinner,
} from "native-base";
import { getUsers } from "../../services/services";
import Item from "../../components/Item";

export const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setData(data);
        console.log("data", data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <NativeBaseProvider>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item user={item} onPress={() => {}} />}
        keyExtractor={(item) => item.contactId}
      />
    </NativeBaseProvider>
  );
};
