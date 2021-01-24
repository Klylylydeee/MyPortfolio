// Modules
import React, { useEffect, useState, useCallback } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import { PaneContext } from './ContextAPI/PaneContext.jsx'
import ReactTooltip from 'react-tooltip';
import { Scrollbars } from 'react-custom-scrollbars';
// Pages
import About from './pages/aboutMe/About.jsx';
import Projects from './pages/projects/Projects.jsx';
import Skills from './pages/skills/Skills.jsx';
import Contacts from './pages/contacts/Contacts.jsx';
import ExitButton from './pages/button/ExitButton.jsx';
// Styles
import './styles/animationStyles.scss';
import './styles/class.scss';
import './myPortfolio.scss'
// Assets
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
      // setPanelState({ isArrowDown: false, isArrowUp: false, isArrowLeft: false, isArrowRight: false })
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
            <p><a href="/#" data-tip="Press W or ArrowUp key" data-place="bottom" data-effect="solid" data-class="tool-tip" /*onClick={() => { setPanelState({ isArrowUp: true }) }}*/>About Me</a></p>
            <p><a href="/#" data-tip="Press A or ArrowLeft key" data-place="bottom" data-effect="solid" data-class="tool-tip" /*onClick={() => { setPanelState({ isArrowLeft: true }) }}*/>Skills</a></p>
            <p><a href="/#" data-tip="Press D or ArrowRight key" data-place="bottom" data-effect="solid" data-class="tool-tip" /*onClick={() => { setPanelState({ isArrowRight: true }) }}*/>Projects</a></p>
            <p><a href="/#" data-tip="Press S or ArrowDown key" data-place="bottom" data-effect="solid" data-class="tool-tip" /*onClick={() => { setPanelState({ isArrowDown: true }) }}*/>Contact</a></p>
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
            <p className="ter-hero-text">If you want to know about me, scroll down.</p>
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
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </section>
        <SlidingPanel type={'top'} isOpen={panelState.isArrowUp} backdropClicked={() => setPanelState({ isArrowUp: false })} size={100}
          panelClassName="" panelContainerClassName="" noBackdrop={true} >
          <PaneContext.Provider value={{ panelState, setPanelState }}>
            <Scrollbars>
              <ReactTooltip></ReactTooltip>
              <ExitButton></ExitButton>
              <About />
            </Scrollbars>
          </PaneContext.Provider>
        </SlidingPanel>
        <SlidingPanel type={'bottom'} isOpen={panelState.isArrowDown} backdropClicked={() => setPanelState({ isArrowDown: false })} size={100}
          panelClassName="" panelContainerClassName="" noBackdrop={true} >
          <PaneContext.Provider value={{ panelState, setPanelState }}>
            <Scrollbars>
              <ReactTooltip></ReactTooltip>
              <ExitButton></ExitButton>
              <Contacts />
            </Scrollbars>
          </PaneContext.Provider>
        </SlidingPanel>
        <SlidingPanel type={'right'} isOpen={panelState.isArrowRight} backdropClicked={() => setPanelState({ isArrowRight: false })} size={100}
          panelClassName="" panelContainerClassName="" noBackdrop={true} >
          <PaneContext.Provider value={{ panelState, setPanelState }}>
            <Scrollbars>
              <ReactTooltip></ReactTooltip>
              <ExitButton></ExitButton>
              <Projects />
            </Scrollbars>
          </PaneContext.Provider>
        </SlidingPanel>
        <SlidingPanel type={'left'} isOpen={panelState.isArrowLeft} backdropClicked={() => setPanelState({ isArrowLeft: false })} size={100}
          panelClassName="" panelContainerClassName="" noBackdrop={true} >
          <PaneContext.Provider value={{ panelState, setPanelState }}>
            <Scrollbars>
              <ReactTooltip></ReactTooltip>
              <ExitButton></ExitButton>
              <Skills />
            </Scrollbars>
          </PaneContext.Provider>
        </SlidingPanel>
      </main>
    </Scrollbars>
  );
};

export default MyPortfolio;
