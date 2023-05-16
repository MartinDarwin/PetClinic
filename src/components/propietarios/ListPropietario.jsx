import React from "react";
import "../styles.css";
import { useState } from "react";

const ListPropietario = (props) => {
  const [busqpropietarios, setBusqpropietarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  let propi;

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = propi.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setBusqpropietarios(resultadosBusqueda);
  };

  if (busqpropietarios.length > 0) {
    propi = busqpropietarios;
  } else {
    propi = props.propietarios;
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
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Mascota</th>
            <th>Telefono</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {propi.length > 0 ? (
            propi.map((propietario) => (
              <tr key={propietario.id}>
                <td>{propietario.nombre}</td>
                <td>{propietario.apellido}</td>
                <td>{propietario.direccion}</td>
                <td>{propietario.ciudad}</td>
                <td>{propietario.mascota}</td>
                <td>{propietario.telefono}</td>
                <td>
                  <button
                    class="botonEdit"
                    onClick={() => {
                      props.editRow(propietario);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    class="botonDelete"
                    onClick={() => props.deletePropietario(propietario.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No propietarios</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListPropietario;
