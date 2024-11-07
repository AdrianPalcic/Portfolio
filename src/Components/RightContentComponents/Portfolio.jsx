import { FaCss3Alt, FaReact } from "react-icons/fa"
import ProjectCard from "../projectCard/ProjectCard"
import { IoLogoFirebase } from "react-icons/io5"
import { SiRedux } from "react-icons/si"

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Virtual Caffe",
            desc: "A virtual caffe app used to keep track of tables and their orders. Simplifies work by removing the need to memorize orders. ",
            techStack: [<FaReact key="react" className="tech-react" size="40px" />, <FaCss3Alt key="css" className="tech-css" size="40px" />, <SiRedux key="redux" className="tech-redux" size="40px" />],
            img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comein.jpg-pHPNwJwWt2zV01yk9JpSls5a7Hf7o4.jpeg"
        },
        {
            id: 2,
            title: "Instagram Clone",
            desc: "Instagram clone app. It's main functionallity was to teach me fullstack development using Firebase",
            techStack: [<FaReact key="react" className="tech-react" size="40px" />, <FaCss3Alt key="css" className="tech-css" size="40px" />, <IoLogoFirebase key="firebase" className="tech-firebase" size="40px" />, <SiRedux key="redux" className="tech-redux" size="40px" />],
            img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Instaclone.jpg-HhYpNKSRDnUvAXUfPzA79Z3tz1NV6S.jpeg"
        },
        {
            id: 3,
            title: "E-commerce website",
            desc: "Classic E-commerce website with a focus on good design, responsive design, SEO optimization and user authentication",
            techStack: [<FaReact key="react" className="tech-react" size="40px" />, <FaCss3Alt key="css" className="tech-css" size="40px" />, <IoLogoFirebase key="firebase" className="tech-firebase" size="40px" />, <SiRedux key="redux" className="tech-redux" size="40px" />],
            img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ecomm.jpg-fcq6qfmURtwflqAmpJya9hKcF2gdq9.jpeg"
        },
    ]

    return (
        <div className="portfolio content" id="portfolio">
            <h1>Portfolio</h1>
            <div className="underline"></div>
            <p>In this section, I will highlight some of my projects to showcase the range of services I offer. Each project reflects my skills and dedication to delivering high-quality web solutions.</p>
            <div className="projectContainer">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio