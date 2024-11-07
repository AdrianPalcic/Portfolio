import React from 'react'

import { CgWebsite } from 'react-icons/cg'
import { FiShoppingCart } from 'react-icons/fi'
import { IoColorPaletteOutline, IoStatsChart } from 'react-icons/io5'
import { FaLaptopCode } from 'react-icons/fa'
import { IoMdRefresh } from 'react-icons/io'

const Services = () => {


    return (
        <div className="services content" id="services">
            <h1>Services</h1>
            <div className="underline"></div>
            <p>I provide a range of web development services tailored to meet your unique needs. Whether you're looking to build a new website from scratch or enhance an existing one, I'm here to help you achieve your goals with high-quality, responsive solutions.</p>
            <div className="sC">
                <div className="card">
                    <div className='card-icon-cont'>
                        <CgWebsite size={"30px"} />
                    </div>
                    <div className='tc'>
                        <h3>Custom Website</h3>
                        <p>Custom websites built with modern technologies to ensure a responsive and engaging user experience.</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-icon-cont'>
                        <FiShoppingCart size={"30px"} />
                    </div>
                    <div className='tc'>
                        <h3>E-commerce functionality</h3>
                        <p>Development of secure and user-friendly e-commerce platforms to help you reach your customers online.</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-icon-cont'>
                        <IoColorPaletteOutline size={"30px"} />
                    </div>
                    <div className='tc'>
                        <h3>UI/UX Design</h3>
                        <p>Creating intuitive and attractive user interfaces that enhance user satisfaction and drive engagement.</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-icon-cont'>
                        <FaLaptopCode size={"30px"} />
                    </div>
                    <div className='tc'>
                        <h3>Web App development</h3>
                        <p>Building dynamic web applications with powerful back-end functionality for a seamless user experience.</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-icon-cont'>
                        <IoMdRefresh size={"30px"} />
                    </div>
                    <div className='tc'>
                        <h3>Website Maintenance and Support</h3>
                        <p>Ongoing support and maintenance services to keep your website running smoothly and securely.</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-icon-cont'>
                        <IoStatsChart size={"30px"} />
                    </div>
                    <div className='tc'>
                        <h3>SEO Optimization</h3>
                        <p>Implementing SEO best practices to improve your website’s visibility and attract more organic traffic.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Services