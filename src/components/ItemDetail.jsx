import React from 'react';

export const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h1>{data.nombre}</h1>
          <div className="row d-flex justify-content-center">
            <img style={{ width: "500px" }} src={data.img} alt={data.nombre} />
          </div>
          <div className="row">
            <p>{data.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};