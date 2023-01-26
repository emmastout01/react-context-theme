import Button from './Button';

const Card = ({item, theme}) => {
    const buyItem = () => {}; 

    return <div className={`card card-${theme}`}>
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} width="150" height="150"/>
        <div className='item-secondary-text'>{item.description}</div>
        <div className='item-secondary-text'>${item.price}</div>
        <Button theme={theme} onClick={buyItem}>Buy item</Button>
    </div>
}

export default Card;