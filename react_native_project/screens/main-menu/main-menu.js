import React from 'react';
import { Component, StyleSheet, Text, View } from 'react-native';

function MainMenu() {
  return(
    <View style={styles.container}>
      <Text>Menú</Text>
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

export default MainMenu;