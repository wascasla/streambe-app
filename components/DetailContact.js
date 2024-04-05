import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Icon } from "react-native-elements";

export const DetailContact = ({ title, value, icon }) => {
    return (
        <View
          style={styles.container}
        >
          <View
            style={styles.subContainer}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon type="feather" name={icon} color="#000" size={20} />
              <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{title} </Text>
            </View>
            <Text>{value}</Text>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  subContainer: {
    width: "100%",
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
  },
});