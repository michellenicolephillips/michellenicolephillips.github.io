import NavBar from './components/nav_bar_component';
import Footer from './components/footer';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Home/>
      <Projects/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
