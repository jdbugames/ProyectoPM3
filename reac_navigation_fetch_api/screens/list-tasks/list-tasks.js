import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardComponent from './card-component';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import {useIsFocused, NavigationRouteContext} from '@react-navigation/native';

function ListTasks({ navigation }) {
    const [DATA, setData] = useState([]);
    const isFocused = useIsFocused([]);
    const fetchTasks = async () =>{
        try {
            let response = await fetch('http://192.168.1.2:3000/api/listtasks');
            let jsonResponse = await response.json();
            setData(jsonResponse.tasks)
        } catch (error) {
            console.log('error');
        }
    }
    const detailTask = (id, task, date) => {
        navigation.navigate('Detail', {
            id: id,
            task: task,
            date: date
        });
    }
    useEffect(()=>{
        fetchTasks();
    },[isFocused]);
    return(
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item})=> <TouchableHighlight onPress={ () => detailTask
                (item._id,item.task, item.date)}>
                   <CardComponent task={item}/> 
                </TouchableHighlight>}
                keyExtractor={item => item._id}
            >
            </FlatList>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column'
    },
});

export default ListTasks;