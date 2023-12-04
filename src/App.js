import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";
import Clock from "./Clock";
import { GlobalStyle } from "./GlobalStyle";
import useExchangeRates from "./useExchangeRates";
import LoadingScreen from "./LoadingScreen";

const theme = {
  colors: {
    primary: "#646464",
    secondary: "#cfcfcf",
    ternary: "#fffd7c",
  },
}

function App() {
  const { exchangeRates } = useExchangeRates();
  console.log(exchangeRates);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <LoadingScreen exchangeRates={exchangeRates}>
          <Header
            aboveTitleContent={<Clock />}
            fetchDateData={exchangeRates.data}
          />
          <Form />
        </LoadingScreen>
      </Container>
    </ThemeProvider>
  );
}

export default App;
