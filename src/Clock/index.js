import { useEffect, useState } from 'react';
import { ClockContainer } from './styled.js';

const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return date;
};

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