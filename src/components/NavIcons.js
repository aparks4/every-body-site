import { Link } from 'react-router-dom';
import { BsClipboardCheck} from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';
import { IoLogoVenmo } from 'react-icons/io5';

export const NavIcons = () => {
    return (
        <>
            <div className="nav-icons-container">
                <div className="icon-wrapper">
                    <Link to ="https://everybodyretreats.com/retreats" target="_blank" rel="noreferrer">
                        <BsClipboardCheck className="register-icon" />
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
                {/* <div className="icon-wrapper">
                    <Link to="https://account.venmo.com/u/everybodyretreats" target="_blank" rel="noreferrer">
                        <IoLogoVenmo />
                    </Link>
                    <p>donate</p>
                </div> */}
            </div>
        
        </>
    )
}