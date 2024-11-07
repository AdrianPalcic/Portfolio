import React from 'react';
import AnimatedComponent from './AnimatedComponent';
import About from "./RightContentComponents/About";
import Certifications from "./RightContentComponents/Certifications";
import Footer from "./RightContentComponents/Footer";
import Home from "./RightContentComponents/Home";
import Portfolio from "./RightContentComponents/Portfolio";
import Resume from "./RightContentComponents/Resume";
import Services from "./RightContentComponents/Services";
import Skills from "./RightContentComponents/Skills";

const RightContent = () => {
    return (
        <div className="rightContentContainer">
            <AnimatedComponent><Home /></AnimatedComponent>
            <AnimatedComponent><About /></AnimatedComponent>
            <AnimatedComponent><Skills /></AnimatedComponent>
            <AnimatedComponent><Portfolio /></AnimatedComponent>
            <AnimatedComponent><Services /></AnimatedComponent>
            <AnimatedComponent><Resume /></AnimatedComponent>
            <AnimatedComponent><Certifications /></AnimatedComponent>
            <AnimatedComponent><Footer /></AnimatedComponent>
        </div>
    );
}

export default RightContent;