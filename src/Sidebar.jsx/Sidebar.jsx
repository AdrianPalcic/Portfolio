import SocialIcons from "../Components/SidebarComponents/SocialIcons"
import SidebarContent from "../Components/SidebarComponents/SidebarContent"

const Sidebar = ({ visible }) => {


    return (
        <div className={visible ? "sidebarContainer visible" : "sidebarContainer"}>
            <div className="avatar">
                <img className="sidebarpic" src="public\profile-pice.jpg" />
            </div>
            <p className="name-text">Adrian Palčić</p>
            <SocialIcons />
            <SidebarContent />
        </div>
    )
}

export default Sidebar