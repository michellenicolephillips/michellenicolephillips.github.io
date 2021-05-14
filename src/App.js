import NavBar from './components/nav_bar_component';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
        <About/>
        <Projects/>
        <Resume/>
        <Footer/>
    </div>
  );
}

export default App;
