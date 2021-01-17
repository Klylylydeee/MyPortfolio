// Context API
import { PaneContext } from '../../Contexts/PaneContext.jsx'
import { useContext } from 'react'
// Modules
import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
// Styles
import '../../styles/class.scss';
import './contact.scss';
//Local Image
import icloud from '../../../assets/049-icloud.png';
import gmail from '../../../assets/063-gmail.png';
import microsoft from '../../../assets/042-microsoft.png';

const Contact = () => {

  const { setPanelState } = useContext(PaneContext);
  console.log('Contact Loaded')

  return (

    <Scrollbars universal thumbMinSize={100}>
      <div className="contact-container">
        <div className="margin-container">
          <div className="content-box flex first-element">
            <div className="content ">
              <Zoom>
                <h1>About Me</h1>
                <Fade top cascade>
                  <span>About Me</span>
                </Fade>
              </Zoom>
            </div>
            <button className="button-container" onClick={() => { setPanelState({ isArrowDown: false }) }}>
              <div className="exit"></div>
            </button>
          </div>
          <div className="contact-content-box">
            <Zoom>
              <h2><span className="special-text">Get in touch</span> with me through the following:</h2>
            </Zoom>
            <div className="contact-flex-container flex-reverse">
              <div className="address-container">
                <Zoom cascade>
                  <p>Social Medias</p>
                  <ul>
                    <li >
                      <img src={icloud} alt="" />
                      <a href="mailto:kguevarra13@icloud.com?subject = Feedback&body = Message">
                        kguevarra13@icloud.com
                      </a>
                    </li>
                    <li>
                      <img src={gmail} alt="" />
                      <a href="mailto:klylylydeee@gmail.com?subject = Feedback&body = Message">
                        klylylydeee@gmail.com
                      </a>
                    </li>
                    <li>
                      <img src={microsoft} alt="" />
                      <a href="mailto:2031780@aup.edu.ph?subject = Feedback&body = Message">
                        2031780@aup.edu.ph
                      </a>
                    </li>
                  </ul>
                </Zoom>
              </div>
              <div className="phone-container">
                <Zoom cascade>
                  <p>Contact Number</p>
                  <ul>
                    <li >
                      <img src={icloud} alt="" />
                      <a href="mailto:kguevarra13@icloud.com?subject = Feedback&body = Message">
                        kguevarra13@icloud.com
                      </a>
                    </li>
                    <li>
                      <img src={gmail} alt="" />
                      <a href="mailto:klylylydeee@gmail.com?subject = Feedback&body = Message">
                        klylylydeee@gmail.com
                      </a>
                    </li>
                    <li>
                      <img src={microsoft} alt="" />
                      <a href="mailto:2031780@aup.edu.ph?subject = Feedback&body = Message">
                        2031780@aup.edu.ph
                      </a>
                    </li>
                  </ul>
                </Zoom>
              </div>
              <div className="email-container">
                <Zoom cascade>
                  <p>Email Address</p>
                  <ul>
                    <li >
                      <img src={icloud} alt="" />
                      <a href="mailto:kguevarra13@icloud.com?subject = Feedback&body = Message">
                        kguevarra13@icloud.com
                      </a>
                    </li>
                    <li>
                      <img src={gmail} alt="" />
                      <a href="mailto:klylylydeee@gmail.com?subject = Feedback&body = Message">
                        klylylydeee@gmail.com
                      </a>
                    </li>
                    <li>
                      <img src={microsoft} alt="" />
                      <a href="mailto:2031780@aup.edu.ph?subject = Feedback&body = Message">
                        2031780@aup.edu.ph
                      </a>
                    </li>
                  </ul>
                </Zoom>
              </div>
            </div>
          </div>
          <div className="content-box flex-reverse">
            <div className="message-content-box">
              <Fade left delay={500}>
                <h3>If you have any questions, please feel free to communicate with me by dropping a line or so. If you don't get an answer
                immediately, I might be busy at school or doing some personal projects. I'll get back to you as
                  soon as possible as I can. <span className="special-text">That's a promise!</span></h3>
              </Fade>
            </div>
            <div className="message-form-content-box">
              <Roll right cascade>
                <div className="text-divisor">
                  <textarea rows="8" placeholder="Message"></textarea>
                </div>
                <div className="divisor flex-reverse">
                  <div className="form-divisor">
                    <div className="form-content">
                      <input type="text" placeholder="Full Name" />
                      <input type="text" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="button-divisor">
                    <button>Send Mail</button>
                  </div>
                </div>
              </Roll>
            </div>
          </div>
          {/* <div className="content-box">
            <button onClick={() => { setPanelState({ isArrowDown: false }) }}>EXIT</button>
          </div> */}
        </div>
      </div>
    </Scrollbars>

  );
}

export default Contact;
