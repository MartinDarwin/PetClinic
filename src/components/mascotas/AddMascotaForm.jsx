import React from "react";
import { useState } from "react";
import "../styles.css";

const AddMascotaForm = ({ addMascota }) => {
  const initialFormState = {
    id: null,
    nombre: "",
    fecha_naci: "",
    tipo: "",
  };
  const [mascota, setMascota] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMascota({ ...mascota, [name]: value });
  };

  return (
    <div class="container" id="bg">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!mascota.nombre || !mascota.fecha_naci || !mascota.tipo) return;
          addMascota(mascota);
          setMascota(initialFormState);
        }}
      >
        <div class="row">
          <div class="col-sm">
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label>Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    name="nombre"
                    value={mascota.nombre}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Fecha Nacimiento</label>
                  <input
                    type="date"
                    class="form-control"
                    name="fecha_naci"
                    value={mascota.fecha_naci}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Tipo</label>                  
                  <select name="tipo" class="form-control" value={mascota.tipo} onChange={handleInputChange}>
                    <option value="Seleccionar">Seleccionar</option>
                    <option value="Perro" selected>Perro</option>
                    <option value="Gato" selected>Gato</option>
                    <option value="Loro">Loro</option>
                    <option value="Conejo">Conejo</option>
                    <option value="Hamster">Hamster</option>
                  </select>
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

export default AddMascotaForm;
