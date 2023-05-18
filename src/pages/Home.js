import '../styles/home.css';
import { FixedLinks } from '../components/FixedLinks';
import { Nav } from '../components/Nav';


export const HomePage = () => {
    
    return (
        <>
            <div className="home-page">
                <Nav />
                <p className="home-tagline">helping everybody understand that <br/> <span className="every-body">every body</span><br/> is worthy of <br/>love, respect,<br/> & care.</p>

                <div className="drawing"></div>
                <h1>every body</h1>

                <FixedLinks />

            </div>
        </>
    )
}