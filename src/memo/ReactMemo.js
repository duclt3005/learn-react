import { useState } from 'react';
import ReactMemoContent from './ReactMemoContent';

const ReactMemo = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count+1);
    }

    return (
        <div>
            <h1>React memo</h1>
            <ReactMemoContent />
            <p>{count}</p>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}

export default ReactMemo;
