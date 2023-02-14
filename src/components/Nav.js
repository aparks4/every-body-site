import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Our Story</Link>
                <Link to="/team">Meet the Team</Link>
                <Link to="/register">Register</Link> 
            </nav>
        </>
    )
}