import Button from './Button';

const Footer = ({ theme }) => {
    return <div className='footer'>
        <hr />
        <Button theme={theme}>Subscribe</Button>
        <Button theme={theme}>Email us</Button>
    </div>
}

export default Footer;