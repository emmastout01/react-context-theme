import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import Button from './Button';

const Header = () => {
    const theme = useContext(ThemeContext);

    return <div className={`header header-${theme}`}>
        <h1>Online Grocery Store</h1>
        <div className='header-button-container'>
            <Button>Shop</Button>
            <Button>Explore</Button>
        </div>

    </div>
}

export default Header;