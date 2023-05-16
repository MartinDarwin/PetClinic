import React from "react";
import { useState } from "react";
import "../styles.css"


const AddPropietarioForm = ({ addPropietario }) => {
  const initialFormState = {
    id: null,
    nombre: "",
    apellido: "",
    direccion: "",
    ciudad: "",
    mascota: "",
    telefono: "",
  };
  const [propietario, setPropietario] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropietario({ ...propietario, [name]: value });
  };

  return (
    <div class="container" id="bg">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            !propietario.nombre ||
            !propietario.apellido ||
            !propietario.direccion ||
            !propietario.ciudad ||
            !propietario.mascota ||
            !propietario.telefono
          )
            return;
          addPropietario(propietario);
          setPropietario(initialFormState);
        }}
      >
        <div class="row">
          <div class="col-sm">
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label>Nombres</label>
                  <input                  
                    type="text"
                    class="form-control"
                    name="nombre"
                    value={propietario.nombre}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Apellidos</label>
                  <input
                    type="text"
                    class="form-control"
                    name="apellido"
                    value={propietario.apellido}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Ciudad</label>
                  <input
                    type="text"
                    class="form-control"
                    name="ciudad"
                    value={propietario.ciudad}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Teléfono</label>
                  <input
                    type="text"
                    class="form-control"
                    name="telefono"
                    value={propietario.telefono}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label>Dirección</label>
                  <input
                    type="text"
                    class="form-control"
                    name="direccion"
                    value={propietario.direccion}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Mascota</label>
                  <input
                    type="text"
                    class="form-control"
                    name="mascota"
                    value={propietario.mascota}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button class="button button4">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default AddPropietarioForm;
