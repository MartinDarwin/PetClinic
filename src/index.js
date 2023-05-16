import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Propietarios from "./components/propietarios/Propietarios";
import Veterinarios from "./components/veterinarios/Veterinarios";
import Mascotas from "./components/mascotas/Mascotas";
import ProgramarVisita from "./components/visitas/ProgramarVisita";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/propietario", element: <Propietarios /> },
  { path: "/veterinario", element: <Veterinarios /> },
  { path: "/programarvisita", element: <ProgramarVisita /> },
  { path: "/mascota", element: <Mascotas /> },
  { path: "*", element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
