import styled from "styled-components";

export const ClockContainer = styled.div`
    font-family: 'Courier New', Courier, monospace;
    color: ${({theme}) => theme.colors.secondary};
    text-align: right;
    padding: 15px;
    font-size: smaller;
`;