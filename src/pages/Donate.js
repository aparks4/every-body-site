import "../styles/donate.css";
import { DonateButton } from "../components/DonateButton";
import { Nav } from "../components/Nav";


export const DonatePage = () => {
    return (
        <>
            <Nav />

            <div className="donate-page">
                <h3>Join us in supporting women and girls in their body image journeys</h3>
                <img className="team-pic" src="https://i.imgur.com/makSsZg.jpg" alt="A group picture of the Every Body Retreats team" />
                <DonateButton />
                <p>{"Every Body is a 501(c)(3) nonprofit recognized by the IRS, and all donations to Every Body are tax-deductible in accordance with IRS regulations. EIN #92-2565729."}</p>
            </div>
        
        
        </>
    )
}