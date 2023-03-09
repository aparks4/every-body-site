import '../styles/about.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import { AnimatedText } from '../components/AnimatedText';
import { Link } from 'react-router-dom';
import { RegButton } from '../components/RegButton';

export const AboutPage = () => {
    return (
        <div className="about-page">
                <div className="about-header">
                    <div className="every-body">
                        <h2>Every Body</h2>
                    </div>
                    <div className="middle-nav">
                        <Link to="/">home</Link>
                        <Link to="/about">about us</Link>
                        <Link to="/team">our team</Link>
                        <Link to="/retreats">retreats</Link>
                    </div>
                    <div className="right-corner">
                        <h1>ꐕ</h1>
                    </div>
                    {/* <RegButton /> */}
                </div>
                <div className="about-page-main">
                    <div className="our-mission-container">
                        <h3>Our mission is to help everybody understand that <span style={{'color': 'var(--yellowBrown)'}}>every body</span> is worthy of <br /> <span style={{'color': 'var(--brick)', 'font-family': 'Spicy Rice', 'font-size': '7vh'}}>love, respect, & care.</span></h3>

                        <p>All four of us have our own stories of how we overcame disordered eating and broken body image. As a result, we have a shared passion and drive to help others accept and love the bodies they are in.</p>

                        <p>Independently, we each had our own ideas of creating a space where people could learn how to heal their relationship with food and their bodies. Our paths crossed and we knew we had to create something together.</p>

                        <p>So, we created Every Body - a place where people can connect, learn, and heal together. This summer we are hosting retreats for girls & women. Through education provided by guest therapists and dieticians, we invite you to come and gain skills that will help you improve your relationship with your body and food. Walk away empowered and connected with new mentors and friends. See more details <Link to="/retreats">here</Link>.</p>
                    
                    </div>
                </div>

        </div>
    )
}