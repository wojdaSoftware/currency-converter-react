import { StyledContainer, StyledImage } from "./styled";
import loadingImage from './loading.png'

const LoadingScreen = ({ children, exchangeRates }) => {
    if (exchangeRates.status === "success") {
        return children
    };

    return (
        <StyledContainer><StyledImage src={loadingImage} alt="Ikona ładowania" /></StyledContainer>
    )
};

export default LoadingScreen;