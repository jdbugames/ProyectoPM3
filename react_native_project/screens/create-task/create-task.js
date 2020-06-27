import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CreateTask() {
  return(
    <View style={styles.container}>
      <Text>Create Tasks Works</Text>
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

export default CreateTask;