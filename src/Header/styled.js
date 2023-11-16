import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    margin: auto;
    max-width: 600px;
    text-align: center;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.ternary};
    border-radius: 10px;
    border: 2px solid ${({theme}) => theme.colors.primary};
    box-shadow: 0px 0px 10px 3px rgba(10, 10, 10, 1);
`;

export const Title = styled.h1`
    margin-top: 0;
`;

export const Subtitle = styled.h2`
    color: ${({theme}) => theme.colors.secondary};
    font-weight: 400;
`;