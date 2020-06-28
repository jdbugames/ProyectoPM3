import React from 'react';
import { Component, StyleSheet, Text, View } from 'react-native';
import { Container, Button, H1, Input, Form, Item, Toast} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import globalStyles from '../../styles/global';

function CreateAccount({ navigation }) {

  //React navigation

  const navigation = useNavigation();
  return(
    <Container style={[ globalStyles.contenedor,{backgroundColor: '#e84347'}]}>
      <View style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>moviles</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input} >
            <Input placeholder="Email2"/>
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input secureTextEntry={true} placeholder="Password2"/>
          </Item>
        </Form>
        <Button square block style={globalStyles.boton}>
          <Text onPress={ () => navigation.navigate(CrearCuenta)} style={globalStyles.botonTexto}>Iniciar Sesión</Text>
        </Button>
        <Text style={globalStyles.enlace}>Crear Cuenta</Text>
      </View>
    </Container>
  );
}