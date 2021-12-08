import styled from 'styled-components/native' 


export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.View`
    margin-top: 5px;
    `;

export const SubTitle = styled.Text`
    margin-top: 18px;
`;

export const Input = styled.TextInput`
    border-width: 1px;
    background-color: #fff;
    width: 300px;
    margin-top: 18px;
`;

export const Message = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title500};
    color: ${({ theme }) => theme.colors.overlay};
    padding: 10px;
`;


export const MessageEnd = styled.Text`
    margin-top: 200px;
    font-family: ${({ theme }) => theme.fonts.title700};
    color: ${({ theme }) => theme.colors.overlay};
    justify-content: center;
    margin-left: 92px;
`;