import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './screens/Login';
import { List } from './screens/List';
import { Icon } from 'react-native-elements';
import { Detail } from './screens/Detail';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const LoginS = createStackNavigator();

const LoginStack = () => {  
    <LoginS.Navigator screenOptions={{    
      headerShown: false}}>
      <LoginS.Screen name='Login' component={Login} />
    </LoginS.Navigator>
  
}

const HomeStack = () => (
  <Stack.Navigator screenOptions={{
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
    <Stack.Screen name='List' component={List} options={{
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
            )}}/>
    <Stack.Screen name='Detail' component={Detail} />
  </Stack.Navigator>
);

export default function App() {
  const [isLoggin, setIsLoggin] = useState(true);
  return (
    <NavigationContainer>      
      <Tab.Navigator screenOptions={{    
        headerShown: false,      
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
        <Tab.Screen name='Muestras' component={''} />
        <Tab.Screen name='Home' component={HomeStack} options={{          
          tabBarIcon: (props) => (
          <Icon type="feather" name='home' color={props.color} />
        )
        }} />
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
