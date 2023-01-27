import Card from './Card';

const CardList = ({ theme, items }) => {
    return (
        <div className='card-list'>
            {items.map(item => (
                <Card theme={theme} item={item} />
            ))
            }
        </div>
    )
}




export default CardList;