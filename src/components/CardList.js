import Card from './Card';

const CardList = ({ theme, items }) => {
    return (
        <div className='card-list'>
            {items.map(item => (
                <Card item={item} theme={theme} />
            ))
            }
        </div>
    )
}




export default CardList;