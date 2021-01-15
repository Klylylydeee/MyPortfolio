import { Scrollbars } from 'react-custom-scrollbars';
import '../../styles/class.scss';
import './about.scss';

const About = () => {

  console.log('About Loaded')

  return (
    
    <Scrollbars universal thumbMinSize={100}>
      <div className="about-container">
        <div className="margin-container">
          <div className="content-box flex">
            <div className="content">
              <h1>About Me</h1>
              <span>About Me</span>
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

export default About;
