import '../styles/home.css';
import { Link } from 'react-router-dom';
import { FixedLinks } from '../components/FixedLinks';
import { Nav } from '../components/Nav';
import { WebNav } from '../components/WebNav';


export const HomePage = () => {
    
    return (
        <>
        {/* <Nav /> */}
        <WebNav />
        <p className="home-tagline">An impactful retreat experience helping people love the bodies they are in.</p>

        <div className="home-page">
            {/* <div className="left-nav">
                <Link to="/about">about us</Link>
                <Link to="/team">our team</Link>
            </div>
            <div className="right-nav">
                <Link to="/test">test page</Link>
                <Link to="/retreats">retreats</Link>
            </div> */}

            <div className="drawing"></div>
            <div className="blob"></div>
            <h1>Every Body</h1>

            <FixedLinks />

            

        </div>
        {/* <div className="furthermore">
            <div className="deco-border"></div>
            <div className="lorem-ipsum">
                <p>An impactful retreat experience helping everybody understand that every body is worthy of love, respect, & care.</p>
            </div>
        </div> */}
        </>
    )
}