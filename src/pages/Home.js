import '../styles/home.css';
import { LoremIpsum } from 'react-lorem-ipsum';


export const HomePage = () => {
    
    return (
        <>
        <div className="home-page">

            <div className="drawing"></div>
            <div className="blob"></div>
            <h1>every body</h1>
        </div>
        <div className="furthermore">
            <div className="deco-border"></div>
            <div className="lorem-ipsum">
                {/* <LoremIpsum p={1} /> */}
                <p>An impactful retreat experience helping everybody understand that every body is worthy of love, respect, & care.</p>
            </div>
        </div>
        </>
    )
}