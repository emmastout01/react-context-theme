import Button from './Button';

const Header = ({theme}) => {
    return <div className={`header-${theme}`}>
        <h1>Online Grocery Store</h1>
        <Button theme={theme}>Shop</Button>
        <Button theme={theme}>Explore</Button>
    </div>
}

export default Header;