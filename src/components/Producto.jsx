import React from 'react'
import { Link } from 'react-router-dom'


export const Producto = ({info}) => {
    return (
        <Link className='links' to={`/detalle/${info.id}`} key={info.id} >
            <div className='card' style={{ width: '18rem' }}>
                <img src={info.img} className='card-img-top' alt="" />
                <div className='card-body'>
                    <p className='card-text'>{info.nombre}</p>
                </div>
            </div>
        </Link>
    )
}