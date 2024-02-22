import "../styles/events.css";
import { ResourceLink } from '../components/RetreatPreview';
import { Nav } from '../components/Nav';
import { useState, useEffect, React } from 'react';

export const ResourcesPage = () => {
    const [resources, setResources] = useState([]);

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const fetchResources = async () => {
        try {
            const response = await fetch(`${BASE_URL}/retreats`);
            const allResources = await response.json();
            setResources(allResources);

        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchResources();
    }, []);

    const loaded = () => (
        resources?.map((resource) => (
            <ResourceLink 
                name={resource.name}
                url={resource.url}
            />
        ))
    );

    const loading = () => {
        return <h3 className="loading">Loading...</h3>
    }

    return (
        <div className="resources-page">
            <Nav />
            <h1>Resources</h1>
            <div>
                {resources && resources.length ? loaded() : loading()}
            </div>
        </div>
    )
}