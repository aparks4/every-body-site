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
            <div className="about-page">
                <Nav />

                <div className="our-mission-container">
                    <h3>Our mission is to help everybody understand that <br/><span className="every-body">every body</span><br/> is worthy of <br /> <span className="love-respect-care">love, respect, & care.</span></h3>
                </div>

                <h2>our story</h2>

                <div className="our-story-container">
                    <p>
                        It started with a pancake breakfast on a winter morning when three college students met up to talk about something they all shared in common: a history with broken body image and disordered eating.
                        <br/>
                        <br/>
                    </p>
                        <div className="about-us-pic"></div>
                    <p>
                        <br/>
                        Over the next few years, they realized they were not alone and, as it turns out, almost everybody shares some version of the same story. With diet culture and the beauty industry louder than ever, they knew that girls & women need resources and healing now, more than ever.
                        <br/>
                        <br/>
                        So they created Every Body.
                        <br/>
                        <br/>
                        At Every Body, our purpose is to provide an accessible community resource for eating disorder awareness and prevention. We offer impactful retreat experiences where girls & women can learn, connect, and heal together.
                        <br/>
                        <br/>
                        Every Body is a place where women can walk away empowered—equipped with tools they need to combat harmful narratives and reclaim their relationships with their bodies; where women can walk away supported—connected with new mentors and friends who “get it,” and most of all, we hope that everybody walks away understanding that every body is worthy of love, respect, and care. Especially yours.
                        <br/>
                        <br/>
                        *Disclaimer: Our retreats are not a substitute for professional treatment or therapy; however, they can be a preventative resource and valuable starting point for those seeking help.
                    </p>
                </div>  

                <TeamPage />

            </div>

        
        </>
    )
}