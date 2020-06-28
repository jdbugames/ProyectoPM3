import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Item, Input } from 'native-base';
import { KeyboardAvoidingView} from 'react-native'
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import styles from '../../../utils/styles'
import data from '../../../utils/dataGlobal'

class Register extends Component {

  return = () => this.props.navigation.goBack()

  render() {
    return (
      <Container>
            <Content padder contentContainerStyle={styles.loginContent}>
              <KeyboardAvoidingView behavior="padding" enabled>
                <Card>
                  <CardItem header bordered>
                      <Text style={styles.textCenter}>Registro de usuario</Text>
                  </CardItem>
                  <CardItem>
                    <Body style={styles.loginBody}>
                      <Item inlineLabel>
                        <FontAwesome name='user' size={ data.sizeInputIcon } />
                        <Input placeholder='Nombre'/>
                      </Item>
                      <Item inlineLabel>
                        <FontAwesome name='user' size={ data.sizeInputIcon } />
                        <Input placeholder='Apellido'/>
                      </Item>
                      <Item inlineLabel>
                        <MaterialIcons name='email' size={ data.sizeInputIcon } />
                        <Input placeholder='Correo electrónico'/>
                      </Item>
                      <Item inlineLabel>
                        <Entypo active name='lock' size={ data.sizeInputIcon } />
                        <Input placeholder='Contraseña'/>
                      </Item>
                    </Body>
                  </CardItem>
                  <CardItem footer bordered>
                      <Button danger bordered onPress={this.return}>
                        <Text>Volver</Text>
                      </Button>
                      <Button success bordered style={styles.loginBoton} onPress={() => this.props.navigation.navigate('Profile')} >
                        <Text>Guardar</Text>
                      </Button>
                  </CardItem>
                </Card>
              </KeyboardAvoidingView>
            </Content>
      </Container>
    );
  }
}

export default Register