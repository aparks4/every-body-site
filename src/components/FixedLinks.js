import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { BsClipboardPlus } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';



export const FixedLinks = () => {
    return (
        <>
            <div className="fixed-links-container">
                <div className="icon-wrapper">
                    <Link to ="https://docs.google.com/forms/d/e/1FAIpQLSecKfha0f4tSz1AdUo3aenF7I-97wPvA3cGGZQmM-POyKocZQ/viewform" target="_blank" rel="noreferrer">
                        <BsClipboardPlus className="register-icon" />
                    </Link>
                    <p>register</p>
                </div>
                <div className="icon-wrapper insta-icon-wrapper">
                    <Link to="https://www.instagram.com/every.body.retreats/" target="_blank" rel="noreferrer">
                        <BsInstagram />
                    </Link>
                    <p>@every.body.<br/>retreats</p>

                </div>
                <div className="icon-wrapper">
                    <Link to="mailto:everybodyretreats@gmail.com" target='_blank' rel='noreferrer'>
                        <FaRegEnvelope />
                    </Link>
                    <p>everybodyretreats<br/>@gmail.com</p>
                </div>

            </div>
        </>
    )
}