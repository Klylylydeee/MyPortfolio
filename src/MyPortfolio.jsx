// Modules
import React, { useEffect, useState, useCallback } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
// Pages
import About from './components/pages/about/About.jsx'
import Contact from './components/pages/contact/Contact.jsx'
import Projects from './components/pages/projects/Projects.jsx'
import Skills from './components/pages/skills/Skills.jsx'
// Styles
import './components/styles/class.scss';
import './myPortfolio.scss'

const MyPortfolio = () => {
  const [panelState, setPanelState] = useState({
    isArrowUp: false,
    isArrowDown: false, 
    ArrowLeft: false,
    ArrowRight: false, 
  });
  
  // Keydown checker callback
  const handleKeyPress = useCallback((event) => {
    switch(event.key){
      case 'ArrowUp':
        setPanelState({ isArrowUp: true })
        break
      case 'ArrowDown':
        setPanelState({ isArrowDown: true })
        break
      case 'ArrowLeft':
        setPanelState({ isArrowLeft: true })
        break
      case 'ArrowRight':
        setPanelState({ isArrowRight: true })
        break
      case 'Escape':
        setPanelState({ isArrowUp: false, isArrowDown: false, ArrowLeft: false, ArrowRight: false,  })
        break
      default:
        break
    }
  }, [setPanelState])
  // Use callback to avoid infinite loop
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
    <div>
      <button type="button" onClick={() => { setPanelState({ isArrowUp: true }) }}>
        Left
      </button>

      <SlidingPanel type={'top'} isOpen={panelState.isArrowUp} backdropClicked={() => setPanelState({ isArrowUp: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={false} >
        <About></About>
      </SlidingPanel>

      <SlidingPanel type={'bottom'} isOpen={panelState.isArrowDown} backdropClicked={() => setPanelState({ isArrowDown: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={false} >
        <Contact></Contact>
      </SlidingPanel>

      <SlidingPanel type={'right'} isOpen={panelState.isArrowRight} backdropClicked={() => setPanelState({ isArrowRight: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={false} >
        <Projects></Projects>
      </SlidingPanel>

      <SlidingPanel type={'left'} isOpen={panelState.isArrowLeft} backdropClicked={() => setPanelState({ isArrowLeft: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={false} >
        <Skills></Skills>
      </SlidingPanel>
    </div>
  );
};

export default MyPortfolio;
