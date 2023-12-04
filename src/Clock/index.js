import { ClockContainer } from './styled.js';
import useCurrentDate from '../useCurrentDate.js';
import { formatDate } from '../utils/formatDate.js';

const Clock = () => {
    const date = useCurrentDate();

    return (
        <ClockContainer>
            Dziś jest {formatDate(date, {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}
        </ClockContainer>
    )
}

export default Clock;