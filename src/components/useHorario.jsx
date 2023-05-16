import { useEffect, useState } from "react";

export const useHorario = () => {
  let estado;
  const [horario, setHorario] = useState("...");

  useEffect(() => {
    function horarioAtencion() {
      let date = new Date();
      if (
        (date.getHours() >= 8 && date.getHours() <= 12) ||
        (date.getHours() >= 14 && date.getHours() <= 20)
      ) {
        estado = "ABIERTO";
      } else {
        estado = "CERRADO";
      }
      setHorario(estado);
    }
    horarioAtencion();
  }, []);

  return { horario };
};
