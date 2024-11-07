import SocialIcons from "./SidebarComponents/SocialIcons"
import SidebarContent from "./SidebarComponents/SidebarContent"
const Sidebar = () => {


    return (
        <div className='sidebarContainer'>
            <div className="avatar">
                <img className="sidebarpic" src="/profile-pice.jpg" />
            </div>
            <p className="name-text">Adrian Palčić</p>
            <SocialIcons />
            <SidebarContent />
        </div>
    )
}

export default Sidebar