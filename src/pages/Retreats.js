import '../styles/retreats.css';
import { RegButton } from '../components/RegButton';
import { Nav } from '../components/Nav';
import { FixedLinks } from '../components/FixedLinks';
import { GoogleMap } from '../components/GoogleMap';

export const RetreatsPage = () => {
    return (
        <div className="retreats-page">
            <Nav />
            <FixedLinks />

            <h1>Summer 2023</h1>
            <p>We can`t wait to learn and grow with you!</p>
                <div className="retreats-main">
                    <div className="date-location-container">
                        <div className="info-section dates-section">
                            <h2>Dates</h2>
                            <p>Saturday, June 17th<br/>
                            or<br/>
                            Saturday, June 24th</p>
                        </div>

                        <div className="info-section location-section">
                            <h2>Location</h2>
                            <GoogleMap />
                            <p>6415 South 3000 East<br/>
                            Suite #200<br/>
                            Holladay, UT 84121</p>
                        </div>
                        
                    </div>
                    <div className="info-section itenerary-section">
                            <h2>Itenerary</h2>
                            <p>9:30am - 4:30pm</p>

                    </div>

                </div>
                <div className="instructors-section">
                    <h2>Instructors</h2>
                </div>

        </div>
    )
}