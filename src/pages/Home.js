import { loremIpsum } from "react-lorem-ipsum";
import '../styles/home.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className="page alt-page">
            <div className="alt-nav">
                <Link to="/about">about us</Link>
                <Link to="/team">our team</Link>
                <Link to="/register">retreats</Link>
            </div>

            <div className="drawing">

            </div>

            <h1>every body</h1>


            {/* <img className="drawing" src="https://i.imgur.com/VathYeL.png" alt="Line-drawing of a woman hugging herself"/> */}
        </div>
    )
}