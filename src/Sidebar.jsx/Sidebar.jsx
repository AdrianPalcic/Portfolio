import SocialIcons from "./SidebarComponents/SocialIcons"
import SidebarContent from "./SidebarComponents/SidebarContent"
import profilePic from '.././../public/profile-pice.jpg'
const Sidebar = () => {


    return (
        <div className='sidebarContainer'>
            <div className="avatar">
                <img className="sidebarpic" src={profilePic} />
            </div>
            <p className="name-text">Adrian Palčić</p>
            <SocialIcons />
            <SidebarContent />
        </div>
    )
}

export default Sidebar