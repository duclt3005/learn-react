import { useReducer } from "react";
import { useState } from "react";

// useState
// 1. Init state: 0
// 2. Actions: Up ( state + 1 ) || Down ( state - 1 )

// useReducer
// 1. Init state: 0
// 2. Actions: Up ( state + 1 ) || Down ( state - 1 )
// 3. Reducer
// 4. Dispatch

// 1. init state
const initState = 0;

// 2. Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// 3. Reducer
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error("Invalid action");
    }
}

const UseReducerDemo = () => {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h1>useReducer</h1>
            <p>{count}</p>
            <button onClick={e => dispatch(UP_ACTION)}>+</button>
            <button onClick={e => dispatch(DOWN_ACTION)}>-</button>
        </div>
    );
}

export default UseReducerDemo;
