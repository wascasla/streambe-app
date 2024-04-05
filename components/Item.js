import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Item = ({ user, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        {user.photo ? (
        <Image source={{ uri: user.photo }} style={styles.photo} />
      ) : (
        <MaterialIcons name="person" size={50} color="black" style={styles.icon} />
      )}
      <Text style={styles.name}>{user.name+" "+user.surnames}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={40} color="#F55F5F" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
    textAlign: 'center',
    lineHeight: 50,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Item;
