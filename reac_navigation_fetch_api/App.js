import React, { useState } from 'react';
import {Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native';

export default function App() {
  const [taskName, SetTaskName] = useState("");
  const [taskDate, SetTaskDate] = useState("");
  const createTask = async ()=>{
    try{
      const response = await fetch('http://192.168.1.2:3000/api/addtask',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          task: taskName,
          date: taskDate
        })
      });
      const json = await response.json();
      Alert.alert("Tarea Creada");
    }catch(error){
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter task" onChangeText={text=>SetTaskName(text)}/>
      <TextInput placeholder="Enter date" onChangeText={text=>SetTaskDate(text)}/>
      <Button title="Create Task" onPress={createTask}></Button>
    </View>
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
