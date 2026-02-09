import '../styles/Portfolio.css'
import Project from './project'
import gan_eden from '@/public/project/gan_eden.png'
import portfolio from '@/public/project/portfolio.png'
import Layer_website from '@/public/project/Layer_website.png'
import villa_alerces from '@/public/project/villa_alerces.png'
function Portfolio(){
    return (
        <div id="portfolio">
            <h1 id="title_portfolio">
                Portfolio
            </h1>
            <div id="projects">
                <div id="grid_project">
                    <Project
                     name= "Showcase site for a lawyer"
                     imageUrl={Layer_website}
                     href= "https://elazarcohen1.github.io/site-cabinet-cohen/#/"
                     description="A clean and professional showcase website designed for a lawyer, highlighting services, expertise, and contact information."
                    langages={['react','Css']} 

                    />
                    
                    <Project
                        name= "ShowCase Website for a customer"
                        imageUrl={villa_alerces}
                        href= "https://villa-alerces.vercel.app/"
                        description="A clean and professional showcase website designed for a lawyer, highlighting services, expertise, and contact information."
                        langages={['react','Css']} 

                    />
                    <Project
                        name= "ShowCase Website for a customer"
                        imageUrl={gan_eden}
                        href= "https://dreadful-impact-back.medusajs.site/fr"
                        description="A clean and professional showcase website designed for a lawyer, highlighting services, expertise, and contact information."
                        langages={['react','Css']} 

                    />

                    <Project name="My portfolio"
                        imageUrl={portfolio}   
                        langages={['react','Css']} 
                        projet="portfolio" 
                        description="
                        this site web is made in react with css and this is my portfolio"/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;