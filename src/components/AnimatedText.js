import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';


export const AnimatedText = () => {
    const [index, setIndex] = useState(0);

    const displayWords = [
        'love', 
        'respect', 
        'care'
    ];

    const displayWord = displayWords[index];

    useEffect(() => {
        const timer = setInterval(() => {
            if (index === displayWords.length - 1) {
                setIndex(0);
            } else {
                setIndex(index => index + 1)
            }
        }, 2000);

        return () => clearTimeout(timer);


    }, [index===2]);

    return (
        <>
            <p className='animated-text'>{displayWord}</p>
        </>
    )
}