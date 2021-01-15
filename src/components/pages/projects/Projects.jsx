import { Scrollbars } from 'react-custom-scrollbars';
import '../../styles/class.scss';
import './projects.scss';

const Projects = () => {

  console.log('Projects Loaded')

  return (
    
    <Scrollbars universal thumbMinSize={100}>
      <div className="projects-container">
        <div className="margin-container">
          <div className="content-box flex">
            <div className="content">
              <h1>Projects</h1>
              <span>Projects</span>
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
