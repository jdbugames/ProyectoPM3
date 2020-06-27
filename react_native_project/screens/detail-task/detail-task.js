import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function DetailTask({route, navigation}) {
    const {id, task, date} = route.params;
    const deleteTask = async () => {
        try {
            const response = await fetch('http://192.168.1.2:3000/api/deletetask',{
                method: 'delete',
                headers: {
                    Accept: 'aplication/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            });
            const json = await response.json();
            navigation.goBack();

        } catch (error) {
            console.log("error" +  error)
        }
    }
    return(
        <View style={styles.container}>
        <Text>{id}</Text>
        <Text>{task}</Text>
        <Text>{date}</Text>
        <Button title="Delete" onPress={deleteTask}></Button>
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

export default DetailTask;