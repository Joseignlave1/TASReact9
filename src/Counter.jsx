import { useEffect, useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [counterMessage, setCounterMessage] = useState("");
    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    const decreaseCounter = () => {
        (counter <= 0 ? restartCounter() : setCounter(counter - 1))
    }
    const restartCounter = () => {
        setCounter(0);
    }

    useEffect (() => {
        setCounterMessage("Counter: " + counter)
    }, [counter])

    return (
        <div>
            <p>{counterMessage}</p>
            <button onClick={() => increaseCounter()}>Aumentar</button>
            <button onClick={() => restartCounter()}>Reiniciar</button>
            <button onClick={() => decreaseCounter()}>Decrementar</button>
        </div>
    )
}

export default Counter;