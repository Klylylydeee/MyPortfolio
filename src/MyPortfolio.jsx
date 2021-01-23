// Modules
import React, { useEffect, useState, useCallback } from 'react';
// import SlidingPanel from 'react-sliding-side-panel';
// import { PaneContext } from './components/Contexts/PaneContext.jsx'
import ReactTooltip from 'react-tooltip';
import { Scrollbars } from 'react-custom-scrollbars';
// Pages
import About from './components/pages/about/About.jsx'
// import Contact from './components/pages/contact/Contact.jsx'
// import Projects from './components/pages/projects/Projects.jsx'
// import Skills from './components/pages/skills/Skills.jsx'
// Styles
import './components/styles/animationStyles.scss';
import './components/styles/class.scss';
import './myPortfolio.scss'
import video from './assets/Sunrise Over The City - Timelapse 4K - Free 4K Stock Footage -.mkv';

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
      <main>
        {/* 1 */}
        <nav>
          <div className="nav-content">
            <ReactTooltip />
            <p><a href="/#" data-tip="Press W or ArrowUp key" data-place="bottom" data-effect="solid" data-class="tool-tip" onClick={() => { setPanelState({ isArrowUp: true }) }}>About Me</a></p>
            <p><a href="/#" data-tip="Press A or ArrowLeft key" data-place="bottom" data-effect="solid" data-class="tool-tip" onClick={() => { setPanelState({ isArrowLeft: true }) }}>Skills</a></p>
            <p><a href="/#" data-tip="Press D or ArrowRight key" data-place="bottom" data-effect="solid" data-class="tool-tip" onClick={() => { setPanelState({ isArrowRight: true }) }}>Project</a></p>
            <p><a href="/#" data-tip="Press S or ArrowDown key" data-place="bottom" data-effect="solid" data-class="tool-tip" onClick={() => { setPanelState({ isArrowDown: true }) }}>Contact</a></p>
            {/* <p><a href="/#">To navigate press Arrow or ASWD keys</a></p> */}
            <button className="nav-content-btn" data-tip="Feature currently unavailable. Please scroll down." data-place="bottom" data-effect="solid" data-class="tool-tip"></button>
          </div>
          <div className="nav-logo">
            <p className="nav-logo-name">Klyde Guevarra</p>
            <p>Web Developer & UI/UX Designer</p>
          </div>
        </nav>
        {/* 2 */}
        <section className="hero-container">
          <div className="hero-container-text">
            <p className="main-hero-text">Welcome to MyPortfolio</p>
            <p className="ter-hero-text">Scroll down to Navigate</p>
            <p className="sub-hero-text">Let me first explain what I do</p>
            <div className="hero-text-content">
              <p className="hero-text-content-first"><span>What is a <span>Web Developer </span> ?</span><br />Web developers are found working in various types of organizations, including large corporations and governments, small and medium-sized companies, or alone as freelancers. Some web developers work for one organization as a permanent full-time employee, while others may work as independent consultants, or as contractors for an agency or at home personal use. Web developers typically handle both server-side and front-end logic.</p>
              <p className="hero-text-content-second"><span>On the other hand, what is a <span>UI/UX Designer </span> ?</span><br />UI/UX designers are responsible for overall user satisfaction with a product. Their priority is to continually look for ways to improve the product experience, even for bestselling products that have been on the market for years. They may do this by making the product faster, easier to use, or more fun and at its core encompasses the entire user experience. A good design is a good experience!</p>
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
                  An aspiring <span>Web Developer</span> and <span>UI/UX Designer</span> based in Silang, Cavite.
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
        </section>
      </main>
      <About/>
    </Scrollbars>
  );
};

export default MyPortfolio;
