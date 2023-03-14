import { useState, useEffect } from 'react';

export const TeamMemberCard = (props) => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    return (
        <>  
            <div className="team-member-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

                { hover ?
                    <div className="team-member-blurb">
                        <p>{props.blurb}</p>
                    </div>
                : 
                    <div className="team-member-photo-container">
                        <div className="team-member-photo" style={{"background-image": `url(${props.photoURL})`}}>

                        </div>
                        <p>{props.name}</p>
                    </div>
                } 

            </div>
        
        </>
    )
}