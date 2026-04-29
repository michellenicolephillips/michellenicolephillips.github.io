import React, { useState, useEffect } from 'react';
import NavBar from './components/nav_bar_component';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';
import Header from './components/Header';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  // Initialize theme from storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = (): void => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="App">
      {/* State and Toggle Function passed as Props */}
      <NavBar isDark={isDark} toggleTheme={toggleTheme} />
      {/* State passed as Prop */}
      <Header isDark={isDark} />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;