import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input } from 'native-base';
import { KeyboardAvoidingView, AsyncStorage} from 'react-native'
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import styles from '../../../utils/styles'
import data from '../../../utils/dataGlobal'

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username : ''
    }
  }

  navigate = async (param) => {
    let userLogin = {
      user : this.state.username,
      perm : true
    }
    AsyncStorage.setItem('userLogin',JSON.stringify(userLogin))
    this.props.navigation.navigate(param)
  }

  render() {
    return (
      <Container>
            <Content padder contentContainerStyle={styles.loginContent}>
              <KeyboardAvoidingView behavior="padding" enabled>
                <Card>
                  <CardItem header bordered>
                      <Text style={styles.textCenter}>Inicio de sesión</Text>
                  </CardItem>
                  <CardItem>
                    <Body style={styles.loginBody}>
                      <Item>
                        <MaterialIcons active name='email' size={ data.sizeInputIcon } />
                        <Input placeholder='Correo' onChangeText={(username) => this.setState({username})}/>
                      </Item>
                      <Item>
                        <Entypo active name='lock' size={ data.sizeInputIcon } />
                        <Input placeholder='Contraseña'/>
                      </Item>
                    </Body>
                  </CardItem>
                  <CardItem footer bordered>
                      <Button bordered onPress={() => this.navigate('Register')}>
                        <Text>Registro</Text>
                      </Button>
                      <Button bordered success style={styles.loginBoton} onPress={() => this.navigate('Profile')}>
                        <Text>Entrar</Text>
                      </Button>
                  </CardItem>
                </Card>
              </KeyboardAvoidingView>
            </Content>
      </Container>
    );
  }
}

export default Login