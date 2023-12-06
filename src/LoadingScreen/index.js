import { StyledContainer, StyledHeader, StyledImage } from "./styled";
import loadingImage from './loading.png'

const LoadingScreen = ({ exchangeRates }) => {

    return (
        <StyledContainer>
            {
                exchangeRates.status === "pending"
                    ? <StyledImage src={loadingImage} alt="Ikona ładowania" />
                    : <StyledHeader>Nie udało się pobrać kursów walut!</StyledHeader>
            }
        </StyledContainer>
    )
};

export default LoadingScreen;