import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './screens/Login';
import { List } from './screens/List';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#F55F5F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: {
            backgroundColor: '#F55F5F',
          },
          tabBarInactiveTintColor: '#fff', 
        }}>
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='Muestras' component={''} />
        <Tab.Screen name='Home' component={List} 
          options={{
            headerTitle: 'Tu lista de contactos',
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
              <Icon
                type="feather"
                name="home"
                color="#fff"
                size={24}
                style={{ paddingLeft: 10 }}
                onPress={() => {}}
              />
              </View>
            ),
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
              <Icon
                type="feather"
                name="settings"
                color="#fff"
                size={20}
                onPress={() => {}}
              />
              </View>
            ),
            tabBarIcon: (props) => (
            <Icon type="feather" name='home' color={props.color} />
          )}}/>
          <Tab.Screen name='Vademecum' component={''} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
