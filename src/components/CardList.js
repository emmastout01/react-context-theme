import Card from './Card';

const CardList = ({ theme, items }) => {
    return (
        <div className='card-list'>
            {items.map(item => (
                <Card theme={theme} item={item} key={item.name} />
            ))
            }
        </div>
    )
}




export default CardList;