import '../styles/home.css';
import { Link } from 'react-router-dom';
import { FixedLinks } from '../components/FixedLinks';
import { Nav } from '../components/Nav';
import { WebNav } from '../components/WebNav';


export const HomePage = () => {
    
    return (
        <>
        <Nav />

        <p className="home-tagline">Helping everybody understand that <br/> <span className="every-body">every body</span><br/> is worthy of <br/> <span className="love-respect-care">love, respect,<br/> & care</span>.</p>

        <div className="home-page">

            <div className="drawing"></div>
            <h1>every body</h1>

            <FixedLinks />

            

        </div>
        </>
    )
}