import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'; 
import '../../styles/class.scss';
import './projects.scss';

const Projects = () => {

  console.log('Projects Loaded')

  return (
    
    <Scrollbars universal thumbMinSize={100}>
      <div className="projects-container">
        <div className="margin-container">
          <div className="content-box flex">
            <div className="content first-element">
              <Zoom>
                <h1>Projects</h1>
                <Fade top cascade>
                  <span>Projects</span>
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

export default Projects;
