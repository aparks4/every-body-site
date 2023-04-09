import '../styles/team.css';
import { TeamMemberCard } from '../components/TeamMemberCard';

export const TeamPage = (props) => {
    return (
        <div className="team-page">
            {/* <div className="bg-top"></div>
            <div className="bg-bottom"></div> */}
            <h2>meet the team</h2>
            <div className="team-members-container">
                <TeamMemberCard 
                    name={'ellie bearnson'} 
                    photoURL={'https://i.imgur.com/ZgEzVZS.jpg'}
                    blurb={'Ellie is from Salt Lake City, Utah and is currently in nursing school hoping to eventually work in women\'s health. Ellie struggled with disordered eating and poor body image from a very young age. Since healing, she has found so much meaning, joy, and peace in life and wants others to experience the same!' }
                />
                <TeamMemberCard 
                    name={'christine parks'} 
                    photoURL={'https://i.imgur.com/qFz4mcG.jpg'} 
                    blurb={'Christine is a southern-Oregon native who\'s passionate about dismantling diet culture. She is recovered from binge eating disorder and is so grateful for the empowerment she\'s found in recovery. She graduated from BYU and works at PwC. She loves applying her business and personal background to help Every Body grow.'}
                />
                <TeamMemberCard 
                    name={'allison mccune'} 
                    photoURL={'https://i.imgur.com/SCdg6j5.jpg'}
                    blurb={'Allison is a native of upstate New York and transplanted to Salt Lake City three years ago. Allison has been working in direct patient care for eating disorders since February 2020 and hopes to pursue a Master\'s degree in Counselling. When she was young, Allison dealt with disordered eating and body dissatisfaction and she\'s passionate about helping others who struggle with similar issues.'}
                />
                <TeamMemberCard 
                    name={'emily damm'} 
                    photoURL={'https://i.imgur.com/F91fjwZ.jpg'}
                    blurb={'Emily is an Oregonian, BYU grad, and is currently a doula for women. She started battling an eating disorder in her second year of college and eventually decided to take a pause on her life to seek out life changing treatment. This set her on a long journey of all-in healing. Helping to create Every Body has been an incredible symbol to her that recovery leads to a full life.'}
                />
                <TeamMemberCard 
                    name={'olivia ellis'} 
                    photoURL={'https://i.imgur.com/ppkWhU1.jpg'}
                    blurb={'Olivia is currently studying psychology at UVU with an emphasis in women\'s mental health. Olivia was diagnosed with clinical depression and anxiety at age eight and has struggled with body dissatisfaction most of her life. Since starting her recovery, Olivia has never been happier and she is so excited to help other women experience the freedom that comes from loving your body!'} 
                />
            </div>

        </div>
    )
}