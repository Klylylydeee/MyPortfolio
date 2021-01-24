// Modules
import React, { useEffect, useState, useCallback } from 'react';
// import SlidingPanel from 'react-sliding-side-panel';
// import { PaneContext } from './components/Contexts/PaneContext.jsx'
import ReactTooltip from 'react-tooltip';
import { Scrollbars } from 'react-custom-scrollbars';
// Pages
// import About from './components/pages/about/About.jsx'
// import Contact from './components/pages/contact/Contact.jsx'
// import Projects from './components/pages/projects/Projects.jsx'
// import Skills from './components/pages/skills/Skills.jsx'
// Styles
import './components/styles/animationStyles.scss';
import './components/styles/class.scss';
import './myPortfolio.scss'
import video from './assets/Sunrise Over The City - Timelapse 4K - Free 4K Stock Footage -.mkv';
import video2 from './assets/My Switzerland(1).mp4';

const MyPortfolio = () => {
  // State Hooks
  const [panelState, setPanelState] = useState({
    isArrowUp: false,
    isArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  });
  // Keydown checker, memoize (basically next time its loaded it is much faster)
  const handleKeyPress = useCallback((event) => {
    console.log(event.key)
    if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
      setPanelState({ isArrowDown: true, isArrowUp: false, isArrowLeft: false, isArrowRight: false })
    } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
      setPanelState({ isArrowDown: false, isArrowUp: true, isArrowLeft: false, isArrowRight: false })
    } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
      setPanelState({ isArrowDown: false, isArrowUp: false, isArrowLeft: true, isArrowRight: false })
    } else if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
      setPanelState({ isArrowDown: false, isArrowUp: false, isArrowLeft: false, isArrowRight: true })
    } else {
      setPanelState({ isArrowDown: false, isArrowUp: false, isArrowLeft: false, isArrowRight: false })
    }
  }, [setPanelState])
  // To avoid re-render of previous states that causes infinite loops
  useEffect(() => {
    if (panelState) {
      window.addEventListener("keydown", handleKeyPress)
    } else {
      window.removeEventListener("keydown", handleKeyPress)
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [panelState, handleKeyPress])

  return (
    <Scrollbars universal thumbMinSize={100} style={{ minHeight: '100vh' }}>
      <ReactTooltip></ReactTooltip>
      <main>
        {/* 1 */}
        <nav>
          <div className="nav-content">
            <p><a href="/#" data-tip="Press W or ArrowUp key" data-place="bottom" data-effect="solid" data-class="tool-tip" onClick={() => { setPanelState({ isArrowUp: true }) }}>About Me</a></p>
            <p><a href="/#" data-tip="Press A or ArrowLeft key" data-place="bottom" data-effect="solid" data-class="tool-tip" onClick={() => { setPanelState({ isArrowLeft: true }) }}>Skills</a></p>
            <p><a href="/#" data-tip="Press D or ArrowRight key" data-place="bottom" data-effect="solid" data-class="tool-tip" onClick={() => { setPanelState({ isArrowRight: true }) }}>Projects</a></p>
            <p><a href="/#" data-tip="Press S or ArrowDown key" data-place="bottom" data-effect="solid" data-class="tool-tip" onClick={() => { setPanelState({ isArrowDown: true }) }}>Contact</a></p>
            {/* <p><a href="/#">To navigate press Arrow or ASWD keys</a></p> */}
            <button className="nav-content-btn" data-tip="Feature currently unavailable. Please scroll down." data-place="bottom" data-effect="solid" data-class="tool-tip"></button>
          </div>
          <div className="nav-logo">
            <p className="nav-logo-name">Klyde Guevarra</p>
            <p>Web Developer & UI Designer</p>
          </div>
        </nav>
        {/* 2 */}
        <section className="hero-container">
          <div className="hero-container-text">
            <p className="main-hero-text">Welcome to <span>MyPortfolio</span></p>
            <p className="ter-hero-text">Scroll down to Navigate</p>
            <p className="sub-hero-text">Let me first explain what I do</p>
            <div className="hero-text-content">
              <p className="hero-text-content-first"><span>What is a <span>Web Developer </span> ?</span><br />Web developers are found working in various types of organizations, including large corporations and governments, small and medium-sized companies, or alone as freelancers. Some web developers work for one organization as a permanent full-time employee, while others may work as independent consultants, or as contractors for an agency or at home personal use. Web developers typically handle both server-side and front-end logic.</p>
              <p className="hero-text-content-second"><span>On the other hand, what is a <span>UI Designer </span> ?</span><br />UI designers are responsible for overall user satisfaction with a product. Their priority is to continually look for ways to improve the product experience, even for bestselling products that have been on the market for years. They may do this by making the product faster, easier to use, or more fun and at its core encompasses the entire user experience. A good design is a good experience!</p>
            </div>
          </div>
          {/* Source: https://www.youtube.com/watch?v=i4Dwdo1Q1ds */}
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
          </video>
        </section>
        {/* 3 */}
        <section className="mobile-view-container">
          {/* 3.1 */}
          <div className="about-container">
            {/* 3.1.1 */}
            <div className="about-container-header">
              <div className="about-container-header-text">
                <h1>About Me</h1>
                <span>About Me</span>
              </div>
            </div>
            {/* 3.1.2 */}
            <div className="introduction-content">
              <div className="introduction-content-img">
                <img src="https://i.ibb.co/gDdxz5c/IMG-20191130-102239-800.jpg" alt="alt" />
              </div>
              <div className="introduction-content-text">
                <p>
                  Hi, I am <span>Klyde Guevarra</span>.
                </p>
                <p>
                  An aspiring <span>Web Developer</span> and <span>UI Designer</span> based in Silang, Cavite.
              </p>
                <p>
                  As of now, I am still an undergraduate third year student enrolled in the degree of
                  Bachelor of Science in Information Technology Major in Web Developent at the Adventist
                  University of the Philippines. I do enjoy spending my time learning and improving my technical skills
                  as well as building things that would make a difference for you and me.
              </p>
                <p>
                  I am an optimistic, adaptable, and reliable person that is motivated with a goal-oriented mindset with
                  the tasks given to me. Currently, I have no work experience for neither an individual or a company but
                  given the chance I hope you'll be delighted to work with me.
              </p>
                <p>
                  Hoping that we can get along well and nice meeting you!
              </p>
              </div>
            </div>
            {/* 3.1.3 */}
            <div className="quote-content">
              <p className="quote-content-text">"If you have a dream, chase it no matter what it takes!"</p>
              <p className="quote-content-signature">James Harden</p>
            </div>
            {/* 3.1.4 */}
            <div className="background-content">
              <div className="background-content-working">
                <p className="working-header">Working Experience</p>
                <div className="working-container">
                  <ul>
                    <li>Data Encoder</li>
                    <li>Private Company</li>
                    <li>May 2020 - November 2020</li>
                    <li>I am currently a student studying under the program of Bachelor of Science in Information
                    Technology in Adventist University of the Philippines. I am currently a student studying under
                    the program of Bachelor of Science in Information Technology in Adventist University of the
                      Philippines.</li>
                  </ul>
                </div>
              </div>
              <div className="background-content-education">
                <p className="education-header">Educational Background</p>
                <div className="education-container">
                  <ul>
                    <li>Bachelor of Science Major in Information Technology</li>
                    <li>Adventist University of the Philippines</li>
                    <li>2018 - Current</li>
                    <li>I am currently a student studying under the program of Bachelor of Science in Information
                    Technology in Adventist University of the Philippines. I am currently a student studying under
                    the program of Bachelor of Science in Information Technology in Adventist University of the
                      Philippines.</li>
                  </ul>
                  <ul>
                    <li>Senior High School</li>
                    <li>Adventist University of the Philippines</li>
                    <li>2016 - 2018</li>
                    <li>I am currently a student studying under the program of Bachelor of Science in Information
                    Technology in Adventist University of the Philippines. I am currently a student studying under
                    the program of Bachelor of Science in Information Technology in Adventist University of the
                      Philippines.</li>
                  </ul>
                  <ul>
                    <li>Junior High School</li>
                    <li>Adventist University of the Philippines</li>
                    <li>2012 - 2016</li>
                    <li>I am currently a student studying under the program of Bachelor of Science in Information
                    Technology in Adventist University of the Philippines. I am currently a student studying under
                    the program of Bachelor of Science in Information Technology in Adventist University of the
                      Philippines.</li>
                  </ul>
                  <ul>
                    <li>Elementary</li>
                    <li>Adventist University of the Philippines</li>
                    <li>2006 - 2012</li>
                    <li>I am currently a student studying under the program of Bachelor of Science in Information
                    Technology in Adventist University of the Philippines. I am currently a student studying under
                    the program of Bachelor of Science in Information Technology in Adventist University of the
                      Philippines.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 3.2 Skills*/}
          <div className="skills-container">
            {/* 3.2.1 */}
            <div className="skills-container-header">
              <div className="skills-container-header-text">
                <h1>Skills</h1>
                <span>Skills</span>
              </div>
            </div>
            {/* 3.2.2 */}
            <div className="different-skills-container">
              <ul>Programming Languages:
                <li><img src="https://i.ibb.co/dPFf0qn/58480979cef1014c0b5e4901.png" alt="a" />Java</li>
                <li><img src="https://i.ibb.co/Vp2d9v0/s-Ue4d-G-L-400x400.jpg" alt="s" />Javascript</li>
                <li><img src="https://i.ibb.co/LNvztYF/ST6u-COwkmqg-YV4-IM399y-Jmi-Ne-Lm-Qd-ICbo-Evl3-SRh-GPQDTr2-Xo-Sum4-Klip-JIi1k-Rj-IHLQ8-Xyce-FQh-JMHg.png" alt="S" />Python</li>
              </ul>
              <ul className="hide-skills">Stylesheets:
                <li><img src="https://i.ibb.co/whhd0Vb/073-css-3.png" alt="alt" /> Sass</li>
                <li><img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="hey" />Bootstrap</li>
              </ul>
              <ul>Javascript Library/Frameworks:
                <li><img src="https://i.ibb.co/mNZ4PZH/angular.png" alt="alt" /> Angular</li>
                <li><img src="https://i.ibb.co/Bs8q24z/1280px-React-icon-svg.png" alt="1" />ReactJS</li>
                <li className="hide-skills"><img src="https://i.ibb.co/tHvNzTV/npmlogo.png" alt="npmlogo" />Node Package Manager</li>
              </ul>
              <ul>Backend Technologies:
                <li><img src="https://i.ibb.co/8886Jyg/node-Copy.png" alt="alt" /> NodeJS</li>
                <li><img src="https://i.ibb.co/3FCKxb7/136-1363736-express-js-icon-png-transparent-png.png" alt="136" />ExpressJS</li>
              </ul>
              <ul>Version Control:
                <li><img src="https://i.ibb.co/QPSVYk6/Git-Icon-1788-C.png" alt="Git-Icon-1788-C" />Git</li>
              </ul>
              <ul className="hide-skills">Git Repositories:
                <li><img src="https://i.ibb.co/RzWPt12/039-github-2.png" alt="039-github-2" />Github</li>
                <li><img src="https://i.ibb.co/c3f04ps/476-4763953-mobile-cloud-and-heroku-100-pure-java-heroku.png" alt="476" />Heroku</li>
                <li><img src="https://i.ibb.co/7QYGN7v/logomark.png" alt="476" />Netlify</li>
              </ul>
              <ul>Database:
                <li><img src="https://i.ibb.co/MPybPvC/mysql.png" alt="alt" /> Mysql</li>
                <li><img src="https://i.ibb.co/xjYhnz4/mongodb.png" alt="alt" /> MongoDB</li>
              </ul>
              <ul className="hide-skills">Prototyping/Wireframe:
                <li><img src="https://i.ibb.co/fr1mKX0/220px-Figma-logo-svg.png" alt="alt" />Figma</li>
                <li><img src="https://svgshare.com/i/TQB.svg" alt="alt" />Adobe Photoshop</li>
                <li><img src="https://i.ibb.co/ZfyHnXm/1051px-Adobe-XD-CC-icon-svg.png" alt="alt" />Adobe XD</li>
              </ul>
              <ul className="hide-skills">Routing Protocol Configurations:
                <li><img src="https://i.ibb.co/6mZWnBN/Network-Protocol.png" alt="Network-Protocol" />RIPv2</li>
                <li><img src="https://i.ibb.co/6mZWnBN/Network-Protocol.png" alt="Network-Protocol" />OSPF</li>
                <li><img src="https://i.ibb.co/6mZWnBN/Network-Protocol.png" alt="Network-Protocol" />EIGRP</li>
              </ul>
            </div>
            {/* 3.2.3*/}
            <div className="services-container">
              <p className="services-header">Services</p>
              <div className="services-container-flex">
                <div className="services-container-content">
                  <img src="https://i.ibb.co/WWwP21Y/website-development.png" alt="alt" />
                  <p className="services-header">Web Development</p>
                  <p>Web Prototype Designs allows developers and users alike to get grasp of their desired visuals.
                  Through this service, I offer a feature-filled design that will have a memorable effect to
                    everyone.</p>
                  <div className="services-container-content-img">
                    <img src="https://svgshare.com/i/TNJ.svg" alt="alt" data-tip="FrontEnd" data-class="tool-tip" />
                    <img src="https://i.ibb.co/wp5wzvY/maintenance.png" alt="alt" data-tip="BackEnd" data-class="tool-tip" />
                    <img src="https://svgshare.com/i/TP1.svg" alt="alt" data-tip="Database" data-class="tool-tip" />
                  </div>
                </div>
                <div className="services-container-content">
                  <img src="https://i.ibb.co/5MqJ0XR/website-design.png" alt="alt" />
                  <p className="services-header">Web Prototype Design </p>
                  <p>Web Prototype Designs allows developers and users alike to get grasp of their desired visuals.
                  Through this service, I offer a feature-filled design that will have a memorable effect to
                    everyone.</p>
                  <div className="services-container-content-img">
                    <img src="https://svgshare.com/i/TQB.svg" alt="alt" data-tip="Adobe Photoshop 2021" data-class="tool-tip" />
                    <img src="https://i.ibb.co/ZfyHnXm/1051px-Adobe-XD-CC-icon-svg.png" alt="alt" data-tip="Adobe XD" data-class="tool-tip" />
                    <img src="https://i.ibb.co/fr1mKX0/220px-Figma-logo-svg.png" alt="alt" data-tip="Figma" data-class="tool-tip" />
                  </div>
                </div>
              </div>
            </div>
            {/* Source: https://www.youtube.com/watch?v=o77ctsQjRz8 */}
            <video autoPlay muted loop id="myVideo">
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          {/* 3.3 Projects*/}
          <div className="projects-container">
            {/* 3.3.1 */}
            <div className="projects-container-header">
              <div className="projects-container-header-text">
                <h1>Projects</h1>
                <span>Projects</span>
              </div>
            </div>

            <div className="container no-select">
                <div className="team-items">
                  <div className="item">
                    <div className="flex">
                      <img src="https://i.ibb.co/M6b7jcJ/Untitled-1.png" alt="/assets/img/developers/default.png" />

                    </div>
                    <div className="inner">
                      <div className="info">
                        <h3><a href="http://roomadvisor.herokuapp.com/">RoomsAdvisors</a></h3>
                        <h4>Lead Developer</h4>
                        <h5>
                          Initially a group project requirement for Advance Web Development but turned into a
                          personal project, nevertheless it helped me to focus and learn different technologies for 
                          both frontend and backend development. Though I consider it as a failure I plan to recreate this in
                          the near future.
                        </h5>
                        <h5 className="special-h5">
                          <div className="special-h5-divider">
                            <img src="https://i.ibb.co/mNZ4PZH/angular.png" alt="hey" />
                            <img src="https://i.ibb.co/whhd0Vb/073-css-3.png" alt="hey" />
                            <img src="https://i.ibb.co/xjYhnz4/mongodb.png" alt="hey" />
                            <img src="https://i.ibb.co/8886Jyg/node-Copy.png" alt="hey" />
                          </div>
                          <div className="special-h5-divider">
                            <a href="http://roomadvisor.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                              <img src="https://i.ibb.co/c3f04ps/476-4763953-mobile-cloud-and-heroku-100-pure-java-heroku.png" alt="476" data-tip="Heroku Deployment" data-class="tool-tip" />
                            </a>
                            <a href="https://github.com/Klylylydeee/angular-roomadvisor" target="_blank" rel="noopener noreferrer">
                              <img src="https://i.ibb.co/xqVgrzc/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png" alt="/" data-tip="Github Repository" data-class="tool-tip" />
                            </a>
                          </div>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="flex">
                      <img src="https://i.ibb.co/1rbSDZc/Untitled-1.png" alt="/assets/img/developers/default.png" />

                    </div>
                    <div className="inner">
                      <div className="info">
                        <h3>Message-Mo</h3>
                        <h4>FrontEnd Developer</h4>
                        <h5>
                          A project for Facebook Hackathon for the messaging category initiated by our Professor. Luckily I was invited
                          to join and contribute to the project and though I only contributed an insignificant part of the project I value the experience
                          and advices I learned throughout the duration of the project.
                        </h5>
                        <h5 className="special-h5">
                          <div className="special-h5-divider">
                            <img src="https://i.ibb.co/Bs8q24z/1280px-React-icon-svg.png" alt="1" />
                            <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="hey" />
                          </div>
                          <div className="special-h5-divider">
                            <a href="https://github.com/joshuiaclan/messaging-app-2020">
                          <img src="https://i.ibb.co/xqVgrzc/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png" alt="/" data-tip="Github Repository" data-class="tool-tip" />
                            </a>
                          </div>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="flex">
                      <img src="https://i.ibb.co/bb96J2x/Untitled-2.png" alt="/assets/img/developers/default.png" />
                    </div>
                    <div className="inner">
                      <div className="info">
                        <h3><a href="https://anilist-project.netlify.app/">AniList Project</a></h3>
                        <h4>Personal Project</h4>
                        <h5>
                          Similar to Myanimelist.net, this web application is a database of my anime collection to easily
                          navigate, get recommendations and ask for a copy. The main purpose of this project is to relearn
                          the fundamentals of web development and improve my knowledge and coding skills.
                        </h5>
                        <h5 className="special-h5">
                          <div className="special-h5-divider">
                            <img src="https://i.ibb.co/XZhvfNQ/051-html-5.png" alt="hey" />
                            <img src="https://i.ibb.co/MPybPvC/mysql.png" alt="hey" />
                            <img src="https://i.ibb.co/8886Jyg/node-Copy.png" alt="hey" />
                          </div>
                          <div className="special-h5-divider">
                            <a href="https://anilist-project.netlify.app/" target="_blank" rel="noopener noreferrer">
                              <img src="https://i.ibb.co/7QYGN7v/logomark.png" alt="476" data-tip="Netlify Deployment" data-class="tool-tip" />
                            </a>
                            <a href="https://github.com/Klylylydeee/anilist-project" target="_blank" rel="noopener noreferrer">
                              <img src="https://i.ibb.co/xqVgrzc/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png" alt="/" data-tip="Github Repository" data-class="tool-tip" />
                            </a>
                          </div>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          {/* 3.4 Contact*/}
          <div className="contacts-container">
            {/* 3.4.1 */}
            <div className="contacts-container-header">
              <div className="contacts-container-header-text">
                <h1>Contacts</h1>
                <span>Contacts</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Scrollbars>
  );
};

export default MyPortfolio;
