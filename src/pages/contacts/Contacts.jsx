// Animations
import Fade from 'react-reveal/Fade';
// Stylesheets
import './contacts.scss';

const Contacts = () => {

  return (
    <div className="contacts-container">
      <Fade top left delay={200}>
        <div className="contacts-container-header">
          <div className="contacts-container-header-text">
            <h1>Contacts</h1>
            <span>Contacts</span>
          </div>
        </div>
      </Fade>
    </div>
  );
}
export default Contacts;
