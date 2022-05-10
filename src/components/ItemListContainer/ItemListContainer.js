import ItemCount from '../ItemList/ItemCount';

const ItemListContainer = ( { saludo='saludo' } ) => {
  return (
    <div>
        <h3> {saludo} </h3>
        <ItemCount initial={1} stock={4} />
     
        </div>
  )
}

export default ItemListContainer