import '../styles/test.css';
import { FixedLinks } from '../components/FixedLinks';
import { Nav } from '../components/Nav';
import { useEffect, useState } from 'react';


export const TestPage = () => {
    const [date, setDate] = useState(1);


    return (
        <>
            <div className="test-page">
                <Nav />
                <FixedLinks />
                <div className="button-test-container-wrapper">
                    <a href="https://everybodyretreats.regfox.com/every-body-retreats">Register Now</a>
                </div>

            </div>
        </>
    )
}