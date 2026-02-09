import SkillMenu from './skill_menu'

import profil_portrait from '@/public/profil_portrait_rond.png'
import AboutText from './about_text'
import Image from 'next/image'
import '../styles/About.css'

function About(){
    return (
    <>
    <div id="about_and_skills">
        <div id='card_about'>
        
            <h2 id="title_about_me">
                About Me  
            </h2>


            <div id='text_about_me'>
                <div id="image_about">
                    <Image src={profil_portrait} alt='profil portrait'/>
                </div>
                <AboutText />
            </div>

            
        </div>
        <div id="block_center_skill">
            <div id="block_skills">
                
                <div id="skills_title">
                    <div className="trait"></div>

                    <h3>
                        Skills
                    </h3>
                </div>
                <div id='skills'>
                    <SkillMenu />
                </div>

            </div>
        </div>
    </div>
    </>
   
    )
}

export default About;