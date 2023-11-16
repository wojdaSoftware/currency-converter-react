import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./Header";
import Form from "./Form";
import Container from "./Content";
import Clock from "./Clock";
import background from './converter-background.jpg';

const theme = {
  breakpoint: 767,
  colors: {
    primary: "#646464",
    secondary: "#cfcfcf",
    ternary: "#fffd7c",
  },
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
    ::after,
    ::before {
      box-sizing: inherit;
  }

  body {
    background-image: url(${background});
    background-repeat: repeat-y;
    background-size: cover;
    font-family: 'Poppins', sans-serif;
    margin: 0 20px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header aboveTitleContent={<Clock />} />
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;
