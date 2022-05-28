import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

import '../ItemList/ItemListEstilos/ItemCountEstilo.css';


const InputCount = () => {
    return (
        <>
            <Link to='/Cart' >
                <button
                    className="color-botonAdd button button-primary" style={{ marginLeft: '18px' }}
                    //onClick={() => console.log('ir a cart')}
                >Terminar compra</button>
            </Link>
            <Link to='/' >
                <button
                    className="color-botonAdd button button-primary" style={{ marginLeft: '18px' }}
                    //onClick={() => console.log('ir al home')}
                >Seguir comprando</button>
            </Link>
        </>
    )
}

const ButtonCount = ({ handleInter, cantidad, onAdd, item }) => {


    return <button
        className="color-botonAdd button button-primary" style={{ marginLeft: '18px' }}
        onClick={() => {
            handleInter();
            onAdd(cantidad, item);


        }}
    // disabled={stock === 0 ? true : null} 
    >Añadir al carrito</button>

}




const Intercambiabilidad = ({ cantidad, item, onAdd }) => {
    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    return (
        <>

            <div className=''>



                {
                    inputType === 'button' ?
                        <ButtonCount handleInter={handleInter} cantidad={cantidad} item={item} onAdd={onAdd}/>
                        :
                        <InputCount />

                }

            </div>
        </>
    )
}

export default Intercambiabilidad