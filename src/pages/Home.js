import '../styles/home.css';
import { Link } from 'react-router-dom';
import { FixedLinks } from '../components/FixedLinks';
import { Nav } from '../components/Nav';
import { TbArrowWaveRightDown, TbArrowDownRight, TbArrowDown, TbArrowForward, TbArrowWaveRightUp } from 'react-icons/tb';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';


export const HomePage = () => {
    
    return (
        <>
        <Nav />

        <p className="home-tagline">helping everybody understand that <br/> <span className="every-body">every body</span><br/> is worthy of <br/>love, respect,<br/> & care.</p>

        <div className="home-page">
            {/* <p className="home-alert">Register now for our summer retreats <br /><TbArrowWaveRightUp className="arrow-icon"/></p> */}

            <div className="drawing"></div>
            <h1>every body</h1>

            <FixedLinks />

            

        </div>
        </>
    )
}