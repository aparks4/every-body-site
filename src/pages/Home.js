import '../styles/home.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Link } from 'react-router-dom';


export const HomePage = () => {
    
    return (
        <>
        <div className="home-page">
            <div className="left-nav">
                <Link to="/about">about us</Link>
                <Link to="/team">our team</Link>
            </div>
            <div className="right-nav">
                <Link to="/test">test page</Link>
                <Link to="/retreats">retreats</Link>
            </div>

            <div className="drawing"></div>
            <div className="blob"></div>
            <h1>Every Body</h1>
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