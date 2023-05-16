import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListMascota from "./ListMascota";
import AddMascotaForm from "./AddMascotaForm";
import EditMascotaForm from "./EditMascotaForm";
import Header from "../Header";
import Footer from "../Footer";

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

const initialFormState = {
  id: null,
  nombre: "",
  fecha_naci: "",
  tipo: "",
  propietario: "",
};

const Mascotas = () => {
  //state
  const [mascotas, setMascotas] = useState(Data);
  const [editing, setEditing] = useState(false);
  const [currentMascota, setCurrentMascota] =
    useState(initialFormState);

  //Agregar mascotas
  const addMascota = (mascota) => {
    mascota.id = uuidv4();
    setMascotas([...mascotas, mascota]);
  };

  //Eliminar mascota
  const deleteMascota = (id) => {
    setMascotas(
      mascotas.filter((mascota) => mascota.id !== id)
    );
    setEditing(false);
  };

  //Editar mascota
  const editRow = (mascota) => {
    setEditing(true);
    setCurrentMascota({
      id: mascota.id,
      nombre: mascota.nombre,
      fecha_naci: mascota.fecha_naci,
      tipo: mascota.tipo,
      propietario: mascota.propietario,
    });
  };

  const updateMascota = (id, updatedMascota) => {
    setEditing(false);
    setMascotas(
      mascotas.map((mascota) =>
        mascota.id === id ? updatedMascota : mascota
      )
    );
  };

  return (
    <div class="grid-container">
      <div class="item1">
        <Header />
      </div>
      <div class="item3">
        <div class="container" id="bg">
          <h2>Gestionar Mascotas</h2>
          <div class="row">
            <div class="col">
              {editing ? (
                <div>
                  <EditMascotaForm
                    setEditing={setEditing}
                    currentMascota={currentMascota}
                    updateMascota={updateMascota}
                  />
                </div>
              ) : (
                <div>
                  <AddMascotaForm
                    addMascota={addMascota}
                    deleteMascota={deleteMascota}
                  />
                </div>
              )}
            </div>
          </div>
          <div class="row">
            <div class="col">
              <ListMascota
                mascotas={mascotas}
                editRow={editRow}
                deleteMascota={deleteMascota}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="item5"><Footer/></div>
    </div>
  );
};

export default Mascotas;
