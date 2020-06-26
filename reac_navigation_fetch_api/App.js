import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListTasks from './screens/list-tasks/list-tasks';
import CreateTask from './screens/create-task/create-task';
import DetailTask from './screens/detail-task/detail-task';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListTasks} />
        <Stack.Screen name="Create" component={CreateTask} />
        <Stack.Screen name="Detail" component={DetailTask} />
      </Stack.Navigator>
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

export default App;
