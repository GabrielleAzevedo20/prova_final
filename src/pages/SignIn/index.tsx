import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';
import { ButtonIcon } from '../../components/ButtonIcon'
import { Container, Title, Content } from './styles';

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return(
        <Container>
            <Image source={logoImg} />
            <Content>
            <Title>
                CARTEIRA DE TRABALHO{'\n'}
                DIGITAL
            </Title>
            <ButtonIcon title="Entrar"
                activeOpacity={0.7}
                disabled={false}
                onPress={handleSignIn}
            />
            </Content>
        </Container>
    )
}