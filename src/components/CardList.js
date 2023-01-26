import Card from './Card';

const CardList = ({ items }) => {
    return (
        <div className='card-list'>
            {items.map(item => (
                <Card item={item} />
            ))
            }
        </div>
    )
}




export default CardList;