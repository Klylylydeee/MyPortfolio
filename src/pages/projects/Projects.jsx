// Context API
// import { PaneContext } from '../../ContextAPI/PaneContext.jsx';
// import { useContext } from 'react';
import './projects.scss';


const Projects = () => {

  // const { setPanelState } = useContext(PaneContext);
  // console.log('About Loaded')

  return (
    <div className="projects-container">
      {/* 3.3.1 */}
      <div className="projects-container-header">
        <div className="projects-container-header-text">
          <h1>Projects</h1>
          <span>Projects</span>
        </div>
      </div>
      <div className="container no-select">
        <div className="team-items">
          <div className="item">
            <div className="flex">
              <img src="https://i.ibb.co/M6b7jcJ/Untitled-1.png" alt="/assets/img/developers/default.png" />
            </div>
            <div className="inner">
              <div className="info">
                <h3><a href="http://roomadvisor.herokuapp.com/">RoomsAdvisors</a></h3>
                <h4>Lead Developer</h4>
                <h5>
                  Initially a group project requirement for Advance Web Development but turned into a
                  personal project, nevertheless it helped me to focus and learn different technologies for
                  both frontend and backend development. Though I consider it as a failure I plan to recreate this in
                  the near future.
                  </h5>
                <h5 className="special-h5">
                  <div className="special-h5-divider">
                    <img src="https://i.ibb.co/mNZ4PZH/angular.png" alt="hey" />
                    <img src="https://i.ibb.co/whhd0Vb/073-css-3.png" alt="hey" />
                    <img src="https://i.ibb.co/xjYhnz4/mongodb.png" alt="hey" />
                    <img src="https://i.ibb.co/8886Jyg/node-Copy.png" alt="hey" />
                  </div>
                  <div className="special-h5-divider">
                    <a href="http://roomadvisor.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <img src="https://i.ibb.co/c3f04ps/476-4763953-mobile-cloud-and-heroku-100-pure-java-heroku.png" alt="476" data-tip="Heroku Deployment" data-class="tool-tip" />
                    </a>
                    <a href="https://github.com/Klylylydeee/angular-roomadvisor" target="_blank" rel="noopener noreferrer">
                      <img src="https://i.ibb.co/xqVgrzc/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png" alt="/" data-tip="Github Repository" data-class="tool-tip" />
                    </a>
                  </div>
                </h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <img src="https://i.ibb.co/1rbSDZc/Untitled-1.png" alt="/assets/img/developers/default.png" />
            </div>
            <div className="inner">
              <div className="info">
                <h3>Message-Mo</h3>
                <h4>FrontEnd Developer</h4>
                <h5>
                  A project for Facebook Hackathon for the messaging category initiated by our Professor. Luckily I was invited
                  to join and contribute to the project and though I only contributed an insignificant part of the project I value the experience
                  and advices I learned throughout the duration of the project.
                  </h5>
                <h5 className="special-h5">
                  <div className="special-h5-divider">
                    <img src="https://i.ibb.co/Bs8q24z/1280px-React-icon-svg.png" alt="1" />
                    <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="hey" />
                  </div>
                  <div className="special-h5-divider">
                    <a href="https://github.com/joshuiaclan/messaging-app-2020">
                      <img src="https://i.ibb.co/xqVgrzc/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png" alt="/" data-tip="Github Repository" data-class="tool-tip" />
                    </a>
                  </div>
                </h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex">
              <img src="https://i.ibb.co/bb96J2x/Untitled-2.png" alt="/assets/img/developers/default.png" />
            </div>
            <div className="inner">
              <div className="info">
                <h3><a href="https://anilist-project.netlify.app/">AniList Project</a></h3>
                <h4>Personal Project</h4>
                <h5>
                  Similar to Myanimelist.net, this web application is a database of my anime collection to easily
                  navigate, get recommendations and ask for a copy. The main purpose of this project is to relearn
                  the fundamentals of web development and improve my knowledge and coding skills.
                  </h5>
                <h5 className="special-h5">
                  <div className="special-h5-divider">
                    <img src="https://i.ibb.co/XZhvfNQ/051-html-5.png" alt="hey" />
                    <img src="https://i.ibb.co/MPybPvC/mysql.png" alt="hey" />
                    <img src="https://i.ibb.co/8886Jyg/node-Copy.png" alt="hey" />
                  </div>
                  <div className="special-h5-divider">
                    <a href="https://anilist-project.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <img src="https://i.ibb.co/7QYGN7v/logomark.png" alt="476" data-tip="Netlify Deployment" data-class="tool-tip" />
                    </a>
                    <a href="https://github.com/Klylylydeee/anilist-project" target="_blank" rel="noopener noreferrer">
                      <img src="https://i.ibb.co/xqVgrzc/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png" alt="/" data-tip="Github Repository" data-class="tool-tip" />
                    </a>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
