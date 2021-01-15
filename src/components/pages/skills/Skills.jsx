import { Scrollbars } from 'react-custom-scrollbars';
import '../../styles/class.scss';
import './skills.scss';

const Skills = () => {

  console.log('Skills Loaded')

  return (
    
    <Scrollbars universal thumbMinSize={100}>
      <div className="skills-container">
        <div className="margin-container">
          <div className="content-box flex">
            <div className="content">
              <h1>Skills</h1>
              <span>Skills</span>
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
