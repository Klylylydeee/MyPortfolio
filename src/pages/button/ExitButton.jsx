// Context API
import { PaneContext } from '../../ContextAPI/PaneContext.jsx';
import { useContext } from 'react';
import './exitButton.scss';


const ExitButton = () => {

  const { setPanelState } = useContext(PaneContext);

  return (
    <button onClick={() => { setPanelState({ isArrowUp: false, isArrowDown: false, isArrowRight: false, isArrowLeft: false }) } }>
      
    </button>
  );
}

export default ExitButton;
