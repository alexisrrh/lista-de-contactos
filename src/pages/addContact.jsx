import {React,useState} from "react";
import { Link } from "react-router-dom";

function Formulario() {


const[nombre, setNombre]=useState("")
const[telefono, setTelefono]=useState("")
const[direccion, setDireccion]=useState("")
const[correo, setCorreo]=useState("")

  const crearUsuario = (nombre, telefono, correo, direccion) => {
    fetch("https://playground.4geeks.com/contact/agendas/alexis12/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nombre,
        phone: telefono,
        email: correo,
        address: direccion
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Creado:", data);
      })
      .catch((error) => console.log(error));
  };


const handleClick = () => {
     console.log("boton funcionando");
     crearUsuario(nombre, telefono, correo,direccion);
	    setNombre("");
    setTelefono("");
    setCorreo("");
    setDireccion("");
  
}





  return (
    <div>
    <form className="container mt-4" style={{ width: 500 }}>
        <div className="mb-3">
        <label  className="form-label">Nombre completo</label>
        <input type="Text" className="form-control" id="nombreCompleto" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
      </div>
      <div className="mb-3">
        <label htmlFor="email1" className="form-label">Email</label>
        <input type="email" className="form-control" id="email1" aria-describedby="emailHelp1" onChange={(e)=>setCorreo(e.target.value)} value={correo}/>
        
      </div>

      

      <div className="mb-3">
        <label  className="form-label">Telefono</label>
        <input type="text" className="form-control" id="telefono" aria-describedby="emailHelp2" onChange={(e)=>setTelefono(e.target.value)} value={telefono}/>
        
      </div>

      <div className="mb-3">
        <label className="form-label">Direccion</label>
        <input type="text" className="form-control" id="password2"  onChange={(e)=>setDireccion(e.target.value)} value={direccion}/>
      </div>
   <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
       <Link to="/">	
	<p className="card-text"><small className="text-muted">volver a contactos</small></p>
      </Link>
    </form>
  
    </div>
  );
}

export default Formulario;