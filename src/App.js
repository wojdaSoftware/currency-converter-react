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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        {
          exchangeRates.status !== "success" ? (
            <LoadingScreen exchangeRates={exchangeRates} />
          ) : (
            <>
              <Header
                aboveTitleContent={<Clock />}
                fetchData={exchangeRates.data}
              />
              <Form fetchData={exchangeRates.data} />
            </>
          )
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;
