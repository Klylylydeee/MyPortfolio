import './landing-style.scss';

function LandingPage() {
  return (
    <div className="landingContainer">
      <div className="upperContent">
        <p>Klyde <br/> Guevarra</p>
      </div>
      <div className="lowerContent">
        <p>An aspiring <span className="uniqueText">Web Developer</span> and <span className="uniqueText">UI/UX Designer</span> based in Silang, Cavite.</p>
        <button>
          <p>Continue Reading</p>
        </button>
        {/* Fix image imported to a higher resolution */}
        <div className="gridSocial">
          <div className="gridBox">
            <img src="https://i.ibb.co/dt8ZCKF/045-facebook-2.png" alt="045-facebook-2" border="0"/>
          </div>
          <div className="gridBox">
            <img src="https://i.ibb.co/v1CkWFf/my-Portfolio-logo-white.png" alt="my-Portfolio-logo-white" border="0"/>
          </div>
          <div className="gridBox">
            <img src="https://i.ibb.co/JtMpQMt/024-reddit-2.png" alt="024-reddit-2" border="0"/>
          </div>
          <div className="gridBox">
            <img src="https://i.ibb.co/RzWPt12/039-github-2.png" alt="039-github-2" border="0"/>
          </div>
          <div className="gridBox">
            <img src="https://i.ibb.co/8xzv2hd/031-linkedin-2.png" alt="031-linkedin-2" border="0"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
