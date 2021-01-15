import { Scrollbars } from 'react-custom-scrollbars';
import '../../styles/class.scss';
import './contact.scss';

const Contact = () => {

  console.log('Contact Loaded')

  return (
    
    <Scrollbars universal thumbMinSize={100}>
      <div className="contact-container">
        <div className="margin-container">
          <div className="content-box flex">
            <div className="content">
              <h1>Contacts</h1>
              <span>Contacts</span>
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
