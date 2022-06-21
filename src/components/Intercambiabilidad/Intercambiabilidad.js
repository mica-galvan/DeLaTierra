import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import '../ItemList/ItemListEstilos/ItemListEstilo.css'

const InputCount = () => {
    return (
        <>
            <Link to='/Cart' >
                <Button
                    className=" color-botonAdd" style={{ marginLeft: '18px' }}
                    //onClick={() => console.log('ir a cart')}
                >Terminar compra</Button>
            </Link>
            <Link to='/' >
                <Button
                    className=" color-botonAdd" style={{ marginLeft: '18px' }}
                    //onClick={() => console.log('ir al home')}
                >Seguir comprando</Button>
            </Link>
        </>
    )
}

const ButtonCount = ({ handleInter, cantidad, onAdd, item, stock }) => {


    return <Button
        className="color-botonAdd button button-primary" style={{ marginLeft: '18px' }}
        disabled = { stock === 0 ? true : null }
        onClick={() => {
            handleInter();
            onAdd(cantidad, item);


        }}
    // disabled={stock === 0 ? true : null} 
    >Añadir al carrito</Button>

}




const Intercambiabilidad = ({ cantidad, item, onAdd, stock }) => {
    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    return (
        <>

            <div className=''>



                {
                    inputType === 'button' ?
                        <ButtonCount handleInter={handleInter} cantidad={cantidad} item={item} onAdd={onAdd} stock={stock} />
                        :
                        <InputCount />

                }

            </div>
        </>
    )
}

export default Intercambiabilidad