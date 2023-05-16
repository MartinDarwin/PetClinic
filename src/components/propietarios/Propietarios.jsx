import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListPropietario from "./ListPropietario";
import AddPropietarioForm from "./AddPropietarioForm";
import EditPropietarioForm from ".//EditPropietarioForm";
import Header from "../Header";
import Footer from "../Footer";

const usersData = [
  {
    id: uuidv4(),
    nombre: "Tania",
    apellido: "Palomino",
    direccion: "Jr Trujillo N° 258",
    ciudad: "Lima",
    mascota: "Leo",
    telefono: "964587825",
  },
  {
    id: uuidv4(),
    nombre: "Pedro",
    apellido: "Gomez",
    direccion: "Av Arequipa N° 258",
    ciudad: "Cusco",
    mascota: "Firulais",
    telefono: "987548758",
  },
  {
    id: uuidv4(),
    nombre: "Jose",
    apellido: "Torres",
    direccion: "Av Arenales N° 258",
    ciudad: "Trujillo",
    mascota: "Pelusa",
    telefono: "958654785",
  },
];

const initialFormState = {
  id: null,
  nombre: "",
  apellido: "",
  direccion: "",
  ciudad: "",
  mascota: "",
  telefono: "",
};

const Propietarios = () => {
  //state
  const [propietarios, setPropietarios] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentPropietario, setCurrentPropietario] =
    useState(initialFormState);

  //Agregar propietarios
  const addPropietario = (propietario) => {
    propietario.id = uuidv4();
    setPropietarios([...propietarios, propietario]);
  };

  //Eliminar propietario
  const deletePropietario = (id) => {
    setPropietarios(
      propietarios.filter((propietario) => propietario.id !== id)
    );
    setEditing(false);
  };

  //Editar propietario
  const editRow = (propietario) => {
    setEditing(true);
    setCurrentPropietario({
      id: propietario.id,
      nombre: propietario.nombre,
      apellido: propietario.apellido,
      direccion: propietario.direccion,
      ciudad: propietario.ciudad,
      mascota: propietario.mascota,
      telefono: propietario.telefono,
    });
  };

  const updatePropietario = (id, updatedPropietario) => {
    setEditing(false);
    setPropietarios(
      propietarios.map((propietario) =>
        propietario.id === id ? updatedPropietario : propietario
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
          <h2>Gestionar Propietarios</h2>
          <div class="row">
            <div class="col">
              {editing ? (
                <div>
                  <EditPropietarioForm
                    setEditing={setEditing}
                    currentPropietario={currentPropietario}
                    updatePropietario={updatePropietario}
                  />
                </div>
              ) : (
                <div>
                  <AddPropietarioForm
                    addPropietario={addPropietario}
                    deletePropietario={deletePropietario}
                  />
                </div>
              )}
            </div>
          </div>
          <div class="row">
            <div class="col">
              <ListPropietario
                propietarios={propietarios}
                editRow={editRow}
                deletePropietario={deletePropietario}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="item5"><Footer/></div>
    </div>
  );
};

export default Propietarios;
