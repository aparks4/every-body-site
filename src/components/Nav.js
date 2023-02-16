import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <>
            <nav>
                <Link to="/">home</Link>
                <Link to="/about">our story</Link>
                <Link to="/team">meet the team</Link>
                <Link to="/register">register</Link> 
            </nav>
        </>
    )
}