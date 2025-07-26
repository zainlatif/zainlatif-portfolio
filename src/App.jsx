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
  { name: 'HTML 5', icon: <AiFillHtml5 size="25px" />, cssName: "html" },
  { name: 'CSS 3', icon: <BiLogoCss3 size="25px" />, cssName: "css" },
  { name: 'Java Script', icon: <BiLogoJavascript size="25px" />, cssName: "java-script" },
  { name: 'TypeScript', icon: <SiTypescript size="25px" />, cssName: "type-script" },
  { name: 'React', icon: <FaReact size="25px" />, cssName: "react" },
  { name: 'Redux ToolKit', icon: <BiLogoRedux size="25px" />, cssName: "redux" },
  { name: 'Redux Recoil', icon: <SiRecoil size="25px" />, cssName: "recoil" },
  { name: 'React Query', icon: <SiReactquery size="25px" />, cssName: "react-query" },
  { name: 'Responsive Design', icon: <FaMobileAlt size="25px" />, cssName: "responsive" },
  { name: 'Git', icon: <BsGit size="25px" />, cssName: "git" },
  { name: 'Java', icon: <BiLogoJava size="25px" />, cssName: "java" },
  { name: 'C++', icon: <TbBrandCpp size="25px" />, cssName: "cpp" },
  { name: 'Problem Solving', icon: <BsPuzzle size="25px" />, cssName: "problem-solving" }
];

const projects = [
  {
    name: 'Phone Finder MERN Web App',
    link: 'https://github.com/zainlatif/phonefinder_website.git',
    github: 'https://github.com/zainlatif/phonefinder_website.git',
    description: 'AI-powered mobile comparison site with Flask chatbot for suggestions.',
    image: Ataa
  },
  {
    name: 'PhoneFinder AI (Machine Learning)',
    link: 'https://github.com/zainlatif/phonefinderai-v6.git',
    github: 'https://github.com/zainlatif/phonefinderai-v6.git',
    description: 'AI-powered phone recommendation using Flask and ML classification.',
    image: SokoNumber
  },
  {
    name: 'Rat Detection System (CNN)',
    link: 'https://github.com/zainlatif/rat-detection-system.git',
    github: 'https://github.com/zainlatif/rat-detection-system.git',
    description: 'CNN-based binary image classification system to detect rats.',
    image: Leon
  }
];

function App() {
  const form = useRef();
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      emailjs.sendForm(
        'service_gjbmeus',
        'template_qk6p0pa',
        form.current,
        'HDMwz57k3xrihLg4J'
      ).then(() => {
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
        setLoading(false);
      });
    }, 2000);
  };

  return (
    <div className={style.app}>

      {/* Navbar */}
      <div className={style.nav}>
        <a className={style.logo}>
          <FaReact size="50px" />
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
          <label className={`${style.toggle} ${style.toggle2}`} htmlFor="checkbox" onClick={() => setMenu(!menu)}>
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className={style.menu}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      )}

      {/* Home Section */}
      <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <h1>HEY, I'M Zain</h1>
          <p>
            A passionate MERN Stack Developer and Machine Learning enthusiast crafting responsive websites and intelligent applications.
          </p>
          <a href={cv} download target="_blank" rel="noopener noreferrer">
            <DownloadButton>Download CV</DownloadButton>
          </a>
        </div>

        <div className={style["scroll-icon"]}>
          <div className={style["scroll-down"]}>
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>

        <div className={style["contact-nav"]}>
          <a className={style.github} target="_blank" href="https://github.com/zainlatif">
            <AiFillGithub size="30px" />
          </a>
          <a className={style.linkedin} target="_blank" href="https://www.linkedin.com/in/zainlatif702">
            <AiFillLinkedin size="30px" />
          </a>
          <a className={style.gmail} target="_blank" href="mailto:zainlatif702@gmail.com">
            <BiLogoGmail size="30px" />
          </a>
          <a className={style.facebook} target="_blank" href="https://www.facebook.com/zain.latif.702">
            <BsFacebook size="30px" />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div id="About" className={style.about}>
        <div className={style.container}>
          <h2 className={style.title}>About Me</h2>
          <p>More info about me, what I do, and my current skills in programming and tech.</p>

          <div className={style["about-content"]}>
            <div className={style["about-info"]}>
              <h3>Get to know me!</h3>
              <p>
                I’m a <span>MERN Stack Web Developer</span> and <span>Python ML enthusiast</span> passionate about full-stack and AI-driven web apps.
                View my work in the <span>Projects</span> section and explore my code on <a href="https://github.com/zainlatif" target="_blank">GitHub</a>.
              </p>
            </div>

            <div className={style["my-skill"]}>
              <h3>My Skills</h3>
              <div className={style.skills}>
                {skills.map((skill, index) => (
                  <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
                    <div className={style["skill-name"]}>{skill.name}</div>
                    <div className={style["skill-icon"]}>{skill.icon}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="Projects" className={style.projects}>
        <div className={style.container}>
          <h2 className={style.title}>Projects</h2>
          <p>Personal and client projects with full case studies.</p>
          <div className={style["projects-list"]}>
            {projects.map((project, index) => (
              <div key={`project${index}`} className={style.project}>
                <div className={style["project-image"]}>
                  <img src={project.image} alt="Project" />
                </div>
                <div className={style["project-info"]}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className={style["project-buttons"]}>
                    <IconButton link={project.link} icon={<AiOutlineEye size="25px" />}>Live Demo</IconButton>
                    <IconButton link={project.github} icon={<AiFillGithub size="25px" />}>Github</IconButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="Contact" className={style.contact}>
        <div className={style.container}>
          <h2 className={style.title}>Contact</h2>
          <p>Submit the form below and I’ll get back to you soon.</p>
          <form ref={form} onSubmit={sendEmail} className={clsx({ [style['inactive-form']]: loading })}>
            <InputField name="name" label="Name" placeholder="Enter Your Name" type="text" />
            <InputField name="email" label="Email" placeholder="Enter Your Email" type="email" />
            <TextAreaField name="message" label="Message" placeholder="Enter Your Message" />
            <SubmitButton icon={<RiSendPlaneFill size="20px" />}>Submit</SubmitButton>
            {loading && <div className={style.loader}><Loader /></div>}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style["footer-info"]}>
            <div>
              <h3>Zain Latif</h3>
              <p>MERN Stack Developer and Machine Learning enthusiast building intelligent web apps.</p>
            </div>
            <div className={style.social}>
              <h3>Social</h3>
              <a className={style.git} target="_blank" href='https://github.com/zainlatif702'><AiFillGithub /></a>
              <a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/zainlatif702/'><AiFillLinkedin /></a>
              <a className={style.gmail} target="_blank" href="mailto:zainlatif72@gmail.com"><BiLogoGmail /></a>
              <a className={style.facebook} target="_blank" href='https://www.facebook.com/zain.latif.702'><BsFacebook /></a>
            </div>
          </div>
          <div className={style["copy-right"]}>
            © 2025 Made by <span>Zain Latif</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
