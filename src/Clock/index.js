import { ClockContainer } from './styled.js';
import useCurrentDate from '../useCurrentDate.js';

const formatDate = (date) => {
    return date.toLocaleString("pl-PL", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
};

const Clock = () => {
    const date = useCurrentDate();

    return (
        <ClockContainer>
            Dziś jest {formatDate(date)}
        </ClockContainer>
    )
}

export default Clock;