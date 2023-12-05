import { StyledContainer, StyledHeader, StyledImage } from "./styled";
import loadingImage from './loading.png'

const LoadingScreen = ({ children, exchangeRates }) => {
    if (exchangeRates.status === "success") {
        return children
    };

    if (exchangeRates.status === "error") {
        return (
            <StyledContainer>
                <StyledHeader>Nie udało się pobrać kursów walut!</StyledHeader>
            </StyledContainer>
        )
    };

    return (
        <StyledContainer>
            <StyledImage src={loadingImage} alt="Ikona ładowania" />
        </StyledContainer>
    )
};

export default LoadingScreen;