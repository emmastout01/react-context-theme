import Button from './Button';

const Header = ({ theme }) => {
    return <div className={`header header-${theme}`}>
        <h1>Online Grocery Store</h1>
        <div className='header-button-container'>
            <Button theme={theme}>Shop</Button>
            <Button theme={theme}>Explore</Button>
        </div>

    </div>
}

export default Header;