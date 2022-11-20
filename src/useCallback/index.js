import { useState, useCallback } from "react";
import Content from "./Content";

const UseCallBackDemo = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prev => prev+1);
    }, []);

    return (
        <div>
            <h1>useCallback</h1>
            <Content onIncrease={handleIncrease} />
            <p>{count}</p>
        </div>
    );
}

export default UseCallBackDemo;
