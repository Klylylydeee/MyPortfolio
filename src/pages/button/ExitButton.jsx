// Context API
import { PaneContext } from '../../ContextAPI/PaneContext.jsx';
import { useContext } from 'react';
// Animations
import Fade from 'react-reveal/Fade';
// Stylesheets
import './exitButton.scss';

const ExitButton = () => {

  const { setPanelState } = useContext(PaneContext);

  return (
    <Fade right delay={300}>
      <button onClick={() => { setPanelState({ isArrowUp: false, isArrowDown: false, isArrowRight: false, isArrowLeft: false }) }}>
      </button>
    </Fade>
  );
}
export default ExitButton;
