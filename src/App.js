import { useState } from 'react';
import { items } from './items';
import { capitalize } from './utils';
import Button from './components/Button'
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const newTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <div className={`page page-${theme}`}>
      {/* Button to set theme */}
      <Button onClick={() => setTheme(newTheme)} className='theme-button' theme={theme}>
        <span className="material-symbols-outlined">
          {`${newTheme}_mode`}
        </span>
        <label>{capitalize(newTheme)} mode</label>
      </Button>

      <Header theme={theme} />
      <CardList theme={theme} items={items} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
