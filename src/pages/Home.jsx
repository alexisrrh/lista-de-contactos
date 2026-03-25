
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import Contact from "./Contact.jsx";


export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [datos, setDatos] = useState([]);

  const crearAgenda = () => {
    return fetch("https://playground.4geeks.com/contact/agendas/alexis12", {
      method: "POST"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.log(error));
  };

  const contacto = () => {
    fetch("https://playground.4geeks.com/contact/agendas/alexis12/contacts", {
      method: "GET"
    })
      .then((res) => {
        if (res.status === 404) {
          console.log("Agenda no existe, creando...");
          return crearAgenda()
        } else {
          return res;
        }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatos(data.contacts);
      })
      .catch((error) => console.log(error));
  };

  const eliminar = (id) => {
    fetch(`https://playground.4geeks.com/contact/agendas/alexis12/contacts/${id}`, {
      method: "DELETE",
    })
      .then(() => contacto())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    contacto();
  }, []);

  return (
    <div className="text-center mt-5">
      <Contact datos={datos} eliminar={eliminar} />
    </div>
  );
};