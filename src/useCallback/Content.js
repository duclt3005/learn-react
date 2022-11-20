import { memo } from "react";

const Content = ({onIncrease}) => {
    console.log('render content');
    return (
        <div>
            <h2>Content</h2>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

export default memo(Content);
