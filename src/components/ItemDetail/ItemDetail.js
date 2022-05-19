const ItemDetail = ({item}) => {
    return (
        <div className="">
            <h2 style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>Detalle de producto</h2>
            <div className="" >
                <img className="" alt="imagen-detail" src={item.foto} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', height: '50vh' }} />
            </div>
            <div className="">
                <h4 style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>{item.nombre}</h4>
                <p style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>{item.precio}</p>
                <p style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial', paddingLeft: '25%',  paddingRight: '25%' }}>{item.descripcion}</p>
            </div>
        </div>
    )
}

export default ItemDetail