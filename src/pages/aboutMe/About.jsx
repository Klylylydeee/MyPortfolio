// Context API
// import { PaneContext } from '../../ContextAPI/PaneContext.jsx';
// import { useContext } from 'react';
import './about.scss';


const About = () => {

  // const { setPanelState } = useContext(PaneContext);
  // console.log('About Loaded')

  return (
    <div className="about-container">
      {/* 3.1.1 */}
      <div className="about-container-header">
        <div className="about-container-header-text">
          <h1>About Me</h1>
          <span>About Me</span>
        </div>
      </div>
      {/* 3.1.2 */}
      <div className="introduction-content">
        <div className="introduction-content-img">
          <img src="https://i.ibb.co/gDdxz5c/IMG-20191130-102239-800.jpg" alt="alt" />
        </div>
        <div className="introduction-content-text">
          <p>
            Hi, I am <span>Klyde Guevarra</span>.
          </p>
          <p>
            An aspiring <span>Web Developer</span> and <span>UI Designer</span> based in Silang, Cavite.
        </p>
          <p>
            As of now, I am still an undergraduate third year student enrolled in the degree of
            Bachelor of Science in Information Technology Major in Web Developent at the Adventist
            University of the Philippines. I do enjoy spending my time learning and improving my technical skills
            as well as building things that would make a difference for you and me.
        </p>
          <p>
            I am an optimistic, adaptable, and reliable person that is motivated with a goal-oriented mindset with
            the tasks given to me. Currently, I have no work experience for neither an individual or a company but
            given the chance I hope you'll be delighted to work with me.
        </p>
          <p>
            Hoping that we can get along well and nice meeting you!
        </p>
        </div>
      </div>
      {/* 3.1.3 */}
      <div className="quote-content">
        <p className="quote-content-text">"If you have a dream, chase it no matter what it takes!"</p>
        <p className="quote-content-signature">James Harden</p>
      </div>
      {/* 3.1.4 */}
      <div className="background-content">
        <div className="background-content-working">
          <p className="working-header">Working Experience</p>
          <div className="working-container">
            <ul>
              <li>Data Encoder</li>
              <li>Private Company</li>
              <li>May 2020 - November 2020</li>
              <li>I am currently a student studying under the program of Bachelor of Science in Information
              Technology in Adventist University of the Philippines. I am currently a student studying under
              the program of Bachelor of Science in Information Technology in Adventist University of the
                Philippines.</li>
            </ul>
          </div>
        </div>
        <div className="background-content-education">
          <p className="education-header">Educational Background</p>
          <div className="education-container">
            <ul>
              <li>Bachelor of Science Major in Information Technology</li>
              <li>Adventist University of the Philippines</li>
              <li>2018 - Current</li>
              <li>I am currently a student studying under the program of Bachelor of Science in Information
              Technology in Adventist University of the Philippines. I am currently a student studying under
              the program of Bachelor of Science in Information Technology in Adventist University of the
                Philippines.</li>
            </ul>
            <ul>
              <li>Senior High School</li>
              <li>Adventist University of the Philippines</li>
              <li>2016 - 2018</li>
              <li>I am currently a student studying under the program of Bachelor of Science in Information
              Technology in Adventist University of the Philippines. I am currently a student studying under
              the program of Bachelor of Science in Information Technology in Adventist University of the
                Philippines.</li>
            </ul>
            <ul>
              <li>Junior High School</li>
              <li>Adventist University of the Philippines</li>
              <li>2012 - 2016</li>
              <li>I am currently a student studying under the program of Bachelor of Science in Information
              Technology in Adventist University of the Philippines. I am currently a student studying under
              the program of Bachelor of Science in Information Technology in Adventist University of the
                Philippines.</li>
            </ul>
            <ul>
              <li>Elementary</li>
              <li>Adventist University of the Philippines</li>
              <li>2006 - 2012</li>
              <li>I am currently a student studying under the program of Bachelor of Science in Information
              Technology in Adventist University of the Philippines. I am currently a student studying under
              the program of Bachelor of Science in Information Technology in Adventist University of the
                Philippines.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
