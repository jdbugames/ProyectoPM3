import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CardComponent(props) {
    const {_id, task, date} = props.task;
    return(
        <View style={styles.container}>
            <Text>{_id}</Text>
            <Text>{task}</Text>
            <Text>{date}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5
    },
});

export default CardComponent;