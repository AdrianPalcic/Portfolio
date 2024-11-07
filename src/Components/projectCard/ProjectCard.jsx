import { FaCss3Alt, FaGithub, FaLink, FaReact } from "react-icons/fa"

const ProjectCard = ({ project }) => {
    return (
        <div className="projectCard">
            <h3>{project.title}</h3>
            <img className="projectImg" src={`/${project.img}`} />
            <p>{project.desc}</p>
            <div className="secondUnderline"></div>
            <div className="techStack">
                {project.techStack.map((stack) => (
                    stack
                ))}
            </div>
            <div className="projectLink">
                <a className="projectAnchor" href="#"><FaGithub />View project</a>
            </div>
        </div>
    )
}

export default ProjectCard