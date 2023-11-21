import styled from "styled-components";

const Main = styled.main`
    margin: auto;
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
`;

const Container = ({children}) => (
    <Main>
        {children}
    </Main>
);

export default Container;