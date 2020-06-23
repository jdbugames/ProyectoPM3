// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailUser from './detail-user-screen';
import ListUsers from './list-users-screen';

const tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="detail" component={DetailUser} />
        <Tab.Screen name="list" component={ListUsers} />
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

export default TabScreen;