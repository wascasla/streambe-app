import React, { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  FlatList,
} from "native-base";
import { getUsers } from "../../services/services";
import Item from "../../components/Item";

export const List = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const goToDetail = (item) => {
    navigation.navigate('Detail', {item});
  };

  return (
    <NativeBaseProvider>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item user={item} onPress={() => goToDetail(item)} />}
        keyExtractor={(item) => item.contactId}
      />
    </NativeBaseProvider>
  );
};
