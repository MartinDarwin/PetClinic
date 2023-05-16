import React from "react";
import { useState } from "react";
import "../styles.css"


const AddVeterinarioForm = ({ addVeterinario }) => {
  const initialFormState = {
    id: null,
    nombre: "",
    apellido: "",
    especialidad: "",
    telefono: "",
  };
  const [veterinario, setVeterinario] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVeterinario({ ...veterinario, [name]: value });
  };

  return (
    <div class="container" id="bg">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            !veterinario.nombre ||
            !veterinario.apellido ||
            !veterinario.especialidad ||
            !veterinario.telefono
          )
            return;
          addVeterinario(veterinario);
          setVeterinario(initialFormState);
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
                    value={veterinario.nombre}
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
                    value={veterinario.apellido}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Especialidad</label>                  
                  <select name="especialidad" class="form-control" value={veterinario.especialidad} onChange={handleInputChange}>
                    <option value="Seleccionar">Seleccionar</option>
                    <option value="Veterinario" selected>Veterinario</option>
                    <option value="Anastesista">Anastesista</option>
                    <option value="Cardiólogo" selected>Cardiólogo</option>                    
                  </select>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Teléfono</label>
                  <input
                    type="text"
                    class="form-control"
                    name="telefono"
                    value={veterinario.telefono}
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

export default AddVeterinarioForm;
