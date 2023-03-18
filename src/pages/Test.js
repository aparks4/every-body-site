import '../styles/test.css';
import { Link } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';
import { RegButton } from '../components/RegButton';
import { WebNav } from '../components/WebNav';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { FixedLinks } from '../components/FixedLinks';
import { Nav } from '../components/Nav';
import { useEffect, useRef, useState } from 'react';


export const TestPage = () => {
    const ref = useRef();


    return (
        <>
            <div className="test-page">
                <Nav />
                <FixedLinks />
                <div className="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7893415485128!2d-111.8053121846433!3d40.634527479340456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752630752eaaaab%3A0x88b73b21ca6016bc!2s6415%20S%203000%20E%20suite%20%23200%2C%20Holladay%2C%20UT%2084121!5e0!3m2!1sen!2sus!4v1679107513697!5m2!1sen!2sus" width="100" height="100" style={{"border": "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>

            </div>
        </>
    )
}