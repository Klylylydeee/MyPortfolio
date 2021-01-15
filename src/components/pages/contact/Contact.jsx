import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'; 
import '../../styles/class.scss';
import './contact.scss';

const Contact = () => {

  console.log('Contact Loaded')

  return (
    
    <Scrollbars universal thumbMinSize={100}>
      <div className="contact-container">
        <div className="margin-container">
          <div className="content-box flex">
            <div className="content first-element">
              <Zoom>
                <h1>Contact</h1>
                <Fade top cascade>
                  <span>Contact</span>
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

export default Contact;
