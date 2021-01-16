// Context API
import { PaneContext } from '../../Contexts/PaneContext.jsx'
import { useContext } from 'react'
// Modules
import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// Styles
import '../../styles/class.scss';
import './contact.scss';

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
                <h1>Contact</h1>
                <Fade top cascade>
                  <span>Contact</span>
                </Fade>
              </Zoom>
            </div>
            <button className="button-container" onClick={ () => { setPanelState({isArrowUp: false}) }}>
              <div className="exit"></div>
            </button>
          </div>
          <div className="content-box flex-reverse">
            <div className="message-content-box">
              <h3>If you have any questions, please feel free to drop me a line. If you don't get an answer
              immediately, I might be busy at school or doing some personal projects. I'll get back to you as
                soon as possible as I can. That's a promise.</h3>
            </div>
            <div className="message-form-content-box">
              <div className="form-content">
                <h4>Your Name: </h4>
                <input type="text" />
              </div>
              <div className="form-content">
                <h4>Your Email: </h4>
                <input type="text" />
              </div>
              <div className="form-content">
                <h4>Your Message: </h4>
                <textarea rows="8"></textarea>
              </div>
              <button>Send Mail</button>
            </div>
          </div>
          <div className="contact-content-box">
            <h2>You could also <span className="special-text">Get in touch</span> with me through the following:</h2>
            <div className="flex">
              <div className="address-container">
                <p>image here</p>
                <ul>
                  <li>Address 1</li>
                  <li>Address 1</li>
                  <li>Address 1</li>
                </ul>
              </div>
              <div className="phone-container">
                <p>image here</p>
                <ul>
                  <li>Address 1</li>
                  <li>Address 1</li>
                  <li>Address 1</li>
                </ul>
              </div>
              <div className="email-container">
                <p>image here</p>
                <ul>
                  <li>Address 1</li>
                  <li>Address 1</li>
                  <li>Address 1</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scrollbars>

  );
}

export default Contact;
