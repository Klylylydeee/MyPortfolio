// Context API
// import { PaneContext } from '../../ContextAPI/PaneContext.jsx';
// import { useContext } from 'react';
import './skills.scss';
import video2 from '../../assets/My Switzerland(1).mp4';


const Skills = () => {

  // const { setPanelState } = useContext(PaneContext);
  // console.log('About Loaded')

  return (
    <div className="skills-container">
      {/* 3.2.1 */}
      <div className="skills-container-header">
        <div className="skills-container-header-text">
          <h1>Skills</h1>
          <span>Skills</span>
        </div>
      </div>
      {/* 3.2.2 */}
      <div className="different-skills-container">
        <ul>Programming Languages:
          <li><img src="https://i.ibb.co/dPFf0qn/58480979cef1014c0b5e4901.png" alt="a" />Java</li>
          <li><img src="https://i.ibb.co/Vp2d9v0/s-Ue4d-G-L-400x400.jpg" alt="s" />Javascript</li>
          <li><img src="https://i.ibb.co/LNvztYF/ST6u-COwkmqg-YV4-IM399y-Jmi-Ne-Lm-Qd-ICbo-Evl3-SRh-GPQDTr2-Xo-Sum4-Klip-JIi1k-Rj-IHLQ8-Xyce-FQh-JMHg.png" alt="S" />Python</li>
        </ul>
        <ul className="hide-skills">Stylesheets:
          <li><img src="https://i.ibb.co/whhd0Vb/073-css-3.png" alt="alt" /> Sass</li>
          <li><img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="hey" />Bootstrap</li>
        </ul>
        <ul>Javascript Library/Frameworks:
          <li><img src="https://i.ibb.co/mNZ4PZH/angular.png" alt="alt" /> Angular</li>
          <li><img src="https://i.ibb.co/Bs8q24z/1280px-React-icon-svg.png" alt="1" />ReactJS</li>
          <li className="hide-skills"><img src="https://i.ibb.co/tHvNzTV/npmlogo.png" alt="npmlogo" />Node Package Manager</li>
        </ul>
        <ul>Backend Technologies:
          <li><img src="https://i.ibb.co/8886Jyg/node-Copy.png" alt="alt" /> NodeJS</li>
          <li><img src="https://i.ibb.co/3FCKxb7/136-1363736-express-js-icon-png-transparent-png.png" alt="136" />ExpressJS</li>
        </ul>
        <ul>Version Control:
          <li><img src="https://i.ibb.co/QPSVYk6/Git-Icon-1788-C.png" alt="Git-Icon-1788-C" />Git</li>
        </ul>
        <ul className="hide-skills">Git Repositories:
          <li><img src="https://i.ibb.co/RzWPt12/039-github-2.png" alt="039-github-2" />Github</li>
          <li><img src="https://i.ibb.co/c3f04ps/476-4763953-mobile-cloud-and-heroku-100-pure-java-heroku.png" alt="476" />Heroku</li>
          <li><img src="https://i.ibb.co/7QYGN7v/logomark.png" alt="476" />Netlify</li>
        </ul>
        <ul>Database:
          <li><img src="https://i.ibb.co/MPybPvC/mysql.png" alt="alt" /> Mysql</li>
          <li><img src="https://i.ibb.co/xjYhnz4/mongodb.png" alt="alt" /> MongoDB</li>
        </ul>
        <ul className="hide-skills">Prototyping/Wireframe:
          <li><img src="https://i.ibb.co/fr1mKX0/220px-Figma-logo-svg.png" alt="alt" />Figma</li>
          <li><img src="https://svgshare.com/i/TQB.svg" alt="alt" />Adobe Photoshop</li>
          <li><img src="https://i.ibb.co/ZfyHnXm/1051px-Adobe-XD-CC-icon-svg.png" alt="alt" />Adobe XD</li>
        </ul>
        <ul className="hide-skills">Routing Protocol Configurations:
          <li><img src="https://i.ibb.co/6mZWnBN/Network-Protocol.png" alt="Network-Protocol" />RIPv2</li>
          <li><img src="https://i.ibb.co/6mZWnBN/Network-Protocol.png" alt="Network-Protocol" />OSPF</li>
          <li><img src="https://i.ibb.co/6mZWnBN/Network-Protocol.png" alt="Network-Protocol" />EIGRP</li>
        </ul>
      </div>
      {/* 3.2.3*/}
      <div className="services-container">
        <p className="services-header">Services</p>
        <div className="services-container-flex">
          <div className="services-container-content">
            <img src="https://i.ibb.co/WWwP21Y/website-development.png" alt="alt" />
            <p className="services-header">Web Development</p>
            <p>Web Prototype Designs allows developers and users alike to get grasp of their desired visuals.
            Through this service, I offer a feature-filled design that will have a memorable effect to
              everyone.</p>
            <div className="services-container-content-img">
              <img src="https://svgshare.com/i/TNJ.svg" alt="alt" data-tip="FrontEnd" data-class="tool-tip" />
              <img src="https://i.ibb.co/wp5wzvY/maintenance.png" alt="alt" data-tip="BackEnd" data-class="tool-tip" />
              <img src="https://svgshare.com/i/TP1.svg" alt="alt" data-tip="Database" data-class="tool-tip" />
            </div>
          </div>
          <div className="services-container-content">
            <img src="https://i.ibb.co/5MqJ0XR/website-design.png" alt="alt" />
            <p className="services-header">Web Prototype Design </p>
            <p>Web Prototype Designs allows developers and users alike to get grasp of their desired visuals.
            Through this service, I offer a feature-filled design that will have a memorable effect to
              everyone.</p>
            <div className="services-container-content-img">
              <img src="https://svgshare.com/i/TQB.svg" alt="alt" data-tip="Adobe Photoshop 2021" data-class="tool-tip" />
              <img src="https://i.ibb.co/ZfyHnXm/1051px-Adobe-XD-CC-icon-svg.png" alt="alt" data-tip="Adobe XD" data-class="tool-tip" />
              <img src="https://i.ibb.co/fr1mKX0/220px-Figma-logo-svg.png" alt="alt" data-tip="Figma" data-class="tool-tip" />
            </div>
          </div>
        </div>
      </div>
      {/* Source: https://www.youtube.com/watch?v=o77ctsQjRz8 */}
      <video autoPlay muted loop id="myVideo">
        <source src={video2} type="video/mp4" />
      </video>
    </div>
  );
}

export default Skills;
