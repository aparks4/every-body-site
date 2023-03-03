import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RegButton } from './RegButton';

export const Nav = () => {
    const [nav, setNav] = useState(false);

    const location = useLocation();

    const displayNav = async (e) => {
        e.preventDefault();
        setNav(true);
    };

    const exitNav = async (e) => {
        e.preventDefault();
        setNav(false);
    };

    useEffect(() => {
        setNav(false);
        console.log(location.pathname);
    }, [location]);

    return (
        <>
            {nav ?
            <div className="nav">
                <Link to="/">home</Link>
                <Link to="/about">about us</Link>
                <Link to="/team">our team</Link>
                <Link to="/retreats">retreats</Link>
                <Link to="/test">test page</Link>
                <button onClick={exitNav} className="x-btn">☓</button>
            </div> :
            <button className="nav-btn" onClick={displayNav}>☰</button>
            }
        </>
    )
}