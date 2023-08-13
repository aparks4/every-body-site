import "../styles/events.css";
import { RetreatPreview } from '../components/RetreatPreview';
import { Nav } from '../components/Nav';
import { useState, useEffect, React } from 'react';

export const EventsPage = () => {
    const [retreats, setRetreats] = useState([]);

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const fetchRetreats = async () => {
        try {
            const response = await fetch(`${BASE_URL}/retreats`);
            const allRetreats = await response.json();
            setRetreats(allRetreats);

        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchRetreats();
    }, []);

    const loaded = () => (
        retreats?.map((retreat) => (
            <RetreatPreview 
                key={retreat.id}
                name={retreat.name}
                dates={retreat.dates}
                image={retreat.image}
                register={retreat.registrationURL}
            />
        ))
    );

    const loading = () => {
        return <h3 className="loading">Loading...</h3>
    }

    return (
        <div className="events-page">
            <Nav />
            <h1>Upcoming Retreats</h1>
            <div className="event-previews-wrapper">
                {retreats && retreats.length ? loaded() : loading()}
            </div>
        </div>
    )
}