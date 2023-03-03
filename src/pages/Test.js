import '../styles/test.css';
import { AnimatedText } from "../components/AnimatedText";


export const TestPage = () => {
    return (
        <>
            <div className="test-main">
                <div className="main-animation-container">
                    <h1>Every body is deserving of <span style={{'color': 'var(--darkPurple)', 'font-family': 'Spicy Rice', 'font-size': '10vh'}}><AnimatedText /></span></h1>
                </div>
            </div>
        </>
    )
}