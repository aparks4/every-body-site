import { Link } from 'react-router-dom';

export const WebNav = () => {
    return (
        <>
            <nav className="web-nav">
                <div className="web-nav-left">
                    <Link to="/about">about us</Link>
                    <Link to="/team">our team</Link>
                </div>

                <div className="web-nav-right">
                    <Link to="/retreats">retreats</Link>
                    <Link to="/test">resources</Link>
                </div>
            </nav>
        
        </>
    )
}