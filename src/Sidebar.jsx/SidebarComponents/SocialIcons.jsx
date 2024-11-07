import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md"
const SocialIcons = () => {
    return (
        <div className="socialIcons">
            <div className="socialIconDiv" >
                <FaInstagram size={"20px"} />
            </div>
            <div className="socialIconDiv" >
                <FaFacebook size={"20px"} />
            </div>
            <div className="socialIconDiv" >
                <FaLinkedin size={"20px"} />
            </div>
            <div className="socialIconDiv" >
                <MdMail size={"20px"} />
            </div>
        </div>
    )
}

export default SocialIcons