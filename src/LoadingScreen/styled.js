import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    max-width: 600px;
    height: 300px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.ternary};
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0px 10px 3px rgba(10, 10, 10, 1);
`

export const StyledImage = styled.img`
    display: block;
    height: 50%;
`