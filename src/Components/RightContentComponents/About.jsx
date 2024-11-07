import { IoIosArrowForward } from "react-icons/io";

const About = () => {

    const profilePic = '/profile-pice.jpg'

    return (
        <div className="about content" id="about">
            <h1>About</h1>
            <div className="underline"></div>
            <div className="aboutText">
                <p>I started my career in hospitality, where I developed a strong interest in programming that quickly became a valuable, practical skill. Combining my problem-solving mindset with technology, I found innovative ways to improve efficiency and streamline tasks. Today, I’m dedicated to building impactful digital solutions, turning ideas into user-friendly experiences on the web.</p>
            </div>
            <div className="aboutContent">
                <div className="imageContainer">
                    <img src={profilePic} />
                </div>
                <div className="aboutme">
                    <h2>Web Developer & UI/UX Designer</h2>
                    <div className="data">
                        <div className="line">
                            <div>
                                <IoIosArrowForward size={"20px"} className="aboutIcon" /> <strong> Birthday </strong> : 16.04.2002
                            </div>
                            <div>
                                <IoIosArrowForward size={"20px"} className="aboutIcon" /> <strong> Website </strong> : <a href="https://portfolio-teal-one-27.vercel.app/">www.It'sThisOne.com</a>
                            </div>
                        </div>
                        <div className="line">
                            <div>
                                <IoIosArrowForward size={"20px"} className="aboutIcon" /> <strong> Phone </strong> : +385 95 748 2199
                            </div>
                            <div>
                                <IoIosArrowForward size={"20px"} className="aboutIcon" /> <strong> Age </strong> : 22
                            </div>
                        </div>
                        <div className="line">
                            <div>
                                <IoIosArrowForward size={"20px"} className="aboutIcon" /> <strong> Country </strong> : Zagreb, Croatia
                            </div>
                            <div>
                                <IoIosArrowForward size={"20px"} className="aboutIcon" /> <strong> Email </strong> : adrian.palcic@gmail.com
                            </div>
                        </div>
                        <div className="line">
                            <div>
                                <IoIosArrowForward size={"20px"} className="aboutIcon" /> <strong> Degree </strong>: SSS
                            </div>
                            <div>
                                <IoIosArrowForward size={"20px"} className="aboutIcon" /> <strong> For hire </strong> : available
                            </div>
                        </div>
                    </div>
                    <p className="aboutText" >Outside of coding, I enjoy staying active through working out and hiking, which keeps me grounded and energized.</p>
                </div>
            </div>
        </div>
    )
}

export default About