// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/sign-in-screen';
import SignUpScreen from './screens/sign-up-screen';
import HomeScreen from './screens/home-screen';
/* import TabScreen from './screens/tab-screen'; */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailUser from './screens/detail-user-screen';
import ListUsers from './screens/list-users-screen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="detail" component={DetailUser} />
        <Tab.Screen name="list" component={ListUsers} />
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerStyle:{
    //         backgroundColor: "#4527a0",
    //       },
    //       headerTintColor: '#fff',
    //       headerTitleStyle:{
    //         fontWeight: 'bold'
    //       }
    //     }}
    //   >
    //     <Stack.Screen name="Home" component={HomeScreen}/>
    //     <Stack.Screen name="SignIn" component={SignInScreen}/>
    //     <Stack.Screen name="SignUp" component={SignUpScreen}/>
    //     <Stack.Screen name="Tabs" component={TabScreen}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
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

export default App;