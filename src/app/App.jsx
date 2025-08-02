import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/cv.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";

//import images
import Ataa from '../assets/images/Ataa.png';
import Elzero from '../assets/images/Elzero.png';
import Kasper from '../assets/images/Kasper.png';
import Leon from '../assets/images/Leon.png';
import SokoNumber from '../assets/images/SokoNumber.png';
import GlobalShare from '../assets/images/GlobalShare.png';

// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'HTML 5',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS 3',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: "TypeScript",
		icon: <SiTypescript size="25px" color="white" />,
		cssName: "type-script"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'Redux ToolKit',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},
	{
		name: 'Redux Recoil',
		icon: <SiRecoil size="25px" color="white" />,
		cssName: "recoil"
	},
	{
		name: 'React Query',
		icon: <SiReactquery size="25px" color="white" />,
		cssName: "react-query"
	},
	{
		name: 'RTK Query',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},
	{
		name: 'Responsive Design',
		icon: <FaMobileAlt size="25px" color="white" />,
		cssName: "responsive"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'java',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'C++',
		icon: <TbBrandCpp size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}
];

const projects = [
    {
        name: 'Mobile Phone Recommendation System',
        link: '',
        github: 'https://github.com/zainlatif/phonefinder_website.git',
        description: `Developed a mobile-first website that recommends smartphones based on user needs using an AI-powered assistant. The system analyzes key specifications and suggests the best options, serving as a simplified alternative to platforms like GSMArena and WhatMobile. Built with a focus on responsiveness and user-friendly interaction.`,
        image: GlobalShare // placeholder image, as requested
    },
    {
        name: 'Rat Detection System (Computer Vision Project)',
        link: '',
        github: 'https://github.com/zainlatif/Rat_Detection_CNN_image.git',
        description: `Built a binary image classification system using Convolutional Neural Networks (CNN) in Python with TensorFlow and Keras. The model detects the presence of rats in images using a custom dataset. Leveraged CNN’s capability to automatically extract spatial features and patterns for accurate classification. Implemented in Jupyter Notebook with real-time testing by adding images in a testing_folder. Technologies used include Python, CNN, TensorFlow, Keras, NumPy, and Matplotlib.`,
        image: Ataa // placeholder image, as requested
    },
]

