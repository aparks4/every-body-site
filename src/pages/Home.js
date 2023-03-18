import '../styles/home.css';
import { Link } from 'react-router-dom';
import { FixedLinks } from '../components/FixedLinks';
import { Nav } from '../components/Nav';
import { WebNav } from '../components/WebNav';


export const HomePage = () => {
    
    return (
        <>
        <Nav />

        <p className="home-tagline">An impactful retreat experience helping people love the bodies they are in.</p>

        <div className="home-page">

            <div className="drawing"></div>
            <h1>every body</h1>

            <FixedLinks />

            

        </div>
        </>
    )
}