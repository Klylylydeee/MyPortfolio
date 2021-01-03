import Navigation from './components/navigationBar-3.1-component/navigation.jsx';
import LandingPage from './components/landing-page/landing.jsx';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Navigation></Navigation>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
