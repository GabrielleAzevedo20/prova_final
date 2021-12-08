import React from 'react';

import { Text, Image } from 'react-native';
import logoPng from '../../assets/logopng.png'
import { Container } from './styles';


export function Header(){
  return (
    <Container>
      <Image source={logoPng} />
        <Text>Identifique-se no gov.br com</Text>
    </Container>
  );
}