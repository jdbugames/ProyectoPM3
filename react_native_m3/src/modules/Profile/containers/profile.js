import React, {Component} from 'react'
import { Button } from 'native-base'
import {View, Text, AsyncStorage} from 'react-native'
import styles from '../../../utils/styles'

class Profile extends Component {

  render(){

    return(
      <View style={styles.container}>
        <Button danger transparent bordered style={styles.buttomCenter}
        onPress={ () => {
          AsyncStorage.removeItem('userLogin')
          this.props.navigation.navigate('Login')
        } }
        ><Text>Cerrar sesión</Text></Button>
      </View>
    )

  }

}

export default Profile
