import React from 'react'
import { Container, Content, Input, Message, SubTitle, MessageEnd } from './styles'
import { Header } from '../Header'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ButtonAdd } from '../ButtonAdd';


export function Profile() {
    return(
        <Container>
            <Content>
                <Header />
                <Message>
                <AntDesign name="idcard" size={24} color="blue" />      Número do CPF
                </Message>
                <SubTitle>Digite seu CPF para criar ou acessar a sua conta gov.br </SubTitle>
                <Input type="text" placeholder="Digite seu CPF"/>
                <ButtonAdd />

                <Message>
                    Outras opções de identificação
                </Message>

                <Message>
                <AntDesign name="creditcard" size={24} color="blue" /> Seu Banco
                </Message>

                <Message>
                <AntDesign name="cloud" size={24} color="blue" /> Seu Certificado Digital em Nuvem
                </Message>

                <MessageEnd>
                <Entypo name="info-with-circle" size={24} color="blue" /> Entenda a conta gov.br
                </MessageEnd>
            </Content>
        </Container>
    )
}