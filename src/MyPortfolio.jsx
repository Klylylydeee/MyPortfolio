import React, { useEffect, useState, useCallback } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import Navigation from './components/containers/navigation/Navigation'
import './components/styles/class.scss';
import './myPortfolio.scss'

const MyPortfolio = () => {
  const [openPanel, setOpenPanel] = useState({
    isArrowUp: false,
    isArrowDown: false, 
    ArrowLeft: false,
    ArrowRight: false, 
  });

  // Keydown checker callback
  const handleKeyPress = useCallback((event) => {
    switch(event.key){
      case 'ArrowUp':
        setOpenPanel({ isArrowUp: true })
        break
      case 'ArrowDown':
        setOpenPanel({ isArrowDown: true })
        break
      case 'ArrowLeft':
        setOpenPanel({ isArrowLeft: true })
        break
      case 'ArrowRight':
        setOpenPanel({ isArrowRight: true })
        break
      case 'Escape':
        setOpenPanel({ isArrowUp: false, isArrowDown: false, ArrowLeft: false, ArrowRight: false,  })
        break
      default:
        break
    }
  }, [setOpenPanel])
  
  // Use callback to avoid infinite loop
  useEffect(() => {
    if (openPanel) {
        window.addEventListener("keydown", handleKeyPress)
    } else {
        window.removeEventListener("keydown", handleKeyPress)
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    } 
  }, [openPanel, handleKeyPress])

  return (
    <div>
      {/* <button type="button" onClick={() => { setOpenPanel({isArrowUp: true}) }}>
        Left
      </button> */}

      <SlidingPanel type={'top'} isOpen={openPanel.isArrowUp} backdropClicked={() => setOpenPanel({ isArrowUp: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={false} >
        <Navigation></Navigation>
      </SlidingPanel>
      <SlidingPanel type={'bottom'} isOpen={openPanel.isArrowDown} backdropClicked={() => setOpenPanel({ isArrowDown: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={false} >
        <Navigation></Navigation>
      </SlidingPanel>

      <SlidingPanel type={'right'} isOpen={openPanel.isArrowRight} backdropClicked={() => setOpenPanel({ isArrowRight: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={false} >
        <Navigation></Navigation>
      </SlidingPanel>
      <SlidingPanel type={'left'} isOpen={openPanel.isArrowLeft} backdropClicked={() => setOpenPanel({ isArrowLeft: false })} size={100}
        panelClassName="" panelContainerClassName="" noBackdrop={false} >
        <Navigation></Navigation>
      </SlidingPanel>
    </div>
  );
};

export default MyPortfolio;
