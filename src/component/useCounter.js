import { useState } from "react";


export function useCounter(initialValue = 0) {
    const [ count, setCount ] = useState(initialValue)

    const increament = () => {
        setCount(count + 1);
    }
    const decreament = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(initialValue);
    }

    const setvalue = (value) => {
        setCount(value)
    };

    return {
        count,
        increament,
        decreament,
        reset,
        setvalue
    }
}