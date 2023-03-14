import '../styles/team.css';
import { TeamMemberCard } from '../components/TeamMemberCard';

export const TeamPage = (props) => {
    return (
        <div className="team-page">
            {/* <div className="bg-top"></div>
            <div className="bg-bottom"></div> */}
            <h2>Our Team</h2>
            <div className="team-members-container">
                <TeamMemberCard 
                    name={'Ellie Bearnson'} 
                    photoURL={'https://i.imgur.com/j5xx9AGl.jpg'}
                    blurb={'Ellie is from Salt Lake City, Utah. She is in her last year of nursing school, teaching preschool part time, and preparing to lead a humanitarian trip to Thailand this summer. During her free time, Ellie loves to hike, ski, camp, and really do anything outside. Ellie struggled with disordered eating and poor body image at a very young age, for quite a long time. She says, \"Since healing from these things, I have found so much meaning, joy, and peace in life. I\'m so grateful for the relationship I\'ve developed with my body and food, and I want others to feel the same goodness that comes from that. I hope by following along here you\'ll start to feel that same healing within yourself\".' }
                />
                <TeamMemberCard 
                    name={'Christine Parks'} 
                    photoURL={'https://i.imgur.com/4iklfbxl.jpg'} 
                    blurb={'Christine is a southern-Oregon native, but has lived in Utah for the last 8 years. She graduated from BYU in 2021 and works as a tax accountant for PwC. Christine struggled with binge eating disorder as a teenager and started her recovery journey at age 20. It\'s one of the hardest things she\'s ever been through, but she is so grateful for the growth, healing, and empowerment she has found through recovery. When she\'s not crunching numbers at work or dismantling diet culture on social media, Christine loves the mountains, traveling, and Chick-fil-A waffle fries.She can\'t wait to share Every Body with the world!'}
                />
                <TeamMemberCard 
                    name={'Allison McCune'} 
                    photoURL={'https://i.imgur.com/1ZSXZgd.jpg'}
                    blurb={'A native of Upstate New York, Allison transplanted to Salt Lake City three years ago and has fallen in love with life in Utah. Much like the other women behind Every Body, Allison dealt with a pattern of disordered eating and body dissatisfaction from middle school through college. When she came across Intuitive Eating in 2017, her world was flipped upside down! Through her own journey she found a deep passion for helping others who struggle with similar issues and has been working in direct patient care for eating disorders since February 2020. She hopes to pursue a Master\'s in Counseling in the next couple of years. When she isn\'t at work, Allison can usually be found playing outside. She loves impulse tattoos, never taking things seriously, and overanalyzing Oscar-nominated movies. She is excited to meet and connect with everyone at the retreats this summer!'}
                />
                <TeamMemberCard 
                    name={'Emily Damm'} 
                    photoURL={'https://i.imgur.com/jY5v819l.jpg'}
                    blurb={'Emily is an Oregonian who\'s loved her chapter in Utah attending Brigham Young University. She graduates this semester! As a doula, she\'s passionate about walking alongside women as they navigate the beautiful transitions through pregnancy, birth, and motherhood. During her free time you can find Emily reading about herbs or bees, hiking, biking, or making a generous pot of soup to share. Emily started battling an eating disorder without knowing what it was. After learning more and trying to recover on her own for a long time, she took a pause on her life to seek out life changing treatment, which set her on a journey of all-in healing. She says, "It\'s been incredible to feel at home in my body again. Helping create Every Body has been quite the symbol of my next step in recovery: to help others feel that, too".'}
                />
                <TeamMemberCard 
                    name={'Olivia Ellis'} 
                    photoURL={'https://i.imgur.com/4q8sRWvl.png'}
                    blurb={'Olivia is from a tiny town in Utah, where there are more cows than people. Now in Provo, she is currently studying Psychology at UVU, and is absolutely thrilled to participate in Every Body! Olivia was diagnosed with clinical depression and anxiety at age eight. She has struggled with body dissatisfaction most of her life in connection to these disorders. Making it her life\'s mission to help other woman also on the road to recovery, Olivia has conducted research, given presentations, and facilitated panels on this issue. When Olivia isn\'t “adulting,” you\'ll probably find her roller skating, eating blue candy, soaking up all the sun she can get, or obsessing over her new niece'} 
                />
            </div>

        </div>
    )
}