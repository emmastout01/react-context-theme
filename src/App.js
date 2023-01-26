import { useState } from 'react';
import { items } from './items';
import ThemeButton from './components/ThemeButton';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';
import { ThemeContext } from './ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
    <div className={`page page-${theme}`}>
      <ThemeButton theme={theme} setTheme={setTheme} />
      <Header />
      <CardList items={[...items, ...items]} />
      <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
