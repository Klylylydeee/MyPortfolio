import './navigation-style.scss';

function Navigation() {
  return (
    <div className="navigationContainer">
      <div className="navLogoContainer">
        <img className="navLogo" src="https://i.ibb.co/4KyrBWG/my-Portfolio-logo-white.png" alt="my-Portfolio-logo-white" border="0"/>
        <div className="burgerNav">
          <div className="burgerBar"></div>
          <div className="burgerBar"></div>
          <div className="burgerBar"></div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
