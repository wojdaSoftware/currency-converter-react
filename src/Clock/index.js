import { useEffect, useState } from 'react';
import { ClockContainer } from './styled.js';

const Clock = () => {
    const [date, setDate] = useState(new Date());

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

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <ClockContainer>
            Dziś jest {formatDate(date)}
        </ClockContainer>
    )
}

export default Clock;