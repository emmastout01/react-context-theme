import { useState } from 'react';
import { items } from './items';
import ThemeButton from './components/ThemeButton';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
      <div className={`page page-${theme}`}>
        <ThemeButton theme={theme} setTheme={setTheme} />
        <Header theme={theme} />
        <CardList theme={theme} items={items} />
        <Footer theme={theme} />
      </div>
  );
}

export default App;
