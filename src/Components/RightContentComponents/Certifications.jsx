import { FaAward } from "react-icons/fa"

const Certifications = () => {
    return (
        <div className="certifications content" id="certifications">
            <h1>Certifications</h1>
            <div className="underline"></div>
            <div className="certificationContainer">

                <div className="certification">
                    <FaAward className="awardIcon" />
                    <div className="certificationStack">
                        <p className="certTitle">Responsive Web Design</p>
                        <div>
                            <p className="certIssuer">FreeCodeCamp</p>
                            <p className="certDate">2024</p>
                        </div>
                    </div>
                </div>
                <div className="certification">
                    <FaAward className="awardIcon" />
                    <div className="certificationStack">
                        <p className="certTitle">JavaScript Data structures and Algorithms</p>
                        <div>
                            <p className="certIssuer">FreeCodeCamp</p>
                            <p className="certDate">2024</p>
                        </div>
                    </div>
                </div>
                <div className="certification">
                    <FaAward className="awardIcon" />
                    <div className="certificationStack">
                        <p className="certTitle">Frontend development Libraries</p>
                        <div>
                            <p className="certIssuer">FreeCodeCamp</p>
                            <p className="certDate">2024</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Certifications