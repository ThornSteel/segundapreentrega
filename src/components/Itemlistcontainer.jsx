import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { arrayProductos } from "./JSON/Producto.json";
import { Producto } from "./Producto";


export const Itemlistcontainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      resolve(arrayProductos);
    });
    if (idCategoria) {
      getData.then((res) => setProductos(res.filter((item) => item.categoria === idCategoria)));
    } else {
      getData.then((res) => setProductos(res));
    }
  }, [idCategoria]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos"}>
                  Todos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/Notebook"}>
                  Notebook
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/Procesador"}>
                  Procesador
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/Ram"}>
                  Ram
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/PlacaVideo"}>
                  Placavideo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/Fuente"}>
                  Fuente
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row  d-flex justify-content-center gap-3">
            {productos.map((item) => (
              <Producto key={item.id} info={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
