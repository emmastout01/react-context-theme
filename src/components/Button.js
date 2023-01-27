const Button = ({ theme, onClick, children, className }) => {

    return <button
        className={`button button-${theme} ${className}`}
        onClick={onClick}>{children}</button>
}

export default Button;