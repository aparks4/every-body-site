import '../styles/retreats.css';
import { RegButton } from '../components/RegButton';
import { Nav } from '../components/Nav';
import { FixedLinks } from '../components/FixedLinks';
import { GoogleMap } from '../components/GoogleMap';
import { Link } from 'react-router-dom';

export const RetreatsPage = () => {
    return (
        <div className="retreats-page">
            <Nav />
            <FixedLinks />

            <h1>Summer 2023</h1>
            <div className="register-btn">

            </div>
            {/* <p>We can`t wait to learn and grow with you!</p> */}
                <div className="retreats-main">
                    <div className="date-location-container">
                        <div className="info-section dates-section">
                            <h2>Dates</h2>
                            <p>
                                Saturday, June 17th
                                <br/>
                                <br/>
                                or
                                <br/>
                                <br/>
                                Saturday, June 24th
                            </p>
                        </div>

                        <div className="info-section location-section">
                            <h2>Location</h2>
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
                        
                    </div>
                    <div className="info-section itenerary-section">
                            <h2>Itinerary</h2>
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

                </div>
                <div className="instructors-section">
                    <h2>Instructors</h2>
                </div>

        </div>
    )
}