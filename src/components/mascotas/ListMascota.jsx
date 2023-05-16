import React from "react";
import "../styles.css";
import { useState } from "react";

const ListMascota = (props) => {
  const [busqmascotas, setBusqMascotas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  let mascot;

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = mascot.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setBusqMascotas(resultadosBusqueda);
  };

  if (busqmascotas.length > 0) {
    mascot = busqmascotas;
  } else {
    mascot = props.mascotas;
  }
  return (
    <div class="container" id="bg">
      <div class="row">
        <div class="col-3">
          <div class="form-group">
            <input
              class="form-control"
              value={busqueda}
              placeholder="Búsqueda por Nombre"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div></div>
      <table id="tablas">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha Nacimiento</th>
            <th>Tipo</th>
            <th>Propietario</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mascot.length > 0 ? (
            mascot.map((mascota) => (
              <tr key={mascota.id}>
                <td>{mascota.nombre}</td>
                <td>{mascota.fecha_naci}</td>
                <td>{mascota.tipo}</td>
                <td>{mascota.propietario}</td>
                <td>
                  <button
                    class="botonEdit"
                    onClick={() => {
                      props.editRow(mascota);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    class="botonDelete"
                    onClick={() => props.deleteMascota(mascota.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No mascotas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListMascota;
