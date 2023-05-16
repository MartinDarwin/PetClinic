import React from "react";
import "../styles.css"


const ListVeterinario = (props) => {
  console.log(props);
  return (
    <table id="tablas">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Especialidad</th>
          <th>Telefono</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.veterinarios.length > 0 ? (
          props.veterinarios.map((veterinario) => (
            <tr key={veterinario.id}>
              <td>{veterinario.nombre}</td>
              <td>{veterinario.apellido}</td>
              <td>{veterinario.especialidad}</td>
              <td>{veterinario.telefono}</td>
              <td>
                <button class="botonEdit"
                  onClick={() => {props.editRow(veterinario)}}
                >
                  Editar
                </button>
                <button class="botonDelete"
                  onClick={() => props.deleteVeterinario(veterinario.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No veterinarios</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ListVeterinario;
