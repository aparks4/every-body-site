import '../styles/about.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import { AnimatedText } from '../components/AnimatedText';

export const AboutPage = () => {
    return (
        <div className="about-page">
            {/* <h1>about us</h1> */}
            <p>
                Our mission is to help everybody understand that <span style={{ 'font-weight': 'bold', 'color': 'var(--brick)'}}>every body</span> is worthy of love, respect, and care.
            </p>
            <p>
                This summer, we are hosting retreats where girls & women to learn, connect, and heal together.
            </p>
            <p>
                Through education provided by guest therapists and dieticians, come gain skills that will help you improve your relationship with your body and food.
            </p>
            <p>
                Walk away empowered and connected with new mentors and friends.
            </p>
            <div>
                <p>Every body is deserving of <span><AnimatedText /></span></p>

            </div>
        </div>
    )
}