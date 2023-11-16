import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Form from "./Form";
import Container from "./Content";
import Clock from "./Clock";
import { GlobalStyle } from "./GlobalStyle";


const theme = {
  colors: {
    primary: "#646464",
    secondary: "#cfcfcf",
    ternary: "#fffd7c",
  },
}

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
