import '../styles/about.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import { AnimatedText } from '../components/AnimatedText';
import { Link } from 'react-router-dom';
import { RegButton } from '../components/RegButton';
import { WebNav } from '../components/WebNav';
import { TeamPage } from './Team';
import { Nav } from '../components/Nav';
import { FixedLinks } from '../components/FixedLinks';

export const AboutPage = () => {
    return (
        <>  
            <Nav />
            <FixedLinks />
            {/* <div className="bg-blob"></div> */}
            <div className="about-page">

                <div className="our-mission-container">
                    <h3>Our mission is to help everybody understand that <span style={{'font-size': '5vh', 'font-weight': 'bolder'}}>every body</span> is worthy of <br /> <span style={{'font-family': 'Spicy Rice', 'font-size': '7vh'}}>love, respect, & care.</span></h3>
                </div>

                <h2>Our Story</h2>

                <div className="about-page-main">

                    <div className="our-story-container">

                        <p>All four of us have our own stories of how we overcame disordered eating and broken body image. As a result, we have a shared passion and drive to help others accept and love the bodies they are in.</p>

                        <p>Independently, we each had our own ideas for creating a space where people could learn how to heal their relationships with food and their bodies. When our paths crossed we knew we had to create something together.</p>

                        <p>So, we created Every Body - a place where people can connect, learn, and heal together! This summer we are hosting retreats for girls & women. Through education provided by guest therapists and dieticians, we invite you to come and gain skills that will help you improve your relationship with your body and food. Walk away empowered and connected with new mentors and friends. Learn more about our upcoming retreats <Link to="/retreats">here</Link>.</p>

                    </div>  
                    
                    
                    <div className="about-us-pic-container">
                        <div className="about-us-pic">
                  
                        </div>

                    </div> 
                </div>

            </div>

            <TeamPage />
        
        </>
    )
}