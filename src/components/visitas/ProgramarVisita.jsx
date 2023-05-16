import React from "react";
import ListMascota from "../mascotas/ListMascota";
import Header from "../Header";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import AddVisita from "./AddVisita";
import "../styles.css";
import ListMascotaVisita from "./ListMascotaVisita";

const Data = [
  {
    id: uuidv4(),
    nombre: "Firulais",
    fecha_naci: "25/05/2022",
    tipo: "Perro",
    propietario: "Luis Gomez",
  },
  {
    id: uuidv4(),
    nombre: "Pelusa",
    fecha_naci: "10/03/2021",
    tipo: "Gato",
    propietario: "Carlos Vega",
  },
  {
    id: uuidv4(),
    nombre: "Pepe",
    fecha_naci: "12/09/2022",
    tipo: "Loro",
    propietario: "Maria Gutierrez",
  },
  {
    id: uuidv4(),
    nombre: "Lucas",
    fecha_naci: "02/10/2022",
    tipo: "Perro",
    propietario: "Juali Aguirre",
  },
];

const ProgramarVisita = () => {
  const [mascotas, setMascotas] = useState(Data);

  return (
    <div class="grid-container">
      <div class="item1">
        <Header />
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label>
              <h4>Mascotas</h4>
            </label>
            <ListMascotaVisita mascotas={mascotas} />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label>
              <h4>Programación de Visita</h4>
            </label>
            <AddVisita />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <img src="calendario.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramarVisita;
