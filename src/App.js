import NavBar from './components/nav_bar_component';
import Footer from './components/footer';
import Home from './components/home';
import Projects from './components/projects';
import Resume from './components/resume';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Header/>
      <Home/>
      <Projects/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
