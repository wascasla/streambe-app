import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { Icon } from "react-native-elements";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { DetailContact } from "../../components/DetailContact";

export const Detail = () => {
  const route = useRoute();
  const { item } = route.params;

  const handleCall = () => {
    Linking.openURL(`tel:${item.phone}`);
  };

  const handleWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=${item.phone}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${item.email}`);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 20,
      }}
    >
      {item.photo ? (
        <Image
          source={{ uri: item.photo }}
          style={styles.photo}
        />
      ) : (
        <MaterialIcons
          name="person"
          size={120}
          color="black"
          style={styles.icon}
        />
      )}

      <Text style={styles.name}>
        {item.name + " " + item.surnames}{" "}
      </Text>
      <View
        style={styles.containerBtn}
      >
        <View>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={handleCall}
          >
            <Icon type="Ionicons" name="call" color="white" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={handleEmail}
          >
            <Icon type="Fontisto" name="email" color="white" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={handleWhatsApp}
          >
            <Icon type="font-awesome" name="whatsapp" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: "100%", marginTop: 20, paddingHorizontal: 20 }}>
        <DetailContact
          title="Fecha de Nacimiento"
          value={item.birthDate}
          icon="calendar"
        />
        <DetailContact title="Género" value={item.gender === 'FEMALE' ? 'Femenino' : 'Masculino'} icon="user" />
        <DetailContact title="Profesión" value={item.profesion} icon="briefcase" />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#F55F5F",
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginTop: 50,
          width: "80%",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Eliminar de mi lista
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
    textAlign: "center",
    alignSelf: "center",
  },
  photo: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  actionBtn: {
    backgroundColor: "#F55F5F",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  name: { color: "black", fontWeight: "bold", textAlign: "center" }
});
