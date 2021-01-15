import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import '../../styles/class.scss';
import './about.scss';

const About = () => {

  console.log('About Loaded')

  return (

    <Scrollbars universal thumbMinSize={100}>
      <div className="about-container">
        <div className="margin-container">
          <div className="content-box flex">
            <div className="content first-element">
              <Zoom>
                <h1>About Me</h1>
                <Fade top cascade>
                  <span>About Me</span>
                </Fade>
              </Zoom>
            </div>
            <div className="content">
              {/* exit */}
            </div>
          </div>
          <div className="content-box flex-reverse">
            <Fade left delay={300}>
              <div className="image-content-box">
                <img src="https://i.ibb.co/gDdxz5c/IMG-20191130-102239-800.jpg" alt="IMG-20191130-102239-800" border="0" />

              </div>
            </Fade>
            <div className="text-content-box">
              <Fade left delay={500}>
                <h3>Hi, I am <span className="special-text">Klyde Guevarra</span>. An aspiring <span className="special-text">Web Developer</span> and 
                  <span className="special-text"> UI/UX Designer</span> based in Silang, Cavite.
                  I am currently a student studying under the program of Bachelor of Science in Information 
                  Technology in Adventist University of the Philippines. I am currently a student studying under 
                  the program of Bachelor of Science in Information Technology in Adventist University of the 
                  Philippines. I am currently a student studying under the program of Bachelor of Science in 
                  Information Technology in Adventist University of the Philippines. I am currently a student studying under the program of Bachelor of Science in Information 
                  Technology in Adventist University of the Philippines. I am currently a student studying under 
                  the program of Bachelor of Science in Information Technology in Adventist University of the 
                  Philippines. I am currently a student studying under the program of Bachelor of Science in 
                  Information Technology in Adventist University of the Philippines. I am currently a student studying under the program of Bachelor of Science in Information 
                  Technology in Adventist University of the Philippines. I am currently a student studying under 
                  the program of Bachelor of Science in Information Technology in Adventist University of the 
                  Philippines. I am currently a student studying under the program of Bachelor of Science in 
                  Information Technology in Adventist University of the Philippines.</h3>
              </Fade>
            </div>
          </div>
          <div className="content-box flex-reverse last-element">
            <Rotate top left delay={700}>
              <div className="background-box ">
                <h2>Working Experience</h2>
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
              </div>
            </Rotate>
            <Rotate top left delay={800}>
              <div className="background-box">
                <h2>Educational Background</h2>
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
                      <li className="details-text">I am currently a student studying under the program of Bachelor of Science in Information 
                      Technology in Adventist University of the Philippines. I am currently a student studying under 
                      the program of Bachelor of Science in Information Technology in Adventist University of the 
                      Philippines. </li>
                  </li>
                </ul>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </Scrollbars>

  );
}

export default About;
