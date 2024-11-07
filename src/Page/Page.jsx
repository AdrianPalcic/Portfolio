import { useState } from "react"
import RightContent from "../Components/RightContent"
import Sidebar from "../Sidebar.jsx/Sidebar"
import { IoReorderThreeOutline } from "react-icons/io5";

const Page = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="pageLayout">
            <Sidebar visible={isVisible} />
            <RightContent />
            <button onClick={handleClick} className="toggle-sidebar"><IoReorderThreeOutline size={"30px"} /></button>

        </div>
    )
}

export default Page