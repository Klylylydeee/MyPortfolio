// Context API
import { PaneContext } from '../../Contexts/PaneContext.jsx'
import { useContext } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import '../../styles/class.scss';
import './projects.scss';

const Projects = () => {

  const { setPanelState } = useContext(PaneContext);
  // console.log('Projects Loaded')

  return (

    <Scrollbars universal thumbMinSize={100}>
      <div className="projects-container">
        <div className="margin-container">
          <div className="content-box flex first-element">
            <div className="content ">
              <Zoom>
                <h1>Projects</h1>
                <Fade top cascade>
                  <span>Projects</span>
                </Fade>
              </Zoom>
            </div>
            <button className="button-container" onClick={() => { setPanelState({ isArrowRight: false }) }}>
              <div className="exit"></div>
            </button>
          </div>
          <div class="container no-select">
            <div class="row">
              <div class="team-items">
                <div class="item">
                  <div className="flex">
                      <img src="https://i.ibb.co/M6b7jcJ/Untitled-1.png" alt="/assets/img/developers/default.png" />
               
                  </div>
                  <div class="inner">
                    <div class="info">
                        <h3>RoomAdvisors</h3>
                        <h4>Lead Developer</h4>
                        <h5>Initially this should have been a group project but to make the long story short, it ended up
                          becoming my personal project. But, I am grateful for that experience which
                          heavily influenced my self to study and love coding more. </h5>
                        <h5>
                          <img src="https://i.ibb.co/mNZ4PZH/angular.png" alt="hey"/>
                          <img src="https://i.ibb.co/whhd0Vb/073-css-3.png" alt="hey"/>
                          <img src="https://i.ibb.co/xjYhnz4/mongodb.png" alt="hey"/>
                          <img src="https://i.ibb.co/8886Jyg/node-Copy.png" alt="hey"/>
                        </h5>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className="flex">
                      <img src="https://i.ibb.co/1rbSDZc/Untitled-1.png" alt="/assets/img/developers/default.png" />
                    
                  </div>
                  <div class="inner">
                    <div class="info">
                        <h3>Message-Mo</h3>
                        <h4>FrontEnd Developer</h4>
                        <h5>I accepted the invitation of my (best) College Professor to join his project for Facebook Hackathon. And though I only ended up
                            contributing a small part of the project, it was indeed time well spent and an experience that I will always cherish. 
                        </h5>
                        <h5 className="special-h5">
                          <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="hey"/>
                        </h5>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className="flex">
                      <img src="https://i.ibb.co/bb96J2x/Untitled-2.png" alt="/assets/img/developers/default.png" />
                 
                  </div>
                  <div class="inner">
                    <div class="info">
                        <h3>AniList Project</h3>
                        <h4>Lead Developer</h4>
                        <h5>Currently, the project is still under development as we are still populating some tables of the database, improving
                          the client side of the website, and cleaning up our spaghetti like backend source code!</h5>
                        <h5>
                          <img src="https://i.ibb.co/XZhvfNQ/051-html-5.png" alt="hey"/>
                          <img src="https://i.ibb.co/whhd0Vb/073-css-3.png" alt="hey"/>
                          <img src="https://i.ibb.co/MPybPvC/mysql.png" alt="hey"/>
                          <img src="https://i.ibb.co/8886Jyg/node-Copy.png" alt="hey"/>
                        </h5>
                    </div>
                  </div>
                </div>
                {/* <div class="item">
                  <div className="flex">
                    <Fade bottom cascade>
                      <img src="https://i.ibb.co/gDdxz5c/IMG-20191130-102239-800.jpg" alt="/assets/img/developers/default.png" />
                    </Fade>
                  </div>
                  <div class="inner">
                    <div class="info">
                      <Fade bottom cascade>
                        <h5>RoomAdvisors</h5>
                        <p>Lead Developer</p>
                      </Fade>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className="flex">
                    <Fade bottom cascade delay={300}>
                      <img src="https://i.ibb.co/gDdxz5c/IMG-20191130-102239-800.jpg" alt="/assets/img/developers/default.png" />
                    </Fade>
                  </div>
                  <div class="inner">
                    <div class="info">
                      <Fade bottom cascade delay={300}>
                        <h5>RoomAdvisors</h5>
                        <p>Lead Developer</p>
                      </Fade>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className="flex">
                    <Fade bottom cascade delay={600}>
                      <img src="https://i.ibb.co/gDdxz5c/IMG-20191130-102239-800.jpg" alt="/assets/img/developers/default.png" />
                    </Fade>
                  </div>
                  <div class="inner">
                    <div class="info">
                      <Fade bottom cascade delay={600}>
                        <h5>RoomAdvisors</h5>
                        <p>Lead Developer</p>
                      </Fade>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scrollbars>

  );
}

export default Projects;
