import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Button = ({ onClick, children, className }) => {
    const theme = useContext(ThemeContext);

    return <button
        className={`button button-${theme} ${className}`}
        onClick={onClick}>{children}</button>
}

export default Button;