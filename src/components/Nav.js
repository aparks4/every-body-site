import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <>
            <nav>
                <Link to="/">home</Link>
                <Link to="/about">about us</Link>
                <Link to="/team">meet the team</Link>
                <Link to="/register">register</Link>
                {/* <div className="flower-frame">
                    <Link to="/">home</Link>
                </div>
                <div className="flower-frame">
                    <Link to="/about">about us</Link>
                </div>
                <div className="flower-frame">
                    <Link to="/team">meet the team</Link>
                </div>
                <div className="flower-frame">
                    <Link to="/register">register</Link>
                </div> */}
            </nav>
        </>
    )
}