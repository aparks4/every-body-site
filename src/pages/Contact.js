import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import '../styles/contact.css';
import { Nav } from '../components/Nav';

export const ContactPage = () => {
    return (
        <>
            <Nav />
            
            <div className="contact-page">
                <h2>We'd love to hear from you!</h2>
                <div className="contact-main">
                    <div className="contact-link-container">
                        <Link to="mailto:everybodyretreats@gmail.com" target='_blank' rel='noreferrer'>
                            <FaRegEnvelope />
                        </Link>
                        <p>everybodyretreats@gmail.com</p>
                    </div>
                    <div className="contact-link-container">
                        <Link to="https://www.instagram.com/every.body.retreats/" target="_blank" rel="noreferrer">
                            <BsInstagram />
                        </Link>
                        <p>@every.body.retreats</p>
                    </div>
                </div>

            </div>
        
        </>
    )
}