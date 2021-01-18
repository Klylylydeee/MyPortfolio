// Context API
import { PaneContext } from '../../Contexts/PaneContext.jsx'
import { useContext } from 'react'

import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import '../../styles/class.scss';
import './skills.scss';

const Skills = () => {

  const { setPanelState } = useContext(PaneContext);
  // console.log('Skills Loaded')

  return (

    <Scrollbars universal thumbMinSize={100}>
      <div className="skills-container">
        <div className="margin-container">
          <div className="content-box flex first-element">
            <div className="content ">
              <Zoom>
                <h1>Skills</h1>
                <Fade top cascade>
                  <span>Skills</span>
                </Fade>
              </Zoom>
            </div>
            <button className="button-container" onClick={() => { setPanelState({ isArrowLeft: false }) }}>
              <div className="exit"></div>
            </button>
          </div>
        </div>
      </div>
    </Scrollbars>

  );
}

export default Skills;
