import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/login/login';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Invitado') {
              iconName = focused ? 'md-person' : 'md-person';
            } else if (route.name === 'Administrador') {
              iconName = focused ? 'md-construct' : 'md-construct';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Invitado" component={Login} />
        <Tab.Screen name="Administrador" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}