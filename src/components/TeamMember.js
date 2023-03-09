export const TeamMember = (props) => {
    return (
        <>
            <div className= "team-member-container">
                <div className="team-member-photo-container">
                    <img className="team-member-photo" src={props.photoURL} alt={`photo of ${props.name}`} />
                    <p>{props.name}</p>
                </div>
                <div className="team-member-bio">
                    <p>{props.bioText}</p>
                </div>
            </div>
        
        </>
    )
}