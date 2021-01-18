// Context API
import { PaneContext } from '../../Contexts/PaneContext.jsx'
import { useContext } from 'react'
// Modules
import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
// Styles
import '../../styles/class.scss';
import './about.scss';


const About = () => {

  const { setPanelState } = useContext(PaneContext);
  console.log('About Loaded')

  return (

    <Scrollbars universal thumbMinSize={100}>
      <div className="about-container">
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
            <button className="button-container" onClick={() => { setPanelState({ isArrowUp: false }) }}>
              <div className="exit"></div>
            </button>
          </div>
          <div className="content-box flex-reverse">
            <Fade left delay={300}>
              <div className="image-content-box flex">
                <img src="https://i.ibb.co/gDdxz5c/IMG-20191130-102239-800.jpg" alt="IMG-20191130-102239-800" border="0" />
              </div>
            </Fade>
            <div className="text-content-box flex no-select">
              <Fade left delay={500}>
                <h3>Hi, I am <span className="special-text">Klyde Guevarra</span>. An aspiring <span className="special-text">Web Developer</span> and
                  <span className="special-text"> UI/UX Designer</span> based in Silang, Cavite.
                  Currently, I am still a student studying under the program of Bachelor of Science in Information
                  Technology at the Adventist University of the Philippines. I love learning and building things that make a difference for you and me.
                  {/* I am still learning some new frontend Javascript frameworks/library and backend technologies and as for my UI/UX skills, I am hoping to learn 
                  more about prototyping, interaction and visual design, and typography.  */}
                  <span className="special-text"> There’s so much to know and learn from the ever-growing world of technology. </span>But hey, nice to meet you!</h3>
              </Fade>
            </div>
          </div>
          <div className="content-box no-select">
            <Fade bottom cascade delay={500}>
            <h3>
            If you have a dream, chase it no matter what it takes.
            </h3>
            <h4 className="special-text">
            James Harden
            </h4>
            </Fade>
          </div>
          <div className="content-box flex-reverse last-element no-select">
            <div className="background-box ">
              <Rotate top left >
                <h2>Working Experience</h2>
              </Rotate>
              <Rotate top left >
              <ul>
                {/* Work */}
                <li className="parent-li">
                  <li className="special-text">Date Encoder</li>
                  <li>Private Company</li>
                  <li>2020 July - 2020 November</li>
                  <li className="details-text">I am currently a student studying under the program of Bachelor of Science in Information
                  Technology in Adventist University of the Philippines. I am currently a student studying under
                  the program of Bachelor of Science in Information Technology in Adventist University of the
                      Philippines. </li>
                </li>
              </ul>
              </Rotate>
            </div>
            <div className="background-box">
              <Rotate top left cascade>
                <h2>Educational Background</h2>
              </Rotate>
              <Rotate top left cascade>
                <ul>
                  {/* College */}
                  <li className="parent-li">
                    <li className="special-text">Bachelor of Science Major in Information Technology</li>
                    <li>Adventist University of the Philippines</li>
                    <li>2018 - Current</li>
                    <li className="details-text">I am currently a student studying under the program of Bachelor of Science in Information
                    Technology in Adventist University of the Philippines. I am currently a student studying under
                    the program of Bachelor of Science in Information Technology in Adventist University of the
                        Philippines. </li>
                  </li>
                  {/* Senior High School */}
                  <li className="parent-li">
                    <li className="special-text">Senior High School</li>
                    <li>Adventist University of the Philippines</li>
                    <li>2016 - 2018</li>
                    <li className="details-text">I am currently a student studying under the program of Bachelor of Science in Information
                    Technology in Adventist University of the Philippines. I am currently a student studying under
                    the program of Bachelor of Science in Information Technology in Adventist University of the
                        Philippines. </li>
                  </li>
                  {/* Junior High School */}
                  <li className="parent-li">
                    <li className="special-text">Junior High School</li>
                    <li>Adventist University of the Philippines</li>
                    <li>2012 - 2016</li>
                    <li className="details-text">I am currently a student studying under the program of Bachelor of Science in Information
                    Technology in Adventist University of the Philippines. I am currently a student studying under
                    the program of Bachelor of Science in Information Technology in Adventist University of the
                        Philippines. </li>
                  </li>
                  {/* Elementary */}
                  <li className="parent-li">
                    <li className="special-text">Elementary</li>
                    <li>Adventist University of the Philippines</li>
                    <li>2006 - 2012</li>
                    <li className="details-text ">I am currently a student studying under the program of Bachelor of Science in Information
                    Technology in Adventist University of the Philippines. I am currently a student studying under
                    the program of Bachelor of Science in Information Technology in Adventist University of the
                        Philippines. </li>
                  </li>
                </ul>
              </Rotate>
            </div>
          </div>
          {/* <div className="content-box">
            <button onClick={() => { setPanelState({ isArrowUp: false }) }}>EXIT</button>
          </div> */}
        </div>
      </div>
    </Scrollbars>

  );
}

export default About;
