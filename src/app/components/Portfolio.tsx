import '../styles/Portfolio.css'
import Project from './project'
import gan_eden from '@/public/project/gan_eden.png'
import portfolio from '@/public/project/portfolio.png'
import Layer_website from '@/public/project/Layer_website.png'
import villa_alerces from '@/public/project/villa_alerces.png'
import codec from '@/public/project/codec.png'
function Portfolio(){
    return (
        <div id="portfolio">
            <h1 id="title_portfolio">Portfolio</h1>

            <div id="projects">
                <div id="grid_project">

                    <Project
                        name="Showcase site for a lawyer"
                        imageUrl={Layer_website}
                        href="https://elazarcohen1.github.io/site-cabinet-cohen/#/"
                        description="A professional and elegant showcase website for a law firm, presenting legal services, areas of expertise, and clear contact information."
                        langages={['react','Css']} 
                    />

                    <Project
                        name="Website for villa reservation"
                        imageUrl={villa_alerces}
                        href="https://villa-alerces.vercel.app/"
                        description="A villa reservation website featuring property details, availability information, and a smooth user experience for potential guests."
                        langages={['react','Css']} 
                    />

                    <Project
                        name="e-commerce Website for a flower shop"
                        imageUrl={gan_eden}
                        href="https://dreadful-impact-back.medusajs.site/fr"
                        description="An e-commerce platform for a flower shop, allowing users to browse products, manage orders, and purchase floral arrangements online."
                        langages={['nextjs','tailwind']} 
                    />

                    <Project
                        name="My portfolio"
                        imageUrl={portfolio}
                        href="https://portfolio2-eta-five-81.vercel.app/"
                        description="My personal portfolio website showcasing my projects, skills, and technologies I work with as a web developer."
                        langages={['nextjs','react','css']} 
                        projet="portfolio2"
                    />

                    <Project
                        name="Projet en c"
                        imageUrl={codec}
                        description="Implementation of a custom codec written in C, focusing on low-level data encoding and decoding mechanisms. The project emphasizes performance, memory management, and modular design, and is built using Makefiles with shared libraries (.so)."
                        langages={['C','Makefile','libso']} 
                        projet="Codec-c"
                    />

                </div>
            </div>
        </div>
    )
}

export default Portfolio;
