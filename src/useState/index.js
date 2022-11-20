import { useState } from "react";

const UseStateDemo = () => {
    const [count, setCount] = useState(1);

    function handleIncrease() {
        setCount(count + 1);
        setCount(count + 1);
        setCount(prevState => prevState + 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </>
    )
}

export default UseStateDemo;