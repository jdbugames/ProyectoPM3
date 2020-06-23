import * as React from 'react';
import {View, Text } from 'react-native';

function SignInScreen({ route, navigation }) {

  const {name, data} = route.params;
  return (
    <View>
      <Text>Sign Works {name} {data}</Text>
    </View>
  );
}

export default SignInScreen;