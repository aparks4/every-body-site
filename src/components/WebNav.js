import { Link } from 'react-router-dom';

export const WebNav = () => {
    return (
        <>
            <nav className="web-nav">
                {/* <div className="web-nav-left">
                    <h1><Link to="/">❀</Link></h1>
                </div> */}
                {/* <div className="nav-flower">
                    <Link to="/">❀</Link>
                </div> */}
                {/* <div className="web-nav-right"> */}
                    <Link to="/about">about us</Link>
                    {/* <Link to="/team">our team</Link> */}
                    <Link to="/retreats">retreats</Link>
                    <Link to="/">resources</Link>
                {/* </div> */}
            </nav>
        
        </>
    )
}