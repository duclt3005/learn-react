import { useEffect } from "react";
import { useState } from "react";

const tabs = ['posts', 'photos', 'albums'];

const UseEffectDemo = () => {
    const [type, setType] = useState("posts");
    const [data, setData] = useState([]);
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, [type]);

    useEffect(() => {
        const handleGotoTop = () => {
            console.log(window.scrollY);
            setShowGoToTop(window.scrollY > 200);
        }

        window.addEventListener('scroll', handleGotoTop);

        return () => {
            window.removeEventListener('scroll', handleGotoTop);
        }
    }, [])

    return (
        <>
            <div className="button-list">
                {tabs.map((e, i) => (
                    <button key={i}
                        style= {e === type ? {
                            "background" : "red"
                        } : {}}
                        onClick = {() => setType(e)}
                    >
                        {e}
                    </button>
                ))}
            </div>
            <ul>
                {data.map(e => (
                    <li key={e.id}>{e.title}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        "position" : "fixed",
                        "bottom" : "50px",
                        "right": "50px"
                    }}
                >
                    Go to top
                </button>)}
        </>
    );
}

export default UseEffectDemo;
