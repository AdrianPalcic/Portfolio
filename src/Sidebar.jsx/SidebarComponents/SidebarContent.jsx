import { FaRegClipboard, FaRegFileAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { useEffect, useState } from "react";

const SidebarContent = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        const sections = document.querySelectorAll('.content');

        // Smooth scrolling
        links.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        // Cleanup observer and event listeners on component unmount
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
            links.forEach(anchor => {
                anchor.removeEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        };
    }, []);

    return (
        <div className="sidebarContent" id="sidebar">
            <div className="sidebarItem">
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}> <RiHome2Line className="sidebarIcon" /> Home </a>
            </div>
            <div className="sidebarItem">
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}> <IoPersonOutline className="sidebarIcon" /> About </a>
            </div>
            <div className="sidebarItem">
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}> <HiOutlineBookOpen className="sidebarIcon" /> Skills </a>
            </div>
            <div className="sidebarItem">
                <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}> <GrGallery className="sidebarIcon" /> Portfolio </a>
            </div>
            <div className="sidebarItem">
                <a href="#services" className={activeSection === 'services' ? 'active' : ''}> <FaRegClipboard className="sidebarIcon" /> Services </a>
            </div>
            <div className="sidebarItem">
                <a href="#resume" className={activeSection === 'resume' ? 'active' : ''}> <FaRegFileAlt className="sidebarIcon" /> Resume </a>
            </div>
            <div className="sidebarItem">
                <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}> <RiHome2Line className="sidebarIcon" /> Certifications </a>
            </div>
        </div>
    );
};

export default SidebarContent;