import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DetailTask({route, navigation}) {
    const detailTask = () => {
        navigation.navigate('Detail');
    }
    return(
        <View style={styles.container}>
        <Text>Task</Text>
        <Text>date</Text>
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