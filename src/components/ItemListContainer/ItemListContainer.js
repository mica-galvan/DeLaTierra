import ItemList from "../ItemList/ItemList";



const ItemListContainer = ( { saludo='saludo' } ) => {
  return (
    <div>
        <h3 style={{ textAlign: 'center', color:'rgb(134, 111, 83)', fontFamily:'Arial'}}> {saludo} </h3>
        <ItemList/>
 
           </div>
  )
}

export default ItemListContainer 