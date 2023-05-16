import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListVeterinario from "./ListVeterinario";
import AddVeterinarioForm from "./AddVeterinarioForm";
import EditVeterinarioForm from "./EditVeterinarioForm";
import Header from "../Header";
import Footer from "../Footer";

const Data = [
  {
    id: uuidv4(),
    nombre: "Luis",
    apellido: "Fernandez",
    especialidad: "Radiólogo",
    telefono: "964587825",
  },
  {
    id: uuidv4(),
    nombre: "Pedro",
    apellido: "Garcia",
    especialidad: "Cardiólogo",
    telefono: "987548758",
  },
  {
    id: uuidv4(),
    nombre: "Maria",
    apellido: "Vega",
    especialidad: "Anastesista",
    telefono: "958654785",
  },
];

const initialFormState = {
  id: null,
  nombre: "",
  apellido: "",
  especialidad: "",
  telefono: "",
};

const Veterinarios = () => {
  //state
  const [veterinarios, setVeterinarios] = useState(Data);
  const [editing, setEditing] = useState(false);
  const [currentVeterinario, setCurrentVeterinario] =
    useState(initialFormState);

  //Agregar veterinarios
  const addVeterinario = (veterinario) => {
    veterinario.id = uuidv4();
    setVeterinarios([...veterinarios, veterinario]);
  };

  //Eliminar veterinario
  const deleteVeterinario = (id) => {
    setVeterinarios(
      veterinarios.filter((veterinario) => veterinario.id !== id)
    );
    setEditing(false);
  };

  //Editar veterinario
  const editRow = (veterinario) => {
    setEditing(true);
    setCurrentVeterinario({
      id: veterinario.id,
      nombre: veterinario.nombre,
      apellido: veterinario.apellido,
      especialidad: veterinario.especialidad,
      telefono: veterinario.telefono,
    });
  };

  const updateVeterinario = (id, updatedVeterinario) => {
    setEditing(false);
    setVeterinarios(
      veterinarios.map((veterinario) =>
        veterinario.id === id ? updatedVeterinario : veterinario
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
          <h2>Gestionar Veterinarios</h2>
          <div class="row">
            <div class="col">
              {editing ? (
                <div>
                  <EditVeterinarioForm
                    setEditing={setEditing}
                    currentVeterinario={currentVeterinario}
                    updateVeterinario={updateVeterinario}
                  />
                </div>
              ) : (
                <div>
                  <AddVeterinarioForm
                    addVeterinario={addVeterinario}
                    deleteVeterinario={deleteVeterinario}
                  />
                </div>
              )}
            </div>
          </div>
          <div class="row">
            <div class="col">
              <ListVeterinario
                veterinarios={veterinarios}
                editRow={editRow}
                deleteVeterinario={deleteVeterinario}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="item5"><Footer/></div>
    </div>
  );
};

export default Veterinarios;
