import './navigation-style.scss';

function Navigation() {
  return (
    <div className="navigationContainer">
      <div className="navLogoContainer">
      <img className="navLogo" src="https://i.ibb.co/4KyrBWG/my-Portfolio-logo-white.png" alt="my-Portfolio-logo-white" border="0"/>
      </div>
      <div className="navButtonsContainer">
        <div className="gridNavButtons">
          <div className="grid-box homeButton">
            <img className="navLogo" src="https://i.ibb.co/sj8wwdC/home-icon-silhouette-white.png" alt="home-icon-silhouette-white" border="0"/>
          </div>
          <div className="grid-box aboutMeButton">
            <img className="navLogo" src="https://i.ibb.co/q1GRcfx/identity-card-white.png" alt="identity-card-white" border="0"/>
          </div>
          <div className="grid-box skillsButton">
            <img className="navLogo" src="https://i.ibb.co/cch0pBp/program-settings-white.png" alt="program-settings-white" border="0"/>
          </div>
          <div className="grid-box projectsButton">
            <img className="navLogo" src="https://i.ibb.co/Smbr0FN/document-sheets-white.png" alt="document-sheets-white" border="0"/>
          </div>
          <div className="grid-box contactButton">
            <img className="navLogo" src="https://i.ibb.co/1n5KVFn/open-mail-white.png" alt="open-mail-white" border="0"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
