import '../styles/retreats.css';
import { RegButton } from '../components/RegButton';

export const RetreatsPage = () => {
    return (
        <div className="retreats-page">
            <h1 style={{'text-decoration': 'underline', 'font-size': '8vh'}}>upcoming retreats</h1>
            <h1>summer 2023</h1>

            <div className="retreats-main">

                <div className="seventeenth">
                    <p>saturday<br />june 17th<br />9:30 AM</p>
                    <RegButton />
                </div>

                <div className="twentyfourth">
                    <p>saturday<br />june 24th<br />9:30 AM</p>
                    <RegButton />
                </div>

            </div>
            
            <p>We can`t wait to learn and grow with you!</p>

        </div>
    )
}