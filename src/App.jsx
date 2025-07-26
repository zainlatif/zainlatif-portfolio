import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// Import components
import DownloadButton from './components/DownloadButton/DownloadButton';
import IconButton from './components/IconButton/IconButton';
import InputField from './components/InputField/InputField';
import TextAreaField from './components/TextAreaField/TextAreaField';
import SubmitButton from './components/SubmitButton/SubmitButton';
import Loader from './components/Loader/Loader';

// Import CV and assets
import cv from './assets/images/Zain Latif CS CV.pdf';
import Ataa from './assets/images/Ataa.png';
import Leon from './assets/images/Leon.png';
import SokoNumber from './assets/images/SokoNumber.png';

// Import icons
import {
  FaReact, FaMobileAlt
} from "react-icons/fa";
import {
  AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye
} from "react-icons/ai";
import {
  BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava
} from "react-icons/bi";
import {
  BsFacebook, BsGit, BsPuzzle
} from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import {
  RiSendPlaneFill
} from "react-icons/ri";
import {
  SiTypescript, SiRecoil, SiReactquery
} from "react-icons/si";

import clsx from 'clsx';
import style from './App.module.css';


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
    name: `Phone Finder MERN Web App`,
    link: 'https://github.com/zainlatif/phonefinder_website.git',
    github: 'https://github.com/zainlatif/phonefinder_website.git',
    description: `About
Phone Finder – AI-powered Mobile Search (MERN + Flask) A mobile phone comparison and recommendation platform for users in Pakistan. Built with the MERN stack and a Flask-based AI chatbot to suggest phones based on user needs.`,
    image: Ataa
  },
  {
    name: 'PhoneFinder AI(Machine Learning)',
    link: 'https://github.com/zainlatif/phonefinderai-v6.git',
    github: 'https://github.com/zainlatif/phonefinderai-v6.git',
    description: '📱 AI-powered phone recommendation system using Flask, Machine Learning, and Waitress. Classifies user queries and suggests the best smartphones based on their needs.',
    image: SokoNumber
  },
  {
    name: 'Rat Detection System (convolutional neural network)',
    link: 'https://github.com/zainlatif/rat-detection-system.git',
    github: 'https://github.com/zainlatif/rat-detection-system.git',
    description: 'The Rat Detection System is a convolutional neural network (CNN) model designed to detect rats in images. It utilizes deep learning techniques to analyze and classify images, providing an efficient solution for identifying the presence of rats in various environments.',
    image: Leon
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
      emailjs.sendForm('service_gjbmeus', 'template_qk6p0pa', form.current, 'HDMwz57k3xrihLg4J')
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
          <h5>Zain Latif</h5>
        </a>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        <div className={style["menu-icon"]}>
          <input id='checkbox' className={style["checkbox2"]} type="checkbox" />
          <label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
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
          <h1>HEY, I'M Zain</h1>
          <p>A passionate MERN Stack Developer and Python Machine Learning enthusiast crafting modern, responsive websites and intelligent web applications that drive real-world impact. From sleek UIs to smart AI-powered features, I build solutions that blend functionality with innovation.</p>					<a
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
                I’m a <span>MERN Stack Web Developer</span> and <span>Python Machine Learning enthusiast</span>, passionate about building full-stack websites and smart web applications that solve real-world problems. Explore some of my featured work in the <span>Projects</span> section. <br /> <br />
                I enjoy learning new technologies and sharing what I learn through practical projects and code. Whether it's building a <span>phone recommendation AI</span> or experimenting with <span>image classification using CNNs</span>, I’m always pushing myself to grow. Check out my code on <a href="https://github.com/zainlatif" target="_blank">GitHub</a> where I regularly post my work in Web Development and Machine Learning. <br /> <br />
                I’m actively seeking <span>job opportunities</span> where I can contribute, grow as a developer, and be part of a forward-thinking team. If you’re looking for someone who combines strong frontend skills with backend and AI expertise, feel free to <span>contact</span> me.
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
          <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
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
              <h3>Zain Latif</h3>
              <p>A passionate MERN Stack Developer and Python Machine Learning enthusiast crafting modern, responsive websites and intelligent web applications that drive real-world impact.</p>
            </div>
            <div className={style.social}>
              <h3>Social</h3>
              <div className="">
                <a className={style.git} target="_blank" href='https://github.com/zainlatif702' >
                  <AiFillGithub size="30px" color='white' />
                </a>
                <a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/zainlatif702/' >
                  <AiFillLinkedin size="30px" color='white' />
                </a>
                <a className={style.gmail} target="_blank" href="mailto:zainlatif72@gmail.com?subject=SendMail&body=Description" >
                  <BiLogoGmail size="30px" color='white' />
                </a>
                <a className={style.facebook} target="_blank" href='https://www.facebook.com/zain.latif.702' >
                  <BsFacebook size="30px" color='white' />
                </a>
              </div>
            </div>
          </div>
          <div className={style["copy-right"]}>
            © Copyright 2025. Made by <span>Zain Latif</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;