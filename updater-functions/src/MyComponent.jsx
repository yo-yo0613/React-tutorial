import React, {useState, useTransition} from "react";
function Counter(){

    const [count, setCount] = useState(0);

    // Takes the PEDNING state to clculate NEXT state
    // React puts your updater function in a queue (waiting in line)
    // During the next render, it will call them in the sme order.

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(c => c = 0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;