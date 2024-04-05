import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./screens/Login";
import { List } from "./screens/List";
import { Icon } from "react-native-elements";
import { Detail } from "./screens/Detail";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LoginStack = ({ setIsLoggedIn }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#F55F5F",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      tabBarStyle: {
        backgroundColor: "#F55F5F",
      },
      tabBarInactiveTintColor: "#fff",
    }}
  >
    <Stack.Screen
      name="List"
      component={List}
      options={{
        headerTitle: "Tu lista de contactos",
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
      }}
    />
    <Stack.Screen name="Detail" component={Detail} options={{headerTitle: "Contacto",}} />
  </Stack.Navigator>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    SecureStore.getItemAsync("isLoggedIn")
      .then((value) => {
        if (value !== null) {
          setIsLoggedIn(value === "true");
        }
      })
      .catch((error) =>
        console.error("Error retrieving authentication status:", error)
      );
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#F55F5F",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarStyle: {
              backgroundColor: "#F55F5F",
            },
            tabBarInactiveTintColor: "#fff",
            tabBarActiveTintColor: 'black'
          }}
        >
          <Tab.Screen
            name="Muestras"
            listeners={() => ({
              tabPress: (e) => {
                e.preventDefault();
              },
            })}
            options={{
              tabBarIcon: (props) => (
                <Icon type="feather" name="briefcase" color={props.color} />
              ),
            }}
          >
            {() => null}
          </Tab.Screen>

          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: (props) => (
                <Icon type="feather" name="home" color={props.color} />
              ),
            }}
          />
          <Tab.Screen
            name="Vademecum"
            listeners={() => ({
              tabPress: (e) => {
                e.preventDefault();
              },
            })}
            options={{
              tabBarIcon: (props) => (
                <Icon type="feather" name="book-open" color={props.color} />
              ),
            }}
          >
            {() => null}
          </Tab.Screen>
        </Tab.Navigator>
      ) : (
        <LoginStack setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
}
