import React from "react";

const AddVisita = () => {
  return (
    <div>
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label>Fecha de visita</label>
            <input type="date" class="form-control" name="dia" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label>Descripción</label>
            <input type="text" class="form-control" name="descripcion" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <div>
            <button class="button button4">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVisita;
