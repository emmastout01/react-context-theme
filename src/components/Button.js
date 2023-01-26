const Button = ({ theme, onClick, children }) => {
    return <button
        className={`button button-${theme}`}
        onClick={onClick}>{children}</button>
}

export default Button;