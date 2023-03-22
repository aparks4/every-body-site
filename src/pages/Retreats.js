import '../styles/retreats.css';
import { RegButton } from '../components/RegButton';
import { Nav } from '../components/Nav';
import { FixedLinks } from '../components/FixedLinks';
import { GoogleMap } from '../components/GoogleMap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const RetreatsPage = () => {
    const [display, setDisplay] = useState(null);

    const locationInfo = () => {
        return (
            <div className="info-section location-section">
                <h2>location</h2>
                <GoogleMap />
                <Link to="https://www.google.com/maps/place/6415+S+3000+E+suite+%23200,+Holladay,+UT+84121/@40.6345275,-111.8053122,17z/data=!3m1!4b1!4m6!3m5!1s0x8752630752eaaaab:0x88b73b21ca6016bc!8m2!3d40.6345275!4d-111.8031235!16s%2Fg%2F11rgfw3f8b" target="_blank" rel="noreferrer">
                    <p>
                        6415 South 3000 East
                        <br/>
                        Suite #200
                        <br/>
                        Holladay, UT 84121
                    </p>
                </Link>
            </div>
        )
    }
    const itineraryInfo = () => {
        return (
            <div className="info-section itenerary-section">
                <h2>itinerary</h2>
                <p>
                    9:30 ~ check in and light breakfast
                    <br/>
                    <br/>
                    10:00 ~ keynote address
                    <br/>
                    <br/>
                    10:40 ~ breakout sessions
                    <br/>
                    <br/>
                    12:15 ~ lunch
                    <br/>
                    <br/>
                    1:00 ~ breakout sessions
                    <br/>
                    <br/>
                    2:40 ~ closing remarks
                    <br/>
                    <br/>
                    3:00 ~ retreat ends
                </p>
            </div>
        )
    }

    const speakersA = () => {
        return(
            <div className="info-section speakers-section speakers-A">
                <div>
                    <button className="speakers-btn" onClick={() => {setDisplay(speakersA)}} style={{'font-family': 'Tan Nimbus'}}>june 17th</button>
                    <button className="speakers-btn" onClick={() => {setDisplay(speakersB)}}>june 24th</button>
                </div>
                <p>
                    <span>keynote address</span>
                    <br/>
                    <br/>
                    Heather Van Boerum
                </p>
                <p>
                    <span>breakout session speakers</span>
                    <br/>
                    <br/>
                    Lyndy Barnard<br/>
                    Devrie Pettit<br/>
                    Julie Newbry<br/> 
                </p>
            </div>
        )
    }

    const speakersB = () => {
        return(
            <div className="info-section speakers-section speakers-B">
                <div>
                    <button className="speakers-btn" onClick={() => {setDisplay(speakersA)}}>june 17th</button>
                    <button className="speakers-btn" onClick={() => {setDisplay(speakersB)}} style={{'font-family': 'Tan Nimbus'}}>june 24th</button>
                </div>
                <p>
                    <span>keynote address</span>
                    <br/>
                    <br/>
                    Corinne Hannan
                </p>
                <p>
                    <span>breakout session speakers</span>
                    <br/>
                    <br/>
                    Kelsie Jepsen<br/>
                    Lauren Bishop<br/>
                    Ariel Hortin
                </p>
            </div>
        )
    }

    useEffect(() => {
        setDisplay(locationInfo);
    }, []);


    if (!display) return <p>Loading...</p>
    return (
        <div className="retreats-page">
            <Nav />
            <h1>summer 2023</h1>
            <h2>june 17th | june 24th</h2>
            <Link className="register-btn">register now</Link>
            <div className="retreats-main">
                <div className="info-buttons-container">
                    <div>
                        <button className="info-btn" onClick={() => {setDisplay(locationInfo)}}>location</button>
                        <button className="info-btn" onClick={() => {setDisplay(itineraryInfo)}}>itinerary</button>
                        <button className="info-btn" onClick={() => {setDisplay(speakersA)}}>speakers</button>
                    </div>
                </div>
                <div className="info-display">
                    {display}
                </div>
            </div>
        </div>
    )
}