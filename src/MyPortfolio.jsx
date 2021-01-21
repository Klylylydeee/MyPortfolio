// Modules
import React, { useEffect, useState, useCallback } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import { PaneContext } from './components/Contexts/PaneContext.jsx'
// Pages
import About from './components/pages/about/About.jsx'
import Contact from './components/pages/contact/Contact.jsx'
import Projects from './components/pages/projects/Projects.jsx'
import Skills from './components/pages/skills/Skills.jsx'
// Styles
import './components/styles/animationStyles.scss';
import './components/styles/class.scss';
import './myPortfolio.scss'

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
      setPanelState({ isArrowDown: true })
    } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
      setPanelState({ isArrowUp: true })
    } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
      setPanelState({ isArrowLeft: true })
    } else if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
      setPanelState({ isArrowRight: true })
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


    <main>
      {/* 1 */}
      <nav>
        <div className="nav-content">
          <p><a href="/#" onClick={() => { setPanelState({ isArrowUp: true }) }}>About Me</a></p>
          <p><a href="/#" onClick={() => { setPanelState({ isArrowLeft: true }) }}>Skills</a></p>
          <p><a href="/#" onClick={() => { setPanelState({ isArrowRight: true }) }}>Project</a></p>
          <p><a href="/#" onClick={() => { setPanelState({ isArrowDown: true }) }}>Contact</a></p>
          <button className="nav-content-btn"></button>
        </div>
        <div className="nav-logo">
          <p className="nav-logo-name">Klyde Guevarra</p>
          <p>Web Developer & UI/UX Designer</p>
        </div>
      </nav>
      {/* 2 */}
      <section className="hero-container">
        You could also navigate by pressing ASWD or Arrow Keys
      </section>
      {/* 3 */}
      {/* Sliding Panes */}
      <SlidingPanel type={'top'} isOpen={panelState.isArrowUp} backdropClicked={() => setPanelState({ isArrowUp: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={true} >
        <PaneContext.Provider value={{ panelState, setPanelState }}>
          <About />
        </PaneContext.Provider>
      </SlidingPanel>

      <SlidingPanel type={'bottom'} isOpen={panelState.isArrowDown} backdropClicked={() => setPanelState({ isArrowDown: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={true} >
        <PaneContext.Provider value={{ panelState, setPanelState }}>
          <Contact />
        </PaneContext.Provider>
      </SlidingPanel>

      <SlidingPanel type={'right'} isOpen={panelState.isArrowRight} backdropClicked={() => setPanelState({ isArrowRight: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={true} >
        <PaneContext.Provider value={{ panelState, setPanelState }}>
          <Projects />
        </PaneContext.Provider>
      </SlidingPanel>

      <SlidingPanel type={'left'} isOpen={panelState.isArrowLeft} backdropClicked={() => setPanelState({ isArrowLeft: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={true} >
        <PaneContext.Provider value={{ panelState, setPanelState }}>
          <Skills />
        </PaneContext.Provider>
      </SlidingPanel>
    </main>
  );
};

export default MyPortfolio;
