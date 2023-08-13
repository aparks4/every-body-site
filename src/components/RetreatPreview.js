import { Link } from 'react-router-dom';

export const RetreatPreview = (props) => {
    return (
        <div className="retreat-preview">
            <div className="img-box" style={{"backgroundImage": `url(${props.image})`}}></div>
            <h2>{props.name}</h2>
            <h3>{props.dates}</h3>
            <p><Link to={props.register} target="_blank" rel="noreferrer">Learn More</Link></p>
            <p><Link to={props.register} target="_blank" rel="noreferrer">Register Now</Link></p>
        </div>
    )
}