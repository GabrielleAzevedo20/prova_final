import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container } from './styles'


export function ButtonAdd({ ...rest}: TouchableOpacityProps) {
    return (
        <Container {...rest}>
        </Container>
    )
}
