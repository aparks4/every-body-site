import '../styles/team.css';
import { LoremIpsum } from 'react-lorem-ipsum';

export const TeamPage = () => {
    return (
        <div className="team-page">
            <h1>meet the team</h1>
            <LoremIpsum p={1} />
            <p>
                All four of us have our own stories of how we overcame disordered eating and broken body image. Because of that, we have a shared passion and drive to help others accept and love the bodies they are in.
            </p>
            <p>
                We each independently had ideas of creating a space where people could learn how to heal their relationship with food and their bodies. We all crossed paths in different ways, and knew we had to create something together.
            </p>
            <p>
                So, we created Every Body! A place where we hope people can become better educated and more connected, through learning from trained therapists and dietitians.
            </p>
            <p>
                Thank you for the support and love you have shown us thus far. We can’t wait to learn and grow with you!
            </p>

        </div>
    )
}