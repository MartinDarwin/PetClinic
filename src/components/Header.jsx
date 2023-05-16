import React from "react";
import { useHorario } from "./useHorario";

const Header = () => {

  const {horario} = useHorario();

  console.log("horario header = " + {horario} )
  
  return (
    <div class="container" id="bg">
      <div>
        <img src="cabecera.png" />
      </div>
      <div>Horario de Atención 8:00 am a 12:00 pm - 2:00 pm a 8:00 pm: {horario}</div>
      <div>
        <nav id="menu">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="propietario">PROPIETARIO</a>
            </li>
            <li>
              <a href="mascota">MASCOTA</a>
            </li>

            <ul>
              <li>
                <a href="#">Enlace 2.1</a>
              </li>
              <li>
                <a href="#">Enlace 2.2</a>
              </li>
              <li>
                <a href="#">Enlace 2.3</a>
              </li>
            </ul>

            <li>
              <a href="veterinario">VETERINARIOS</a>
            </li>
            <li>
              <a href="programarvisita">PROGRAMAR VISITA</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
