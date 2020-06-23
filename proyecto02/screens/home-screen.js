import * as React from 'react';
import {Button, View, Text } from 'react-native';

function Home({ navigation }) {
  const goToTabs = () =>{
    navigation.navigate('Tabs');
  }

  const goToSignIn =  ()=>{
    let data = {
      name: "juan",
      data: 5
    };
    navigation.navigate('SignIn', data);
  }
  return (
    <View>
      <Text>Home Works</Text>
      <Button title="Go to Sign In" onPress={goToSignIn}></Button>
      <Button title="Go to Tabs" onPress={goToTabs}></Button>
    </View>
  );
}

export default Home;