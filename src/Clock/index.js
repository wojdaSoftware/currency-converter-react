import './style.css'
import { useEffect, useState } from 'react'

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const formatDate = (date) => {
        return date.toLocaleString(undefined, {
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
        <div className="clockContainer">
            Dziś jest {formatDate(date)}
        </div>
    )
}

export default Clock;