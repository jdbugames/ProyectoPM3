import React, { Component } from 'react';
import { Text} from 'native-base';
import {Button, View, TextInput, Keyboard, KeyboardAvoidingView, AsyncStorage, TouchableWithoutFeedback, ImageBackground} from 'react-native'
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import styles from '../../../utils/styles'
import data from '../../../utils/dataGlobal'

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      useremail : ''
    }
  }

 /*  async componentDidMount(){
    let valLog = await api.valLogin("Juan", "1234")
    console.log(valLog)
  } */

  navigate = async (param) => {
/*     let userLogin = {
      user : this.state.useremail,
      perm : true
    }
    AsyncStorage.setItem('userLogin',JSON.stringify(userLogin)) */
    this.props.navigation.navigate(param)
  }

  render() {
    return (
      <View  style={styles.headerContent}>
        <ImageBackground source={require('./../../../../assets/home-background.jpg')} style={styles.homeBackgroundImage}>
        <View style={styles.homeButtons}>
          <Button title="GALERIA" onPress={() => this.navigate('Gallery')} />
        </View>
        <View style={styles.homeButtons}>
          <Button title="REGISTRARSE" onPress={() => this.navigate('Register')} />
        </View>
        </ImageBackground>
      </View>
      
    );
  }
}

export default Home