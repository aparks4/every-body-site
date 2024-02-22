import { Link } from 'react-router-dom';

export const ResourceLink = (props) => {
    return (
        <div className="resource-link">
            <p><Link to={props.url} target="_blank" rel="noreferrer">{props.name}</Link></p>
            <p className="description">{props.description}</p>
        </div>
    )
}