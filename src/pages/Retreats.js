import '../styles/retreats.css';
import { RegButton } from '../components/RegButton';
import { Nav } from '../components/Nav';
import { FixedLinks } from '../components/FixedLinks';

export const RetreatsPage = () => {
    return (
        <div className="retreats-page">
            <Nav />
            <FixedLinks />

            <h1 style={{'margin-top': '10vh'}}>Summer 2023</h1>
            <p>We can`t wait to learn and grow with you!</p>
                <div className="retreats-info-container">
                    <div className="retreats-info-main">
                        <div className="date-location-container">
                            <div className="dates-section">
                                <h2>Dates</h2>
                                <p>Saturday, June 17th</p>
                                <p>or</p>
                                <p>Saturday, June 24th</p>
                            </div>

                            <div className="location-section">
                                <h2>Location</h2>
                                <p>6415 South 3000 East</p>
                                <p>Suite #200</p>
                                <p>Holladay, UT 84121</p>
                            </div>
                        </div>

                        <div className="itenerary-section">
                            <h2>Itenerary</h2>
                            <p>9:30am - 4:30pm</p>

                        </div>
                    </div>

                    <div className="instructors-section">
                        <h2>Instructors</h2>
                    </div>
                </div>

        </div>
    )
}