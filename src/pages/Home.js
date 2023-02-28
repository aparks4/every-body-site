import '../styles/home.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


export const HomePage = () => {
    const [nav, setNav] = useState(false);

    // const handleClick = async (e) => {
    //     e.preventDefault;
    //     setNav(true);
    // }

    const displayNav = async (e) => {
        e.preventDefault();
        setNav(true);
    };

    const exitNav = async (e) => {
        e.preventDefault();
        setNav(false);
    } 

    
    return (
        <>
        <div className="page alt-page">
            {nav ?
            <div className="alt-nav">
                <Link to="/about">about us</Link>
                <Link to="/team">our team</Link>
                <Link to="/register">retreats</Link>
                <button onClick={exitNav} className="x-btn">☓</button>
            </div> :
            <button className="nav-btn" onClick={displayNav}>♡</button>
            }

            <div className="drawing">

            </div>
            <div className="blob"></div>
            <h1>every body</h1>


            {/* <img className="drawing" src="https://i.imgur.com/VathYeL.png" alt="Line-drawing of a woman hugging herself"/> */}
        </div>
        <div className="furthermore">
            <h2>more content</h2>
            <div className="deco-border">

            </div>
        </div>
        </>
    )
}