function App() {
    const form = useRef();

    const [menu, setMenu] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(function () {
            emailjs.sendForm('service_bvwyz1j', 'template_mgh1j0q', form.current, 'HDMwz57k3xrihLg4J')
                .then((result) => {
                    e.target.name.value = '';
					e.target.email.value = '';
                    e.target.message.value = '';
                });
            setLoading(false);
        }, 2000);

    };

    return (
        <div className={style.app}>
            {/* Navbar */}
            <div className={style.nav}>
                <a className={style.logo}>
                    <FaReact color='var(--primary-main)' size='50px' />
                    <h5>zain latif</h5>
                </a>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                <div className={style["menu-icon"]}>
                    <input id='checkbox' className={style["checkbox2"]} type="checkbox" />
                    <label className={`${style.toggle} ${style.toggle2}`} htmlFor="checkbox" onClick={() => setMenu(!menu)}>
                        <div className={`${style.bars} ${style.bar4}`}></div>
                        <div className={`${style.bars} ${style.bar5}`}></div>
                        <div className={`${style.bars} ${style.bar6}`}></div>
                    </label>
                </div>
            </div>
            {
                menu === true &&
                <ul className={style.menu}>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            }

            {/* Home */}
            <div id='Home' className={style.home}>
                <div className={style["home-content"]}>
                    <h1>HEY, I'M Zain Latif</h1>
                    <p>Aspiring software engineer with hands-on experience in web development. Skilled in the MERN stack, Python, and AI tools with a strong foundation in computer science. Proven ability to deliver freelance design projects and build real-world applications. Passionate about technology, problem-solving, and continuous learning.</p>
                    <a
                        href={cv}
                        download="cv-PDF-document"
						target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DownloadButton >
                            Download CV
                        </DownloadButton>
                    </a>
                </div>
                <div className={style["scroll-icon"]}>
                    <div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
                        <div className={style.chevrons}>
                            <div className={style["chevron-down"]}></div>
                            <div className={style["chevron-down"]}></div>
                        </div>
                    </div>
                </div>
                <div className={style["contact-nav"]}>
                    <a className={style.github} target="_blank" href='https://github.com/zainlatif' >
                        <AiFillGithub size="30px" color='black' />
                    </a>
                    <a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/zainlatif702' >
                        <AiFillLinkedin size="30px" color='black' />
                    </a>
                    <a className={style.gmail} target="_blank" href="mailto:zainlatif702@gmail.com?subject=SendMail&body=Description" >
                        <BiLogoGmail size="30px" color='black' />
                    </a>
                    <a className={style.facebook} target="_blank" href='https://www.facebook.com/zain.latif.702' >
                        <BsFacebook size="30px" color='black' />
                    </a>
                    <a className={style.twitter} target="_blank" href='https://twitter.com/zainlatif702' >
                        <i className="fab fa-twitter" style={{ fontSize: "30px", color: "black" }}></i>
                    </a>
                </div>
            </div>

            {/* About */}
            <div id='About' className={style.about}>
                <div className={style.container}>
                    <h2 className={style.title}>About Me</h2>
                    <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                    <div className={style["about-content"]}>
                        <div className={style["about-info"]}>
                            <h3>Get to know me!</h3>
                            <p>
                                I'm an <span>aspiring software engineer</span> with hands-on experience in web development. Skilled in the <span>MERN stack</span>, Python, and AI tools with a strong foundation in computer science. Proven ability to deliver freelance design projects and build real-world applications. Passionate about technology, problem-solving, and continuous learning.<br /><br />
                                Feel free to connect or follow me on my <a href="https://github.com/zainlatif" target="_blank">Github</a> and <a href="https://www.linkedin.com/in/zainlatif702" target="_blank">LinkedIn</a> where I post useful content related to Web Development and Programming.<br /><br />
                                I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.
                            </p>
                        </div>
                        <div className={style["my-skill"]}>
                            <h3>My Skills</h3>
                            <div className={style.skills}>
                                {
                                    skills.map((skill, index) => {
                                        return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
                                            <div className={style["skill-name"]}>{skill.name}</div>
                                            <div className={style["skill-icon"]}>{skill.icon}</div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div id='Projects' className={style.projects}>
                <div className={style.container}>
                    <h2 className={style.title}>Projects</h2>
                    <p>Here you will find some of the personal projects that I created with each project containing its own case study</p>
                    <div className={style["projects-list"]}>
                        {
                            projects.map((project, index) => {
                                return <div key={`project${index}`} className={style.project}>
                                    <div className={style["project-image"]}>
                                        <img src={project.image} alt="Project Image" />
                                    </div>
                                    <div className={style["project-info"]}>
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <div className={style["project-buttons"]}>
                                            <IconButton
                                                width="170px"
                                                height="50px"
                                                backgroundColor="var(--primary-main)"
                                                color="white"
                                                link={project.link}
                                                icon={<AiOutlineEye size="25px" color='white' />}
                                            >
                                                Live Demo
                                            </IconButton>
                                            <IconButton
                                                width="100px"
                                                height="50px"
                                                backgroundColor="black"
                                                color="white"
                                                link={project.github}
                                                icon={<AiFillGithub size="25px" color='white' />}
                                            >
                                                Github
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>

            {/* Contact */}
            <div id='Contact' className={style.contact}>
                <div className={style.container}>
                    <h2 className={style.title}>Contact</h2>
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                    <form
                        ref={form} onSubmit={sendEmail}
                        className={
                            clsx(
                                { [style['inactive-form']]: loading }
                            )}
                    >
                        <InputField
                            width="700px"
                            height="40px"
                            name="name"
                            placeholder="Enter Your Name"
                            label="Name"
                            type="text"
                        />
                        <InputField
                            width="700px"
                            height="40px"
                            name="email"
                            placeholder="Enter Your Email"
                            label="Email"
                            type="email"
                        />
                        <TextAreaField
                            width="700px"
                            height="250px"
                            name="message"
                            placeholder="Enter Your Message"
                            label="Message"
                            type="text"
                        />
                        <SubmitButton
                            icon={<RiSendPlaneFill size="20px" color='white' />}
                            width="200px"
                            height="60px"
                            color="white"
                            backgroundColor="var(--primary-main)"
                        >
                            Submit
                        </SubmitButton>
                        {
                            loading &&
                            <div className={style.loader}>
                                <Loader />
                            </div>
                        }
                    </form>
                </div>
            </div>

            {/* footer */}
            <div className={style.footer}>
                <div className={style.container}>
                    <div className={style["footer-info"]}>
                        <div>
                            <h3>zain latif</h3>
                            <p>Aspiring software engineer with hands-on experience in web development. Skilled in the MERN stack, Python, and AI tools with a strong foundation in computer science. Proven ability to deliver freelance design projects and build real-world applications. Passionate about technology, problem-solving, and continuous learning.</p>
                        </div>
                        <div className={style.social}>
                            <h3>Social</h3>
                            <div className="">
                                <a className={style.git} target="_blank" href='https://github.com/zainlatif' >
                                    <AiFillGithub size="30px" color='white' />
                                </a>
                                <a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/zainlatif702' >
                                    <AiFillLinkedin size="30px" color='white' />
                                </a>
                                <a className={style.gmail} target="_blank" href="mailto:zainlatif702@gmail.com?subject=SendMail&body=Description" >
                                    <BiLogoGmail size="30px" color='white' />
                                </a>
                                <a className={style.facebook} target="_blank" href='https://www.facebook.com/zain.latif.702' >
                                    <BsFacebook size="30px" color='white' />
                                </a>
                                <a className={style.twitter} target="_blank" href='https://twitter.com/zainlatif702' >
                                    <i className="fab fa-twitter" style={{ fontSize: "30px", color: "white" }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style["copy-right"]}>
                        © Copyright 2025. Made by <span>Zain Latif</span> | zainlatif702@gmail.com | +923237668916
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;