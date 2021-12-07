import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    height: 48px;
    width: 48px;
    background-color: ${({ theme }) => theme.colors.heading};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

