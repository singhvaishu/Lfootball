import React from 'react';
import aboutImage from '../assets/img5.jpg';
import { IoEyeOutline } from 'react-icons/io5';
import { BsBullseye } from 'react-icons/bs';

const About = () => {
    return (
        <div className="w-full bg-gray-900 text-white pt-80 md:pt-12 lg:pt-15 z-30">
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 p-4 order-2">
                        <div className="text-center">
                            <img className="animate-fadeInRight mb-8 pb-4 mx-auto md:mx-0 max-w-full" style={{ animationDelay: '0.2s' }} src={aboutImage} alt="Whizoid" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 order-1">
                        <div className="text-center">
                            <div className="text-bg-shadow"></div>
                            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-4 animate-fadeInUp text-left" style={{ animationDuration: '1300ms', animationDelay: '0ms', animationIterationCount: 1, opacity: 1 }}>
                                Get to know<br />
                                <span className="text-red-500">About Us</span>
                            </h2>
                        </div>
                        <p className="wow fadeInUp">
                            <span>Welcome to Lucknow Football Clubs, In the heart of Uttar Pradesh, where history meets modernity, lies Lucknow Football Club, a beacon of passion, talent, and community spirit in the realm of football. Established with a vision to foster the sport at grassroots levels and to compete at the highest echelons of Indian football, Lucknow FC has emerged as a force to be reckoned with in the football landscape of India...</span>
                        </p>
                        <div className="flex flex-col md:flex-row pt-5">
                            <div className="abtvision md:pr-4 mb-4 md:mb-0 md:w-1/2">
                                <div className="aboutheading2 slideup flex items-center">
                                    <IoEyeOutline className="abticon text-4xl mr-2" />
                                    <h3 className="abtheading2 text-xl">Our Vision:</h3>
                                </div>
                                <p className="abtpara slideup">To put Thane on the forefront of India’s Football Revolution. Nurture community engagement, sporting culture, facilitated by a structure that evolves the grassroots ecosystem.</p>
                            </div>
                            <div className="abtaim md:ml-8 md:w-1/2">
                                <div className="aboutheading2 slideup flex items-center">
                                    <BsBullseye className="abticon text-4xl mr-2" />
                                    <h3 className="abtheading2 text-xl">Our Aim:</h3>
                                </div>
                                <p className="abtpara slideup">Our aim at Thane City FC is to create an environment that challenges, inspires and encourages Thane’s aspiring footballers, by enabling them to reach their fullest potential.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
