import { FaCheck, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const Skills = () => {

    return (
        <div className="skills content" id="skills">
            <h1>Skills</h1>
            <div className="underline"></div>

            <h2>Programming Languages and Tools</h2>
            <div className="toolIcons">
                <FaHtml5 className="toolIcon html" size={"60px"} />
                <FaCss3Alt className="toolIcon css" size={"60px"} />
                <RiTailwindCssFill className="toolIcon tailwind" size={"60px"} />
                <FaSass className="toolIcon sass" size={"60px"} />
                <FaJs className="toolIcon js" size={"60px"} />
                <FaReact className="toolIcon react" size={"60px"} />
                <SiRedux className="toolIcon redux" size={"60px"} />
                <FaGitAlt className="toolIcon git" size={"60px"} />
                <FaGithub className="toolIcon github" size={"60px"} />
                <FaNodeJs className="toolIcon nodejs" size={"60px"} />
                <IoLogoFirebase className="toolIcon firebase" size={"60px"} />
            </div>
            <h3>Workflow and additional skills</h3>
            <div className="additionalSkills">
                <div> <FaCheck className="addSkillicon" /> <p>SEO optimization</p></div>
                <div> <FaCheck className="addSkillicon" /> <p>Responsive design</p></div>
                <div> <FaCheck className="addSkillicon" /> <p>API integration</p></div>
                <div> <FaCheck className="addSkillicon" /> <p>Testing and debugging</p></div>
                <div> <FaCheck className="addSkillicon" /> <p>TypeScript</p></div>
                <div> <FaCheck className="addSkillicon" /> <p>Vite</p></div>
                <div> <FaCheck className="addSkillicon" /> <p>ChakraUI</p></div>
            </div>
        </div>
    );
}

export default Skills;