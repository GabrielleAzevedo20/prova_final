import React from 'react';

import { Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import logoPng from '../../assets/logopng.png'
import { Container } from './styles';


export function Header(){
  return (
    <Container>
      <Image source={logoPng} />
      <MaterialCommunityIcons name="circle-half-full" size={24} color="blue" />
      <MaterialIcons name="location-off" size={24} color="blue" /> 
        <Text>Identifique-se no gov.br com</Text>
    </Container>
  );
}