import { useState } from "react";

const data = [
    {
        'id': 1,
        'name': 'html'
    },
    {
        'id': 2,
        'name': 'css'
    },
    {
        'id': 3,
        'name': 'js'
    },
];

const TwoWayBinding = () => {
    const [state, setState] = useState([]);
    console.log(state);

    const handleChange = (id) => {
        setState(prev => {
            if(prev.includes(id)) {
                return prev.filter(e => e !== id);
            } else {
                return [...prev, id];
            }

        });
    }


    return (
        <>
        {data.map(e => (
            <div key={e.id}>
                <input type="checkbox" value={e.name} name="course" onChange={() => handleChange(e.id)} />{e.name}
            </div>
        ))}
        </>
    )
}

export default TwoWayBinding;