import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'; 
import '../../styles/class.scss';
import './skills.scss';

const Skills = () => {

  console.log('Skills Loaded')

  return (
    
    <Scrollbars universal thumbMinSize={100}>
      <div className="skills-container">
        <div className="margin-container">
          <div className="content-box flex">
            <div className="content first-element">
              <Zoom>
                <h1>Skills</h1>
                <Fade top cascade>
                  <span>Skills</span>
                </Fade>
              </Zoom>
            </div>
            <div className="content">
              {/* exit */}
            </div>
          </div>
        </div>
      </div>
    </Scrollbars>
  
  );
}

export default Skills;
