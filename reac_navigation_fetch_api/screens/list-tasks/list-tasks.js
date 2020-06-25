import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardComponent from './card-component';
import { FlatList } from 'react-native-gesture-handler';

function ListTasks() {
    const [DATA, setData] = useState([]);
    const fetchTasks = async () =>{
        try {
            let response = await fetch('http://192.168.1.2:3000/api/listtasks');
            let jsonResponse = await response.json();
            setData(jsonResponse.tasks)
        } catch (error) {
            console.log('error');
        }
    }
    useEffect(()=>{
        fetchTasks();
    },[]);
    return(
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item})=> <CardComponent task={item}/>}
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