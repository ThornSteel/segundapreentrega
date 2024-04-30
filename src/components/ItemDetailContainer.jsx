import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { arrayProductos } from "./JSON/Producto.json"
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    const { idDetalle } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            resolve(arrayProductos)
        });

        getData.then(res => setData(res.find(producto => producto.id === parseInt(idDetalle))))
    }, []);

    return (
        <ItemDetail data={data} />
    )
}