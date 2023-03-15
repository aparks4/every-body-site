import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { CgEditUnmask } from 'react-icons/cg';
import { FixedLinks } from './FixedLinks';

export const Nav = () => {
    const [nav, setNav] = useState(false);

    const location = useLocation();
    const navRef= useRef(null);

    const handleOutsideClick = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setNav(false);
        }
    };


    const displayNav = async (e) => {
        e.preventDefault();
        setNav(true);
    };

    useEffect(() => {
        
        window.addEventListener("mousedown", handleOutsideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutsideClick);
        };

    }, []);

    const links = [
        { to: '/', label: 'home' },
        { to: '/about', label: 'about us' },
        { to: '/retreats', label: 'retreats' },
    ];

    return (
        <>
            {nav ? (
                <div className="nav" ref={navRef}>
                    {links.map((link) => {
                        const isActive = link.to === location.pathname;
                        return !isActive ? (
                            <Link key={link.to} to={link.to}>{link.label}</Link>
                        ) : null;
                    })}
                    <button className="x-btn" onClick={() => setNav(false)}>☓</button>
                    <FixedLinks />
                </div>
            ) : (
                <button className="nav-btn" onClick={displayNav}>☰</button>
                // <button className="nav-btn" onClick={displayNav}>
                //     ✢
                // </button>

            )}
        </>
    )
}