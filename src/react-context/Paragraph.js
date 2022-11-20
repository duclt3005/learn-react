import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '.'

const Paragraph = () => {
    
    const theme = useContext(ThemeContext);

    return (
        <div className={theme}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quo maxime labore quod deserunt obcaecati laudantium nobis at voluptates. Placeat ut ad asperiores delectus cum modi ratione labore, possimus molestias?</div>
    )
}

export default Paragraph