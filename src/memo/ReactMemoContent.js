import { memo } from 'react';

const ReactMemoContent = () => {
    console.log('render content');
    return (
        <div>
            Content
        </div>
    );
}

export default memo(ReactMemoContent);
