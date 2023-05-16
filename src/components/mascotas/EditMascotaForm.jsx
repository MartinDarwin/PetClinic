import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles.css"

const EditMascotaForm = (props) => {
  const [mascota, setMascota] = useState(props.currentMascota);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMascota({ ...mascota, [name]: value });
  };

  useEffect(() => {
    setMascota(props.currentMascota);
  }, [props]);

  return (
    <div class="container" id="bg">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.updateMascota(mascota.id, mascota);
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
                    <option value="Perro">Perro</option>
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
          <button class="button button4">Actualizar Mascota</button>
          <button class="button button4"
            onClick={() => props.setEditing(false)}
            className="button button4"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMascotaForm;
