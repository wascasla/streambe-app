import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export const Detail = () => {
    const route = useRoute();
    const { item } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 20 }}>
       
      
      {/* Imagen del usuario */}
      <Image source={{ uri: item.photo }} style={{ width: 150, height: 150, borderRadius: 75, marginTop: 20 }} />
      <Text  style={{ color: 'black', fontWeight: 'bold' }}>{item.name+' '+item.surnames} </Text>
      {/* Botones de acción */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <View>
        <TouchableOpacity style={{ backgroundColor: '#F55F5F', borderRadius: 50, paddingVertical: 5, paddingHorizontal: 5 }}>        
            <Icon type="Ionicons" name='call' color="white" size={20} />
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={{ backgroundColor: '#F55F5F', borderRadius:50, paddingVertical: 5, paddingHorizontal: 5 }}>
            <Icon type="Fontisto" name='email' color="white" size={20} />
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={{ backgroundColor: '#F55F5F', borderRadius: 50, paddingVertical: 5, paddingHorizontal: 5 }}>
            <Icon type="font-awesome" name='whatsapp' color="white" size={20} />
        </TouchableOpacity>
        </View>
      </View>
      
      {/* Detalles del contacto */}
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <DetailRow title="Fecha de Nacimiento" value="01/01/1990" icon="calendar" />
        <DetailRow title="Género" value="Masculino" icon="user" />
        <DetailRow title="Profesión" value="Arquitecto" icon="briefcase" />
      </View>
      
      {/* Botón de eliminar contacto */}
      <TouchableOpacity style={{ backgroundColor: '#F55F5F', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20, marginTop: 50 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Eliminar contacto</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailRow = ({ title, value, icon }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Icon type="feather" name={icon} color="#000" size={20} />
      <Text style={{ marginLeft: 10, flex: 1 }}>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};