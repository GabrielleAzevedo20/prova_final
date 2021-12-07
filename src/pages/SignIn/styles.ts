import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background}; 
`;

export const Content = styled.View`
    margin-top: -40px;
    padding: 50px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    font-size: 15px;
    margin-bottom: 16px;
`;
