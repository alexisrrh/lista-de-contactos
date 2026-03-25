import React from "react";

function Contact({ datos ,eliminar}) {





  return (
    <div className="container">
    

      {datos.map((item) => (
        <div key={item.id} className="card mb-3" style={{ width: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://live.staticflickr.com/65535/46898148544_4df1d804af_z.jpg" className="img-fluid rounded-start"alt="imagen" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div><h5 className="card-title">{item.name}</h5> 
                <i className="fa-solid fa-pen"></i>
                <i className="fa-solid fa-trash-can" onClick={()=>eliminar(item.id)}></i>
</div>
                <p><i className="fa-solid fa-location-pin"></i>{item.address}</p>
                <p><i className="fa-solid fa-phone"></i>{item.phone}</p>
                <p><i className="fa-solid fa-envelope"></i>{item.email}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;