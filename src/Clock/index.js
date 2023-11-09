import './style.css'
import { useEffect, useState } from 'react'

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const formatDate = (date) => {
        return date.toLocaleString(undefined, {});
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