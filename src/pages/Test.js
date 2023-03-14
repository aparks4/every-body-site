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

            </div>
        </>
    )
}