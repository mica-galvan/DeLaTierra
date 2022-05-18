const ItemDetail = ({item}) => {
    return (
        <div className="">
            <h3 style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>Detalle de producto</h3>
            <div className="" >
                <img className="" alt="imagen-detail" src={item.foto} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', height: '50vh' }} />
            </div>
            <div className="">
                <h1 style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>{item.nombre}</h1>
                <h2 style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>{item.categoria}</h2>
                <p style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>{item.precio}</p>
                <p style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial', paddingLeft: '25%',  paddingRight: '25%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat diam a varius ultricies. Duis finibus, lacus ut porttitor congue, risus lectus congue nisl, id blandit nunc lacus eu dolor. Nullam at lorem ex. Pellentesque blandit metus ullamcorper orci dapibus, eget placerat augue fringilla. Vivamus est dolor, suscipit id tellus dignissim, feugiat porttitor dui. Nam vitae arcu ac ante eleifend blandit quis ac massa. Mauris ut justo at dui efficitur condimentum.</p>
            </div>
        </div>
    )
}

export default ItemDetail