import Button from './Button';

const ThemeButton = ({ theme, setTheme }) => {
    if (theme === 'dark') {
        return <Button onClick={() => setTheme('light')} className='theme-button'>
            <span className="material-symbols-outlined">
                light_mode
            </span>
            <label>Light mode</label>
        </Button>
    }
    return <Button onClick={() => setTheme('dark')} className='theme-button'>
        <span className="material-symbols-outlined">
            dark_mode
        </span>
        <label>Dark mode</label>
    </Button>
}

export default ThemeButton;