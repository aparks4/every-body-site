import '../styles/team.css';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { useState, useEffect, React } from 'react';


export const TeamPage = () => {
    const [team, setTeam] = useState([]);

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const fetchTeamData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/`);
            const allTeamMembers = await response.json();
            setTeam(allTeamMembers);

        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchTeamData();
    }, []);

    const loaded = () => (
        team?.map((teamMember) => (
            <TeamMemberCard
                key={teamMember.id}
                name={teamMember.name}
                photoURL={teamMember.image}
                blurb={teamMember.bio}
            />
        ))
    );

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return (
        <div className="team-page">
            <h2>meet the team</h2>
            <div className="team-members-container">
                {team && team.length ? loaded() : loading()}
            </div>

        </div>
    )
}