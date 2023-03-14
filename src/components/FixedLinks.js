import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';

export const FixedLinks = () => {
    return (
        <>
            <div className="fixed-links-container">

                <Link to ="https://docs.google.com/forms/d/e/1FAIpQLSecKfha0f4tSz1AdUo3aenF7I-97wPvA3cGGZQmM-POyKocZQ/viewform" target="_blank" rel="noreferrer"><span style={{'font-weight': 'bold'}} >🖊</span></Link>

                <Link to="https://www.instagram.com/every.body.retreats/" target="_blank" rel="noreferrer">
                    <BsInstagram className="insta-icon"/>
                </Link>

                <Link to="mailto:everybodyretreats@gmail.com" target='_blank' rel='noreferrer'>✉</Link>

            </div>
        </>
    )
}