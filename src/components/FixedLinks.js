import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { IoLogoVenmo } from 'react-icons/io5';



export const FixedLinks = () => {
    return (
        <>
            <div className="fixed-links-container">
                <div className="icon-wrapper">
                    <Link to="https://everybodyretreats.regfox.com/every-body-retreats" target="_blank" rel="noreferrer">
                        {/* <BsClipboardCheck className="register-icon" /> */}
                        <button className="reg-btn">register</button>
                    </Link>
                </div>
                <div className="icon-wrapper insta-icon-wrapper">
                    <Link to="https://www.instagram.com/every.body.retreats/" target="_blank" rel="noreferrer">
                        <BsInstagram />
                    </Link>
                </div>
                {/* <div className="icon-wrapper">
                    <Link to="mailto:everybodyretreats@gmail.com" target='_blank' rel='noreferrer'>
                        <FaRegEnvelope />
                    </Link>
                </div> */}
                <div className="icon-wrapper">
                    {/* <a href="https://account.venmo.com/u/everybodyretreats" target="_blank" rel="noreferrer"><button className="reg-btn">donate</button></a> */}
                    <a href="https://account.venmo.com/u/everybodyretreats" target="_blank" rel="noreferrer">
                        <IoLogoVenmo />
                    </a>
                </div>

            </div>
        </>
    )
}