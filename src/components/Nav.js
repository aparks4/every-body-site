import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { NavIcons } from './NavIcons';

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
        { to: '/donate', label: 'donate'},
        { to: '/contact', label: 'contact'},
        { to: '/resources', label: 'resources'},
    ];

    return (
        <>
            {nav ? (
                <div className="nav" ref={navRef}>
                    <div className="nav-links-container">
                        {links.map((link) => {
                            const isActive = link.to === location.pathname;
                            return !isActive ? (
                                <Link key={link.to} to={link.to}>{link.label}</Link>
                            ) : null;
                        })}
                    </div>
                    <button className="x-btn" onClick={() => setNav(false)}>☓</button>
                    <NavIcons />
                </div>
            ) : (
                <button className="nav-btn" onClick={displayNav}>☰</button>

            )}
        </>
    )
}